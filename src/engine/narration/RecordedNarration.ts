import { AudioPlayback } from "./AudioPlayback.ts";
import type { StoryVoice } from "./StoryVoice.ts";

export type NarrationClipMap = Readonly<Record<string, string>>;

/** Stable keys keep the audio catalogue independent of scene file names. */
export function narrationKey(text: string, speaker: StoryVoice = "narrator"): string {
  return `${speaker}\n${text.trim()}`;
}

/** Finds a recorded line and resolves its asset beneath the deployed game URL. */
export class RecordedNarration {
  constructor(
    private readonly clips: NarrationClipMap,
    private readonly playback = new AudioPlayback(),
    private readonly baseUrl = typeof document === "undefined" ? "http://localhost/" : document.baseURI
  ) {}

  get isPlaying(): boolean {
    return this.playback.isPlaying;
  }

  play(text: string, speaker: StoryVoice, onUnavailable: () => void): boolean {
    const path = this.clips[narrationKey(text, speaker)];
    if (!path) return false;
    let url: string;
    try {
      url = new URL(path, this.baseUrl).href;
    } catch {
      return false;
    }
    return this.playback.play(url, onUnavailable);
  }

  cancel(): void {
    this.playback.cancel();
  }
}
