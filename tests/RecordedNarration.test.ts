import assert from "node:assert/strict";
import { test } from "node:test";
import { AudioPlayback } from "../src/engine/narration/AudioPlayback.ts";
import { narrationKey, RecordedNarration } from "../src/engine/narration/RecordedNarration.ts";

class FakeAudio {
  src = "";
  preload = "";
  ended = false;
  onended: (() => void) | null = null;
  onerror: (() => void) | null = null;
  onplaying: (() => void) | null = null;
  pauses = 0;
  loads = 0;
  readonly promises: Array<{ resolve: () => void; reject: () => void }> = [];

  play(): Promise<void> {
    this.ended = false;
    return new Promise((resolve, reject) => {
      this.promises.push({ resolve, reject: () => reject(new Error("audio unavailable")) });
    });
  }

  pause(): void {
    this.pauses++;
  }

  removeAttribute(name: string): void {
    if (name === "src") this.src = "";
  }

  load(): void {
    this.loads++;
  }
}

test("recorded lookup keeps speaker keys separate and resolves beneath GitHub Pages", () => {
  const audio = new FakeAudio();
  const playback = new AudioPlayback(() => audio as unknown as HTMLAudioElement);
  const recorded = new RecordedNarration({
    [narrationKey("Hello!", "frog")]: "audio/narration/frog.wav"
  }, playback, "https://bamyazi.github.io/paperbloom/?episode=frog");
  assert.equal(recorded.play("Hello!", "narrator", () => {}), false);
  assert.equal(recorded.play("  Hello!  ", "frog", () => {}), true);
  assert.equal(audio.src, "https://bamyazi.github.io/paperbloom/audio/narration/frog.wav");
  assert.equal(recorded.isPlaying, true);
  audio.onplaying?.();
  audio.ended = true;
  audio.onended?.();
  assert.equal(recorded.isPlaying, false);
  assert.equal(narrationKey(" Hello! ", "frog"), "frog\nHello!");
});

test("pending play counts as active and cancellation stops and releases the clip", () => {
  const audio = new FakeAudio();
  const playback = new AudioPlayback(() => audio as unknown as HTMLAudioElement);
  playback.play("first.wav", () => {});
  assert.equal(playback.isPlaying, true);
  playback.cancel();
  assert.equal(playback.isPlaying, false);
  assert.equal(audio.src, "");
  assert.equal(audio.pauses, 1);
  assert.equal(audio.loads, 1);
});

test("callbacks and rejected promises from a superseded clip cannot affect its successor", async () => {
  const audio = new FakeAudio();
  let allocations = 0;
  let failed = 0;
  const playback = new AudioPlayback(() => {
    allocations++;
    return audio as unknown as HTMLAudioElement;
  });
  playback.play("first.wav", () => failed++);
  const firstEnd = audio.onended!;
  const firstError = audio.onerror!;
  playback.play("second.wav", () => failed++);
  firstEnd();
  firstError();
  audio.promises[0].reject();
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(failed, 0);
  assert.equal(playback.isPlaying, true);
  assert.equal(audio.src, "second.wav");
  assert.equal(allocations, 1, "reuse a single owned audio element");
});

test("a file error invokes fallback once even when the play promise also rejects", async () => {
  const audio = new FakeAudio();
  let failed = 0;
  const playback = new AudioPlayback(() => audio as unknown as HTMLAudioElement);
  playback.play("missing.wav", () => failed++);
  audio.onerror?.();
  audio.promises[0].reject();
  await Promise.resolve();
  await Promise.resolve();
  assert.equal(failed, 1);
  assert.equal(playback.isPlaying, false);
  assert.equal(audio.src, "");
});

test("a play promise that never starts falls back without stalling the story", () => {
  const audio = new FakeAudio();
  const clock = { now: 0 };
  let failed = 0;
  const playback = new AudioPlayback(() => audio as unknown as HTMLAudioElement, () => clock.now);
  playback.play("blocked.wav", () => failed++);
  clock.now = 8100;
  assert.equal(playback.isPlaying, false);
  assert.equal(failed, 1);
});

test("unsupported audio and invalid asset URLs decline playback cleanly", () => {
  const unavailable = new AudioPlayback(() => null);
  assert.equal(unavailable.play("line.wav", () => {}), false);
  const invalid = new RecordedNarration({ [narrationKey("Hello")]: "http://[broken" });
  assert.equal(invalid.play("Hello", "narrator", () => {}), false);
});
