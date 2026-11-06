import assert from "node:assert/strict";
import { test } from "node:test";
import { PlayfulNarration } from "../src/engine/exploration/PlayfulNarration.ts";
import type { PlayLine, PlayProfile } from "../src/engine/exploration/PlayProfile.ts";

const first: PlayLine = { text: "Rustle, rustle!", speaker: "narrator" };
const second: PlayLine = { text: "Tickle my leaves!", speaker: "narrator" };
const redirect: PlayLine = { text: "I'm a tree. Can you find the frog?", speaker: "mabli" };
const tree: PlayProfile = {
  id: "tree",
  lines: [first, second],
  focusReplies: { frog: [redirect] }
};

function fixture() {
  let busy = false;
  const spoken: PlayLine[] = [];
  const cancelled: PlayLine[] = [];
  const speech = new PlayfulNarration(() => busy, (line) => {
    spoken.push(line);
    return () => { cancelled.push(line); };
  });
  return { speech, spoken, cancelled, setBusy: (value: boolean) => { busy = value; } };
}

test("optional voices wait for all narration and share one story-time cooldown", () => {
  const f = fixture();
  const rock: PlayProfile = { id: "rock", lines: [{ text: "Tap, tap!", speaker: "narrator" }] };
  f.setBusy(true);
  f.speech.say(tree, "");
  assert.deepEqual(f.spoken, []);
  f.setBusy(false);
  f.speech.say(tree, "");
  f.speech.say(rock, "");
  f.speech.update(2.49);
  f.speech.say(rock, "");
  assert.deepEqual(f.spoken, [first]);
  f.speech.update(0.01);
  f.speech.say(rock, "");
  assert.deepEqual(f.spoken, [first, rock.lines[0]]);
  f.speech.update(3);
  f.setBusy(true);
  f.speech.say(tree, "");
  assert.equal(f.spoken.length, 2);
  f.setBusy(false);
  f.speech.say(tree, "");
  assert.equal(f.spoken.at(-1), second, "busy taps never queue or consume a line");
});

test("a useful focus reply comes first and repeats after every two varied asides", () => {
  const f = fixture();
  for (let tap = 0; tap < 7; tap++) {
    f.speech.say(tree, "frog");
    f.speech.update(2.5);
  }
  assert.deepEqual(f.spoken, [redirect, second, first, redirect, first, second, redirect]);
  assert.equal(f.spoken[0].speaker, "mabli");
});

test("unknown focus uses ordinary lines, whose cycles belong to each character", () => {
  const f = fixture();
  const bird: PlayProfile = { id: "bird", lines: [{ text: "Tweet!", speaker: "bird" }] };
  f.speech.say(tree, "fox");
  f.speech.update(2.5);
  f.speech.say(bird, "fox");
  f.speech.update(2.5);
  f.speech.say(tree, "fox");
  assert.deepEqual(f.spoken, [first, bird.lines[0], second]);
});

test("empty dialogue does not consume the global voice cooldown", () => {
  const f = fixture();
  f.speech.say({ id: "silent", lines: [] }, "frog");
  f.speech.say(tree, "");
  assert.deepEqual(f.spoken, [first]);
});

test("cancelling an aside uses only its owned handle and preserves the next cooldown", () => {
  const f = fixture();
  f.speech.say(tree, "");
  f.speech.cancel();
  f.speech.cancel();
  assert.deepEqual(f.cancelled, [first]);
  f.speech.say(tree, "");
  assert.deepEqual(f.spoken, [first]);
  f.speech.update(2.5);
  f.speech.say(tree, "");
  assert.deepEqual(f.spoken, [first, second]);
});

test("finishing or disposing stops optional speech without restarting it later", () => {
  const f = fixture();
  f.speech.say(tree, "");
  f.speech.finish();
  f.speech.update(100);
  f.speech.say(tree, "frog");
  f.speech.dispose();
  f.speech.dispose();
  f.speech.say(tree, "frog");
  assert.deepEqual(f.spoken, [first]);
  assert.deepEqual(f.cancelled, [first]);
});
