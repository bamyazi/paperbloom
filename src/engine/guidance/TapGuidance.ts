import type { Popup } from "../Popup.ts";
import type { StoryVoice } from "../narration/StoryVoice.ts";

export interface TapHint {
  text: string;
  speaker?: StoryVoice;
}

/** Presentation follows the artwork; it never changes the puzzle's hit areas. */
export interface TapHintView {
  canShow(target: Popup): boolean;
  show(target: Popup): void;
  update(): void;
  reset(): void;
}

export interface TapGuidanceOptions {
  hints: readonly TapHint[];
  isNarrating: () => boolean;
  /** Return a cancellation handle belonging only to this particular hint. */
  showHint: (hint: TapHint) => () => void;
  view?: TapHintView;
}

const FIRST_HINT_DELAY_SECONDS = 8;
const NEXT_HINT_DELAY_SECONDS = 12;

/** Offers two patient reminders per pause, only while a puzzle is ready. */
export class TapGuidance {
  private targets: Popup[] = [];
  private quietSeconds = 0;
  private nextHint = 0;
  private highlighted: Popup | null = null;
  private cancelHint: (() => void) | null = null;

  constructor(private readonly options: TapGuidanceOptions) {}

  start(targets: readonly Popup[]): void {
    this.reset();
    this.targets = [...targets];
  }

  /** Dismiss help before the puzzle queues its next number or closing line. */
  progress(target: Popup): void {
    if (!this.targets.includes(target)) return;
    this.targets = this.targets.filter((candidate) => candidate !== target);
    this.restartPause();
  }

  update(dt: number, active = true): void {
    this.options.view?.update();
    if (!this.targets.length) return;
    const target = this.targets.find((candidate) => this.isEligible(candidate));
    if (!active || !target) {
      // Returning to the book gets a fresh grace period, never an overdue hint.
      this.restartPause();
      return;
    }
    if (this.highlighted && !this.isEligible(this.highlighted)) this.restartPause();
    if (this.options.isNarrating()) {
      this.quietSeconds = 0;
      return;
    }
    if (this.nextHint >= this.options.hints.length) return;
    this.quietSeconds += Number.isFinite(dt) ? Math.max(0, dt) : 0;
    const delay = this.nextHint === 0 ? FIRST_HINT_DELAY_SECONDS : NEXT_HINT_DELAY_SECONDS;
    if (this.quietSeconds < delay) return;

    this.highlighted = target;
    this.options.view?.show(target);
    this.cancelHint = this.options.showHint(this.options.hints[this.nextHint]);
    this.nextHint++;
    this.quietSeconds = 0;
  }

  reset(): void {
    this.targets = [];
    this.restartPause();
  }

  private isEligible(target: Popup): boolean {
    return target.root.visible && target.isOpen && !target.isColored &&
      (this.options.view?.canShow(target) ?? true);
  }

  private restartPause(): void {
    const cancel = this.cancelHint;
    this.cancelHint = null;
    cancel?.();
    this.highlighted = null;
    this.options.view?.reset();
    this.quietSeconds = 0;
    this.nextHint = 0;
  }
}
