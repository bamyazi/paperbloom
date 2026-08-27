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

  enabled = true;
  rate = 0.92;
  pitch = 1;

  constructor() {
    if (!this.synth) return;
    this.pickVoice();
    // Voice list often loads asynchronously.
    this.synth.addEventListener?.("voiceschanged", () => this.pickVoice());
  }

  private pickVoice(): void {
    const voices = this.synth?.getVoices() ?? [];
    this.voice = voices.find((v) => /^en(-|_|$)/i.test(v.lang)) ?? voices[0] ?? null;
  }

  /** Speak a line, interrupting any line currently being read. */
  speak(text: string): void {
    if (!this.enabled || !this.synth || !text.trim()) return;
    this.synth.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    if (this.voice) utterance.voice = this.voice;
    utterance.rate = this.rate;
    utterance.pitch = this.pitch;
    this.synth.speak(utterance);
  }

  /** Stop any narration in progress. */
  cancel(): void {
    this.synth?.cancel();
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled) this.cancel();
  }
}
