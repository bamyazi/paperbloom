import type { Narrator } from "../Narrator.ts";

export const COUNTING_WORDS = [
  "One.", "Two.", "Three.", "Four.", "Five.",
  "Six.", "Seven.", "Eight.", "Nine.", "Ten."
] as const;

export interface CountingView {
  show(count: number, total: number): void;
  reset(): void;
}

/** Owns one puzzle's counting lesson; the scene owns when it starts and resets. */
export class CountingLesson {
  private count = 0;
  private total = 0;

  constructor(
    private readonly narrator?: Pick<Narrator, "cancel" | "enqueue">,
    private readonly view?: CountingView
  ) {}

  get hasCounted(): boolean {
    return this.total > 1 && this.count > 0;
  }

  get isComplete(): boolean {
    return this.hasCounted && this.count >= this.total;
  }

  start(total: number): void {
    this.count = 0;
    this.total = Math.max(0, Math.floor(total));
    this.view?.reset();
  }

  advance(): void {
    if (this.total <= 1 || this.count >= this.total) return;
    this.count++;
    // The first successful tap can interrupt the instruction. Later numbers
    // must queue so a quick run of taps still says every number in order.
    if (this.count === 1) this.narrator?.cancel();
    this.view?.show(this.count, this.total);
    this.narrator?.enqueue(COUNTING_WORDS[this.count - 1] ?? `${this.count}.`);
  }

  reset(): void {
    this.count = 0;
    this.total = 0;
    this.view?.reset();
  }
}
