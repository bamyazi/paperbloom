/**
 * Hud
 * ---
 * Thin wrapper around the HTML overlay: the title card and the storybook
 * caption line. Keeping DOM access in one place stops the 3D code from
 * reaching into the document. Captions are also read aloud by the narrator.
 */
import { Narrator } from "./Narrator.ts";
import type { StoryVoice } from "./narration/StoryVoice.ts";
import { CountingLesson } from "./learning/CountingLesson.ts";

export class Hud {
  private readonly titleCard: HTMLElement;
  private readonly startButton: HTMLButtonElement;
  private readonly caption: HTMLElement;
  private readonly endCard: HTMLElement;
  private readonly endTitle: HTMLElement;
  private readonly endSubtitle: HTMLElement;
  private captionTimer = 0;

  constructor(
    private readonly narrator?: Narrator,
    readonly counting = new CountingLesson(narrator)
  ) {
    this.titleCard = document.getElementById("title-card")!;
    this.startButton = document.getElementById("start-button") as HTMLButtonElement;
    this.caption = document.getElementById("caption")!;
    this.endCard = document.getElementById("end-card")!;
    this.endTitle = document.getElementById("end-title")!;
    this.endSubtitle = document.getElementById("end-subtitle")!;
  }

  onStart(callback: () => void): void {
    this.startButton.addEventListener(
      "click",
      () => {
        // Opacity only hides the artwork. Make the whole title subtree inert
        // so its button cannot keep intercepting taps or keyboard focus.
        this.titleCard.inert = true;
        this.titleCard.classList.add("hidden");
        callback();
      },
      { once: true }
    );
  }

  /** Show a caption, read it aloud, and (if `seconds` given) auto-hide it. */
  showCaption(text: string, seconds = 0, speaker: StoryVoice = "narrator"): void {
    this.caption.textContent = text;
    this.caption.classList.add("visible");
    this.captionTimer = seconds > 0 ? seconds : 0;
    if (this.counting.hasCounted) {
      // Progress remains visible without interrupting the numbers. The final
      // dialogue follows the last number and participates in the usual gate.
      if (this.counting.isComplete) this.narrator?.enqueue(text, speaker);
    } else {
      this.narrator?.speak(text, speaker);
    }
  }

  hideCaption(): void {
    this.caption.classList.remove("visible");
    this.captionTimer = 0;
  }

  /** Reveal the closing card and read it aloud. */
  showEndCard(title: string, subtitle: string): void {
    this.hideCaption();
    this.endTitle.textContent = title;
    this.endSubtitle.textContent = subtitle;
    this.endCard.classList.add("visible");
    this.narrator?.speak(`${title}. ${subtitle}`);
  }

  update(dt: number): void {
    if (this.captionTimer > 0) {
      this.captionTimer -= dt;
      if (this.captionTimer <= 0) this.hideCaption();
    }
  }
}
