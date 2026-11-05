import { animatePaper } from "./animatePaper.ts";

const STRIP_COUNT = 8;
const FLAT_SHEET = "translate3d(0, 0, 0) rotateY(0deg) rotateZ(0deg)";

/** Owns the reusable paper layers; only compositor transforms and opacity move. */
export class PageTurnView {
  private readonly container: HTMLDivElement;
  private readonly sheet: HTMLDivElement;
  private readonly shield: HTMLDivElement;
  private readonly shadow: HTMLDivElement;
  private readonly strips: HTMLDivElement[] = [];
  private reducedMotion = false;

  constructor(color: string) {
    this.container = this.element("page-turn");
    this.container.setAttribute("aria-hidden", "true");
    this.container.style.setProperty("--turn-paper", color);
    this.shadow = this.element("page-turn-shadow");
    this.shield = this.element("page-turn-shield");
    this.sheet = this.element("page-turn-sheet");

    for (let index = 0; index < STRIP_COUNT; index++) {
      const strip = this.element("page-turn-strip");
      strip.style.setProperty("--strip-index", String(index));
      const front = this.element("page-turn-face page-turn-front");
      const back = this.element("page-turn-face page-turn-back");
      if (index === 1 || index === 5) {
        const ornament = this.element("page-turn-ornament");
        ornament.textContent = index === 1 ? "✧" : "✦";
        front.appendChild(ornament);
      }
      strip.append(front, back);
      this.sheet.appendChild(strip);
      this.strips.push(strip);
    }
    this.sheet.appendChild(this.element("page-turn-golden-edge"));
    this.container.append(this.shadow, this.shield, this.sheet);
    // Keep the phone's rotate hint above the turn while covering the game HUD.
    (document.getElementById("app") ?? document.body).appendChild(this.container);
    this.hide();
  }

  show(): void {
    this.reducedMotion = typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches === true;
    this.container.style.visibility = "visible";
    this.container.style.pointerEvents = "auto";
    this.shield.style.opacity = "0";
    this.shadow.style.opacity = "0";
    this.sheet.style.display = this.reducedMotion ? "none" : "grid";
  }

  async cover(duration: number): Promise<void> {
    if (this.reducedMotion) {
      await animatePaper(this.shield, [{ opacity: 0 }, { opacity: 1 }], Math.min(duration, 220));
    } else {
      await Promise.all([
        animatePaper(this.sheet, [
          { transform: "translate3d(108%, 0, 0) rotateY(-18deg) rotateZ(2deg)" },
          { transform: FLAT_SHEET }
        ], duration),
        animatePaper(this.shadow, [{ opacity: 0 }, { opacity: 0.48 }], duration),
        ...this.strips.map((strip, index) => animatePaper(strip, [
          { transform: this.curl(index, -1) },
          { transform: "translateZ(0px) rotateY(0deg)" }
        ], Math.max(0, duration - index * 12), index * 12))
      ]);
    }
    // This solid backstop guarantees that chapter construction is never visible.
    this.shield.style.opacity = "1";
  }

  async reveal(duration: number): Promise<void> {
    if (this.reducedMotion) {
      await animatePaper(this.shield, [{ opacity: 1 }, { opacity: 0 }], Math.min(duration, 220));
      return;
    }
    this.shield.style.opacity = "0";
    await Promise.all([
      animatePaper(this.sheet, [
        { transform: FLAT_SHEET },
        { transform: "translate3d(-108%, 0, 0) rotateY(22deg) rotateZ(-2.5deg)" }
      ], duration),
      animatePaper(this.shadow, [{ opacity: 0.48 }, { opacity: 0 }], duration),
      ...this.strips.map((strip, index) => animatePaper(strip, [
        { transform: "translateZ(0px) rotateY(0deg)" },
        { transform: this.curl(index, 1) }
      ], Math.max(0, duration - index * 10), index * 10))
    ]);
  }

  hide(): void {
    this.container.style.pointerEvents = "none";
    this.container.style.visibility = "hidden";
    this.shield.style.opacity = "0";
  }

  private curl(index: number, direction: number): string {
    const curve = Math.sin((index + 0.5) / STRIP_COUNT * Math.PI);
    return `translateZ(${(curve * 76).toFixed(1)}px) rotateY(${direction * (30 - index * 6)}deg)`;
  }

  private element(className: string): HTMLDivElement {
    const element = document.createElement("div");
    element.className = className;
    return element;
  }
}
