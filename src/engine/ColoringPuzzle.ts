import { InteractionManager } from "./Interaction.ts";
import { Popup } from "./Popup.ts";
import { SoundEngine } from "./SoundEngine.ts";

export interface ColorTarget {
  /** The element to colour when tapped. */
  popup: Popup;
  /** The colour it becomes. */
  color: string;
}

export interface ColoringPuzzleOptions {
  interaction: InteractionManager;
  /** The elements the child must colour to finish the puzzle. */
  targets: ColorTarget[];
  /** Optional sound engine for colour chimes and the success sparkle. */
  sound?: SoundEngine;
  /** Fired after each successful colouring, with how many are left. */
  onColor?: (remaining: number, total: number) => void;
  /** Fired once every target has been coloured. */
  onComplete?: () => void;
}

/**
 * ColoringPuzzle
 * --------------
 * The core "tap to colour" mechanic. Register a set of elements as targets; a
 * tap (or touch) fills a target with its colour and pops it. When every target
 * is coloured the puzzle completes. Generic and reusable for any elements —
 * flowers, animals, objects — in any scene.
 */
export class ColoringPuzzle {
  private remaining: number;
  private done = false;

  constructor(private readonly options: ColoringPuzzleOptions) {
    this.remaining = options.targets.length;
    for (const target of options.targets) {
      // A gentle pulse makes each tappable target obvious to a small child, and
      // a big invisible pad makes it very forgiving to tap.
      target.popup.setHighlighted(true);
      target.popup.enlargeHitArea();
      options.interaction.register({
        object: target.popup.root,
        cursor: "pointer",
        generous: true,
        onClick: () => this.colorIn(target)
      });
    }
    if (this.remaining === 0) this.finish();
  }

  private colorIn(target: ColorTarget): void {
    if (target.popup.isColored) return;
    target.popup.colorize(target.color);
    this.options.interaction.unregister(target.popup.root);

    this.remaining--;
    const total = this.options.targets.length;
    this.options.sound?.chime(total - this.remaining - 1);
    this.options.onColor?.(this.remaining, total);
    if (this.remaining <= 0) this.finish();
  }

  private finish(): void {
    if (this.done) return;
    this.done = true;
    this.options.sound?.success();
    this.options.onComplete?.();
  }
}
