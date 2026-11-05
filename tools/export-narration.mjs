import { createHash } from "node:crypto";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import ts from "typescript";

const lines = new Map();
const literal = (node) => node && (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) ? node.text : null;

function add(text, speaker = "narrator") {
  if (!text?.trim()) return;
  const key = `${speaker}\n${text.trim()}`;
  const id = `${speaker}-${createHash("sha256").update(key).digest("hex").slice(0, 12)}`;
  lines.set(key, { id, text: text.trim(), speaker });
}

function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText() === "COUNTING_WORDS") {
    const array = node.initializer && ts.isAsExpression(node.initializer) ? node.initializer.expression : node.initializer;
    if (array && ts.isArrayLiteralExpression(array)) {
      for (const element of array.elements) add(literal(element));
    }
  }
  if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
    const method = node.expression.name.text;
    const first = literal(node.arguments[0]);
    if (method === "showCaption") add(first, literal(node.arguments[2]) ?? "narrator");
    if (method === "showEndCard") {
      const subtitle = literal(node.arguments[1]);
      if (first && subtitle) add(`${first}. ${subtitle}`);
    }
  }
  if (ts.isObjectLiteralExpression(node)) {
    const fields = new Map(node.properties
      .filter(ts.isPropertyAssignment)
      .map((property) => [property.name.getText().replaceAll('"', ""), literal(property.initializer)]));
    // Authored hint lines carry their own speaker alongside the shared copy.
    if (fields.has("text") && fields.has("speaker")) {
      add(fields.get("text"), fields.get("speaker") ?? "narrator");
    }
    if (fields.has("opening") && fields.has("prompt") && fields.has("ending")) {
      add(fields.get("opening"));
      const speaker = fields.get("voice") ?? "narrator";
      for (const field of ["prompt", "progress", "ending"]) add(fields.get(field), speaker);
    }
  }
  ts.forEachChild(node, visit);
}

function readDirectory(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) readDirectory(path);
    else if (entry.name.endsWith(".ts")) {
      visit(ts.createSourceFile(path, readFileSync(path, "utf8"), ts.ScriptTarget.Latest, true));
    }
  }
}

readDirectory(resolve("src/game"));
const countingFile = resolve("src/engine/learning/CountingLesson.ts");
visit(ts.createSourceFile(countingFile, readFileSync(countingFile, "utf8"), ts.ScriptTarget.Latest, true));
const json = JSON.stringify([...lines.values()], null, 2) + "\n";
if (process.argv[2]) {
  const output = resolve(process.argv[2]);
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, json, "utf8");
  process.stdout.write(`Exported ${lines.size} narration lines to ${output}\n`);
} else process.stdout.write(json);
