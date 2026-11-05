import assert from "node:assert/strict";
import { test } from "node:test";
import { Narrator } from "../src/engine/Narrator.ts";
import { AudioPlayback } from "../src/engine/narration/AudioPlayback.ts";
import { narrationKey, RecordedNarration } from "../src/engine/narration/RecordedNarration.ts";
import { Hud } from "../src/engine/Hud.ts";
import { CountingLesson } from "../src/engine/learning/CountingLesson.ts";

class FakeUtterance {
  voice: unknown = null;
  rate = 1;
  pitch = 1;
  onstart: (() => void) | null = null;
  onend: (() => void) | null = null;
  onerror: (() => void) | null = null;

  constructor(readonly text: string) {}
}

class FakeSpeech extends EventTarget {
  speaking = false;
  pending = false;
  queueOnSpeak = true;
  throwOnSpeak = false;
  cancelCount = 0;
  readonly utterances: FakeUtterance[] = [];

  getVoices(): never[] {
    return [];
  }

  speak(utterance: FakeUtterance): void {
    if (this.throwOnSpeak) throw new Error("voice unavailable");
    this.utterances.push(utterance);
    this.pending = this.queueOnSpeak;
  }

  cancel(): void {
    this.cancelCount++;
    this.speaking = false;
    this.pending = false;
  }
}

function createFixture(context: { after(callback: () => void): void }, withSpeech = true, recorded?: RecordedNarration) {
  const previousWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const previousUtterance = Object.getOwnPropertyDescriptor(globalThis, "SpeechSynthesisUtterance");
  const speech = new FakeSpeech();
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: withSpeech ? { speechSynthesis: speech } : {}
  });
  Object.defineProperty(globalThis, "SpeechSynthesisUtterance", {
    configurable: true,
    value: FakeUtterance
  });
  context.after(() => {
    if (previousWindow) Object.defineProperty(globalThis, "window", previousWindow);
    else Reflect.deleteProperty(globalThis, "window");
    if (previousUtterance) Object.defineProperty(globalThis, "SpeechSynthesisUtterance", previousUtterance);
    else Reflect.deleteProperty(globalThis, "SpeechSynthesisUtterance");
  });
  const clock = { now: 0 };
  const narrator = new Narrator(() => clock.now, recorded);
  return { narrator, speech, clock };
}

test("queued and active narration stay busy until the current line ends", (context) => {
  const { narrator, speech, clock } = createFixture(context);
  narrator.speak("The whole garden sparkled with colour.");
  assert.equal(narrator.isSpeaking, true);
  const utterance = speech.utterances[0];
  speech.pending = false;
  speech.speaking = true;
  utterance.onstart?.();
  clock.now = 10_000;
  assert.equal(narrator.isSpeaking, true);
  utterance.onend?.();
  assert.equal(narrator.isSpeaking, false);
});

test("a late completion or error from an interrupted line cannot finish its successor", (context) => {
  const { narrator, speech } = createFixture(context);
  narrator.speak("The first line.");
  const previous = speech.utterances[0];
  narrator.speak("The new line.");
  previous.onend?.();
  previous.onerror?.();
  previous.onstart?.();
  assert.equal(narrator.isSpeaking, true);
  speech.utterances[1].onend?.();
  assert.equal(narrator.isSpeaking, false);
});

test("errors, cancellation and disabling immediately release the narration gate", (context) => {
  const { narrator, speech } = createFixture(context);
  narrator.speak("A line with a voice error.");
  speech.utterances[0].onerror?.();
  assert.equal(narrator.isSpeaking, false);
  narrator.speak("A line to cancel.");
  narrator.cancel();
  assert.equal(narrator.isSpeaking, false);
  narrator.speak("A line to disable.");
  narrator.setEnabled(false);
  assert.equal(narrator.isSpeaking, false);
  narrator.speak("This must stay silent.");
  assert.equal(speech.utterances.length, 3);
});

test("a voice that never starts gets only a short startup grace", (context) => {
  const { narrator, speech, clock } = createFixture(context);
  speech.queueOnSpeak = false;
  narrator.speak("This device cannot begin speaking.");
  assert.equal(narrator.isSpeaking, true);
  clock.now = 1000;
  assert.equal(narrator.isSpeaking, true);
  clock.now = 1300;
  assert.equal(narrator.isSpeaking, false);
});

test("a blocked pending queue cannot hold the story indefinitely", (context) => {
  const { narrator, speech, clock } = createFixture(context);
  narrator.speak("A line queued but never started.");
  clock.now = 4000;
  assert.equal(narrator.isSpeaking, true);
  clock.now = 5100;
  assert.equal(narrator.isSpeaking, false);
  assert.equal(speech.pending, false);
});

test("idle synth status recovers from missing end events after a brief settle", (context) => {
  const { narrator, speech, clock } = createFixture(context);
  narrator.speak("A line whose ending event goes missing.");
  speech.pending = false;
  speech.speaking = true;
  clock.now = 10_000;
  assert.equal(narrator.isSpeaking, true);
  speech.speaking = false;
  clock.now = 10_100;
  assert.equal(narrator.isSpeaking, true);
  clock.now = 10_300;
  assert.equal(narrator.isSpeaking, false);
});

