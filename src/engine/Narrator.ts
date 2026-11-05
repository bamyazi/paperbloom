import type { RecordedNarration } from "./narration/RecordedNarration.ts";
import { selectStoryVoice, STORY_VOICES } from "./narration/StoryVoice.ts";
import type { StoryVoice } from "./narration/StoryVoice.ts";
import { NarrationQueue } from "./narration/NarrationQueue.ts";

interface NarrationRequest {
  utterance: SpeechSynthesisUtterance;
  requestedAt: number;
  lastActivityAt: number;
  observedActivity: boolean;
}

const STARTUP_GRACE_MS = 1200;
const MAX_PENDING_START_MS = 5000;
const STATUS_SETTLE_MS = 250;
const MAX_NARRATION_WAIT_MS = 90_000;

/**
 * Narrator
 * --------
 * Plays locally recorded character lines first, with warm browser voices as a
 * fallback. Owns cancellation and the completion gate used before page turns.
 */
export class Narrator {
  private readonly synth: SpeechSynthesis | null =
    typeof window !== "undefined" ? window.speechSynthesis ?? null : null;
  private voices: readonly SpeechSynthesisVoice[] = [];
  private current: NarrationRequest | null = null;
  private generation = 0;
  private readonly queue = new NarrationQueue(
    () => this.isPlaybackBusy(),
    (text, speaker) => this.startLine(text, speaker)
  );

  enabled = true;
  rate = 0.92;
  pitch = 1;

  constructor(
    private readonly now: () => number = () => performance.now(),
    private readonly recorded?: RecordedNarration
  ) {
    if (!this.synth) return;
    this.pickVoice();
    // Voice list often loads asynchronously.
    this.synth.addEventListener?.("voiceschanged", () => this.pickVoice());
  }

  /** Own queued/active narration, including a short browser startup grace. */
  get isSpeaking(): boolean {
    this.queue.update();
    return this.queue.hasPending || this.isPlaybackBusy();
  }

  /** Pump queued lesson lines every game frame, including before completion. */
  update(): void {
    this.queue.update();
  }

  private isPlaybackBusy(): boolean {
    if (this.recorded?.isPlaying) return true;
    const request = this.current;
    if (!request || !this.synth) return false;
    const now = this.now();
    // Broken platform speech engines must not hold the story indefinitely.
    if (now - request.requestedAt > MAX_NARRATION_WAIT_MS) {
      this.stopPlayback();
      return false;
    }
    if (this.synth.speaking) {
      request.observedActivity = true;
      request.lastActivityAt = now;
      return true;
    }
    if (this.synth.pending && !request.observedActivity) {
      if (now - request.requestedAt <= MAX_PENDING_START_MS) return true;
      this.stopPlayback();
      return false;
    }
    const grace = request.observedActivity ? STATUS_SETTLE_MS : STARTUP_GRACE_MS;
    if (now - request.lastActivityAt <= grace) return true;
    // Some Android voices omit end/error events. Their idle synth status is
    // the fallback after the initial queue/startup window has settled.
    this.finish(request);
    return false;
  }

  private pickVoice(): void {
    this.voices = this.synth?.getVoices() ?? [];
  }

  /** Speak a line, interrupting any line currently being read. */
  speak(text: string, speaker: StoryVoice = "narrator"): void {
    if (!this.enabled || !text.trim()) return;
    this.queue.clear();
    this.startLine(text, speaker);
  }

  enqueue(text: string, speaker: StoryVoice = "narrator"): void {
    if (this.enabled && text.trim()) this.queue.add(text, speaker);
  }

  private startLine(text: string, speaker: StoryVoice): void {
    this.stopPlayback();
    const generation = this.generation;
    const recorded = this.recorded?.play(text, speaker, () => {
      if (this.enabled && generation === this.generation) this.speakSpeech(text, speaker);
    });
    if (!recorded) this.speakSpeech(text, speaker);
  }

  private speakSpeech(text: string, speaker: StoryVoice): void {
    if (!this.synth || typeof SpeechSynthesisUtterance === "undefined") return;
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = selectStoryVoice(this.voices, speaker);
    if (voice) utterance.voice = voice;
    utterance.rate = STORY_VOICES[speaker].rate * this.rate / 0.92;
    utterance.pitch = STORY_VOICES[speaker].pitch * this.pitch;
    const request: NarrationRequest = {
      utterance,
      requestedAt: this.now(),
      lastActivityAt: this.now(),
      observedActivity: false
    };
    this.current = request;
    utterance.onstart = () => {
      if (this.current !== request) return;
      request.observedActivity = true;
      request.lastActivityAt = this.now();
    };
    utterance.onend = () => this.finish(request);
    utterance.onerror = () => this.finish(request);
    try {
      this.synth.speak(utterance);
    } catch {
      // An unavailable device voice should leave the text playable silently.
      this.finish(request);
    }
  }

  /** Stop any narration in progress. */
  cancel(): void {
    this.queue.clear();
    this.stopPlayback();
  }

  private stopPlayback(): void {
    this.generation++;
    this.current = null;
    this.recorded?.cancel();
    this.synth?.cancel();
  }

  private finish(request: NarrationRequest): void {
    // A delayed callback from an interrupted line must not finish its successor.
    if (this.current === request) this.current = null;
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) this.cancel();
  }
}
