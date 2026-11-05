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
 * Reads story text aloud using the browser's built-in Web Speech API. It needs
 * no server, no audio files and no dependencies. Speech must be kicked off from
 * a user gesture (the game starts on a button click, so that is satisfied).
 *
 * This is intentionally minimal — a place to later swap in nicer, pre-generated
 * audio if desired.
 */
export class Narrator {
  private readonly synth: SpeechSynthesis | null =
    typeof window !== "undefined" ? window.speechSynthesis ?? null : null;
  private voice: SpeechSynthesisVoice | null = null;
  private current: NarrationRequest | null = null;

  enabled = true;
  rate = 0.92;
  pitch = 1;

  constructor(private readonly now: () => number = () => performance.now()) {
    if (!this.synth) return;
    this.pickVoice();
    // Voice list often loads asynchronously.
    this.synth.addEventListener?.("voiceschanged", () => this.pickVoice());
  }

  /** Own queued/active narration, including a short browser startup grace. */
  get isSpeaking(): boolean {
    const request = this.current;
    if (!request || !this.synth) return false;
    const now = this.now();
    // Broken platform speech engines must not hold the story indefinitely.
    if (now - request.requestedAt > MAX_NARRATION_WAIT_MS) {
      this.cancel();
      return false;
    }
    if (this.synth.speaking) {
      request.observedActivity = true;
      request.lastActivityAt = now;
      return true;
    }
    if (this.synth.pending && !request.observedActivity) {
      if (now - request.requestedAt <= MAX_PENDING_START_MS) return true;
      this.cancel();
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
    const voices = this.synth?.getVoices() ?? [];
    this.voice = voices.find((v) => /^en(-|_|$)/i.test(v.lang)) ?? voices[0] ?? null;
  }

  /** Speak a line, interrupting any line currently being read. */
  speak(text: string): void {
    if (!this.enabled || !this.synth || !text.trim()) return;
    if (typeof SpeechSynthesisUtterance === "undefined") return;
    this.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (this.voice) utterance.voice = this.voice;
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;
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
    this.current = null;
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