test("a permanently busy speech engine has a bounded watchdog", (context) => {
  const { narrator, speech, clock } = createFixture(context);
  narrator.speak("An engine stuck in its speaking state.");
  speech.pending = false;
  speech.speaking = true;
  clock.now = 89_000;
  assert.equal(narrator.isSpeaking, true);
  clock.now = 90_100;
  assert.equal(narrator.isSpeaking, false);
  assert.equal(speech.speaking, false);
});

test("missing speech support leaves the story ungated", (context) => {
  const { narrator } = createFixture(context, false);
  narrator.speak("This line is displayed without audio.");
  assert.equal(narrator.isSpeaking, false);
});

test("a rejected platform voice does not throw or keep the story waiting", (context) => {
  const { narrator, speech } = createFixture(context);
  speech.throwOnSpeak = true;
  assert.doesNotThrow(() => narrator.speak("The voice service is unavailable."));
  assert.equal(narrator.isSpeaking, false);
});

test("a recorded character line takes priority and file failure uses its speech profile", (context) => {
  const audio = {
    src: "", preload: "", ended: false,
    onended: null as (() => void) | null,
    onerror: null as (() => void) | null,
    onplaying: null as (() => void) | null,
    play: () => new Promise<void>(() => {}),
    pause() {}, load() {}, removeAttribute() {}
  };
  const recorded = new RecordedNarration({
    [narrationKey("Ribbit!", "frog")]: "audio/narration/frog.wav"
  }, new AudioPlayback(() => audio as unknown as HTMLAudioElement));
  const { narrator, speech } = createFixture(context, true, recorded);
  narrator.speak("Ribbit!", "frog");
  assert.equal(narrator.isSpeaking, true);
  assert.equal(speech.utterances.length, 0);
  audio.onerror?.();
  assert.equal(speech.utterances.length, 1);
  assert.equal(speech.utterances[0].text, "Ribbit!");
  assert.ok(speech.utterances[0].pitch < 1);
  assert.equal(narrator.isSpeaking, true);
});

test("missing recorded lines use distinct gentle character speech profiles", (context) => {
  const { narrator, speech } = createFixture(context);
  narrator.speak("A warm story.");
  narrator.speak("Tweet!", "bird");
  narrator.speak("Hello, Mabli.", "snail");
  assert.ok(speech.utterances[1].pitch > speech.utterances[0].pitch);
  assert.ok(speech.utterances[2].rate < speech.utterances[0].rate);
});

test("rapid counting finishes each number before the ending, without voiced progress chatter", (context) => {
  const { narrator, speech } = createFixture(context);
  const previousDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  Object.defineProperty(globalThis, "document", {
    configurable: true,
    value: { getElementById: () => ({ textContent: "", classList: { add() {}, remove() {} } }) }
  });
  context.after(() => {
    if (previousDocument) Object.defineProperty(globalThis, "document", previousDocument);
    else Reflect.deleteProperty(globalThis, "document");
  });
  const lesson = new CountingLesson(narrator);
  const hud = new Hud(narrator, lesson);
  hud.showCaption("Tap each bee.");
  lesson.start(2);
  lesson.advance();
  hud.showCaption("Help the other bee too.");
  lesson.advance();
  hud.showCaption("Thank you, Mabli!", 0, "bee");
  assert.deepEqual(speech.utterances.map((line) => line.text), ["Tap each bee.", "One."]);
  assert.equal(narrator.isSpeaking, true);

  speech.utterances[1].onend?.();
  narrator.update();
  assert.equal(speech.utterances.at(-1)?.text, "Two.");
  speech.utterances[2].onend?.();
  narrator.update();
  assert.equal(speech.utterances.at(-1)?.text, "Thank you, Mabli!");
  speech.utterances[3].onend?.();
  assert.equal(narrator.isSpeaking, false);
});

test("regular speech still interrupts and clears queued lesson lines", (context) => {
  const { narrator, speech } = createFixture(context);
  narrator.enqueue("One.");
  narrator.enqueue("Two.");
  narrator.speak("A new chapter.");
  speech.utterances.at(-1)?.onend?.();
  narrator.update();
  assert.deepEqual(speech.utterances.map((line) => line.text), ["One.", "A new chapter."]);
  assert.equal(narrator.isSpeaking, false);
});

test("a stuck speech line releases the next queued number without clearing or crashing", (context) => {
  const { narrator, speech, clock } = createFixture(context);
  narrator.enqueue("One.");
  narrator.enqueue("Two.");
  clock.now = 5100;
  assert.doesNotThrow(() => narrator.update());
  assert.deepEqual(speech.utterances.map((line) => line.text), ["One.", "Two."]);
  assert.equal(narrator.isSpeaking, true);
});
