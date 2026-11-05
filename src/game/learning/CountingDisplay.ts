/** Presents a puzzle's successful taps; speech and lesson progress live elsewhere. */
export class CountingDisplay {
  private readonly element: HTMLDivElement;
  private readonly numeral: HTMLSpanElement;
  private readonly pips: HTMLDivElement;
  private readonly announcement: HTMLSpanElement;
  private count = 0;
  private total = 0;
  private pulse = false;
  private disposed = false;

  constructor(parent: HTMLElement = document.getElementById("ui") ?? document.body) {
    this.element = document.createElement("div");
    this.element.className = "counting-display";
    this.element.setAttribute("role", "status");
    this.element.setAttribute("aria-live", "polite");
    this.element.setAttribute("aria-atomic", "true");
    this.element.hidden = true;

    this.numeral = document.createElement("span");
    this.numeral.className = "counting-display__number";
    this.numeral.setAttribute("aria-hidden", "true");
    this.pips = document.createElement("div");
    this.pips.className = "counting-display__pips";
    this.pips.setAttribute("aria-hidden", "true");
    this.announcement = document.createElement("span");
    this.announcement.className = "counting-display__announcement";

    this.element.append(this.numeral, this.pips, this.announcement);
    parent.appendChild(this.element);
  }

  /** Show one successful count; duplicate updates neither pulse nor announce twice. */
  show(count: number, total: number): void {
    if (this.disposed) return;
    if (!Number.isFinite(count) || !Number.isFinite(total) || count < 1 || total < 1) {
      this.reset();
      return;
    }
    const nextTotal = Math.floor(total);
    const nextCount = Math.min(Math.floor(count), nextTotal);
    if (nextCount === this.count && nextTotal === this.total) return;
    if (nextTotal !== this.total) this.buildPips(nextTotal);
    this.count = nextCount;
    this.total = nextTotal;
    this.numeral.textContent = String(nextCount);
    this.announcement.textContent = `${nextCount} of ${nextTotal} counted.`;
    for (const [index, pip] of Array.from(this.pips.children).entries()) {
      pip.classList.toggle("is-counted", index < nextCount);
    }
    // Alternating animation names restarts a small pulse without forcing layout.
    this.pulse = !this.pulse;
    this.element.dataset.pulse = this.pulse ? "odd" : "even";
    this.element.hidden = false;
  }

  /** Begin each new puzzle with an empty, hidden display. */
  reset(): void {
    if (this.disposed) return;
    this.count = 0;
    this.total = 0;
    this.element.hidden = true;
    this.numeral.textContent = "";
    this.announcement.textContent = "";
    this.pips.replaceChildren();
  }

  dispose(): void {
    if (this.disposed) return;
    this.reset();
    this.element.remove();
    this.disposed = true;
  }

  private buildPips(total: number): void {
    const pips: HTMLSpanElement[] = [];
    for (let index = 0; index < total; index++) {
      const pip = document.createElement("span");
      pip.className = "counting-display__pip";
      pips.push(pip);
    }
    this.pips.replaceChildren(...pips);
  }
}
