import type { StoryVoice } from "./StoryVoice.ts";

interface QueuedLine {
  text: string;
  speaker: StoryVoice;
}

/** Serialises short spoken lessons without changing normal speech interruption. */
export class NarrationQueue {
  private readonly lines: QueuedLine[] = [];

  constructor(
    private readonly isBusy: () => boolean,
    private readonly play: (text: string, speaker: StoryVoice) => void
  ) {}

  get hasPending(): boolean {
    return this.lines.length > 0;
  }

  add(text: string, speaker: StoryVoice): void {
    this.lines.push({ text, speaker });
    this.update();
  }

  update(): void {
    if (!this.lines.length || this.isBusy()) return;
    // Status checks can synchronously finish/cancel a failed playback request.
    const next = this.lines.shift();
    if (next) this.play(next.text, next.speaker);
  }

  clear(): void {
    this.lines.length = 0;
  }
}
