import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const repository = resolve(dirname(fileURLToPath(import.meta.url)), "../..");
const manifestPath = resolve(repository, ".artifacts/narration-lines.json");
execFileSync(process.execPath, [resolve(repository, "tools/export-narration.mjs"), manifestPath], {
  cwd: repository,
  stdio: "inherit"
});
const readJson = (path) => JSON.parse(readFileSync(path, "utf8").replace(/^\uFEFF/, ""));
const lines = readJson(manifestPath);
const audioDirectory = resolve(repository, "public/audio/narration");
const clips = readJson(resolve(audioDirectory, "manifest.json"));
const records = readJson(resolve(audioDirectory, "generation.json"));
const keyOf = (line) => `${line.speaker}\n${line.text.trim()}`;
const expectedKeys = lines.map(keyOf).sort();
assert.deepEqual(Object.keys(clips).sort(), expectedKeys, "Every current story/counting line needs exactly one catalogue entry");
assert.deepEqual(records.map(keyOf).sort(), expectedKeys, "Generation provenance must match the current story text");

function inspectWave(bytes, name) {
  assert.equal(bytes.toString("ascii", 0, 4), "RIFF", `${name}: RIFF header`);
  assert.equal(bytes.toString("ascii", 8, 12), "WAVE", `${name}: WAV format`);
  let format;
  let samples;
  for (let offset = 12; offset + 8 <= bytes.length;) {
    const type = bytes.toString("ascii", offset, offset + 4);
    const length = bytes.readUInt32LE(offset + 4);
    const start = offset + 8;
    assert.ok(start + length <= bytes.length, `${name}: complete ${type} chunk`);
    if (type === "fmt ") {
      format = {
        encoding: bytes.readUInt16LE(start), channels: bytes.readUInt16LE(start + 2),
        rate: bytes.readUInt32LE(start + 4), bits: bytes.readUInt16LE(start + 14)
      };
    }
    if (type === "data") samples = bytes.subarray(start, start + length);
    offset = start + length + (length % 2);
  }
  assert.deepEqual(format, { encoding: 1, channels: 1, rate: 24000, bits: 16 }, `${name}: PCM16 mono 24kHz`);
  assert.ok(samples?.length > 0 && samples.length % 2 === 0, `${name}: nonempty complete samples`);
  let peak = 0;
  for (let offset = 0; offset < samples.length; offset += 2) peak = Math.max(peak, Math.abs(samples.readInt16LE(offset)));
  assert.ok(peak > 0 && peak < 32767, `${name}: audible samples without clipping`);
  return samples.length / 2 / format.rate;
}

let totalSeconds = 0;
for (const record of records) {
  const path = resolve(repository, "public", clips[keyOf(record)]);
  const withinAudio = relative(audioDirectory, path);
  assert.ok(!withinAudio.startsWith("..") && !withinAudio.includes(":"), "Catalogue paths must remain inside the audio directory");
  assert.equal(withinAudio, record.file, "Catalogue and provenance must identify the same WAV");
  const bytes = readFileSync(path);
  assert.equal(createHash("sha256").update(bytes).digest("hex"), record.sha256, `${record.file}: SHA-256`);
  const seconds = inspectWave(bytes, record.file);
  assert.ok(Math.abs(seconds - record.seconds) < 0.001, `${record.file}: recorded duration`);
  totalSeconds += seconds;
}

const cataloguePath = resolve(repository, "src/game/audio/narrationClips.ts");
const source = ts.createSourceFile(cataloguePath, readFileSync(cataloguePath, "utf8"), ts.ScriptTarget.Latest, true);
let bundledClips;
function findCatalogue(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(source) === "NARRATION_CLIPS") {
    bundledClips = JSON.parse(node.initializer.getText(source));
  }
  ts.forEachChild(node, findCatalogue);
}
findCatalogue(source);
assert.deepEqual(bundledClips, clips, "Bundled TypeScript catalogue must match public manifest.json");
console.log(`Verified ${records.length} current recordings (${totalSeconds.toFixed(3)}s), all WAV formats, hashes and both catalogues.`);
