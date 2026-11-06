import type { PlayLine, PlayProfile } from "./PlayProfile.ts";

/** Owns optional asides, with room for counted numbers and the story to finish. */
export class PlayfulNarration {
  private readonly spoken = new Map<string, number>();
  private elapsed = 0;
  private lastSpoken = -Infinity;
  private cancelLine: (() => void) | null = null;
  private finished = false;

  constructor(
    private readonly isBusy: () => boolean,
    private readonly showLine: (line: PlayLine) => () => void
  ) {}

  update(dt: number): void {
    this.elapsed += Math.max(0, dt);
  }

  say(profile: PlayProfile, focus: string): void {
    if (this.finished || this.isBusy() || this.elapsed - this.lastSpoken < 2.5) return;
    const count = this.spoken.get(profile.id) ?? 0;
    const redirect = profile.focusReplies?.[focus];
    const lines = redirect?.length && count % 3 === 0 ? redirect : profile.lines;
    if (!lines.length) return;
    this.cancelLine = this.showLine(lines[count % lines.length]);
    this.spoken.set(profile.id, count + 1);
    this.lastSpoken = this.elapsed;
  }

  /** Cancel only this owned aside, before the next number is queued. */
  cancel(): void {
    const cancel = this.cancelLine;
    this.cancelLine = null;
    cancel?.();
  }

  finish(): void {
    this.cancel();
    this.finished = true;
  }

  dispose(): void {
    this.finish();
    this.spoken.clear();
  }
}
