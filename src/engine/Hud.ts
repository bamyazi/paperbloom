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
  private readonly restartButton: HTMLButtonElement;
  private captionTimer = 0;
  private captionGeneration = 0;

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
    this.restartButton = document.getElementById("restart-button") as HTMLButtonElement;
    this.endCard.inert = true;
    this.restartButton.disabled = true;
  }

  /** Reusable across readings; hide and disable immediately to absorb double taps. */
  onRestart(callback: () => void): void {
    this.restartButton.addEventListener("click", () => {
      if (this.restartButton.disabled || !this.endCard.classList.contains("visible")) return;
      this.restartButton.disabled = true;
      this.endCard.inert = true;
      this.endCard.classList.remove("visible");
      this.captionGeneration++;
      this.hideCaption();
      this.counting.reset();
      this.narrator?.cancel();
      callback();
    });
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
    this.presentCaption(text, seconds);
    if (this.counting.hasCounted) {
      // Progress remains visible without interrupting the numbers. The final
      // dialogue follows the last number and participates in the usual gate.
      if (this.counting.isComplete) this.narrator?.enqueue(text, speaker);
    } else {
      this.narrator?.speak(text, speaker);
    }
  }

  /** Idle help may speak after counting starts, once all number audio is quiet. */
  showTapHint(text: string, speaker: StoryVoice = "narrator"): () => void {
    this.presentCaption(text, 0);
    const generation = this.captionGeneration;
    const stopSpeaking = this.narrator?.speak(text, speaker);
    return () => {
      stopSpeaking?.();
      if (generation === this.captionGeneration) this.hideCaption();
    };
  }

  private presentCaption(text: string, seconds: number): void {
    this.captionGeneration++;
    this.caption.textContent = text;
    this.caption.classList.add("visible");
    this.captionTimer = seconds > 0 ? seconds : 0;
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
    this.endCard.inert = false;
    this.restartButton.disabled = false;
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
