/**
 * Transition
 * ----------
 * A book "page turn" between scenes: a paper page swings across in 3D (pivoting
 * on a left-hand spine, with perspective, curl-shading and a soft shadow),
 * hides the scene while a swap callback runs, then keeps flipping to reveal the
 * fresh page. Pure DOM so it sits above the WebGL canvas and the HUD.
 */
export class Transition {
  private readonly container: HTMLDivElement;
  private readonly page: HTMLDivElement;
  private busy = false;

  constructor(color = "#efe9d8") {
    const container = document.createElement("div");
    Object.assign(container.style, {
      position: "fixed",
      inset: "0",
      zIndex: "50",
      perspective: "1500px",
      pointerEvents: "none",
      overflow: "hidden"
    } satisfies Partial<CSSStyleDeclaration>);

    const page = document.createElement("div");
    Object.assign(page.style, {
      position: "absolute",
      inset: "0",
      transformOrigin: "left center",
      transformStyle: "preserve-3d",
      backfaceVisibility: "visible",
      // Solid paper base (so it fully hides the scene) with a curl-shading
      // overlay: a shadow at the spine and a lit free edge.
      backgroundColor: color,
      backgroundImage: `linear-gradient(100deg,
        rgba(60, 50, 36, 0.4) 0%,
        rgba(60, 50, 36, 0) 14%,
        rgba(255, 253, 245, 0) 80%,
        rgba(255, 253, 245, 0.75) 100%)`,
      boxShadow: "-40px 0 90px rgba(35, 29, 20, 0.45)",
      transform: "rotateY(-180deg)",
      willChange: "transform"
    } satisfies Partial<CSSStyleDeclaration>);

    // A bright strip along the free edge — the lifted page catching the light.
    const edge = document.createElement("div");
    Object.assign(edge.style, {
      position: "absolute",
      top: "0",
      right: "0",
      width: "7%",
      height: "100%",
      background:
        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 100%)",
      pointerEvents: "none"
    } satisfies Partial<CSSStyleDeclaration>);
    page.appendChild(edge);

    container.appendChild(page);
    document.body.appendChild(container);
    this.container = container;
    this.page = page;
  }

  /** Turn the page, invoking `onCovered` while the screen is fully hidden. */
  wipe(onCovered: () => void, duration = 1200): void {
    if (this.busy) {
      onCovered();
      return;
    }
    this.busy = true;
    const { page, container } = this;
    const ease = `transform ${duration}ms cubic-bezier(0.45, 0.05, 0.35, 1)`;
    container.style.pointerEvents = "auto";

    const onReveal = (event: TransitionEvent): void => {
      if (event.propertyName !== "transform") return;
      page.removeEventListener("transitionend", onReveal);
      // Park folded away (no transition) ready for the next turn.
      page.style.transition = "none";
      page.style.transform = "rotateY(-180deg)";
      container.style.pointerEvents = "none";
      this.busy = false;
    };

    const onCover = (event: TransitionEvent): void => {
      if (event.propertyName !== "transform") return;
      page.removeEventListener("transitionend", onCover);
      onCovered();
      page.addEventListener("transitionend", onReveal);
      // Reveal: the page keeps flipping the same way and swings off-screen.
      requestAnimationFrame(() => {
        page.style.transition = ease;
        page.style.transform = "rotateY(-540deg)";
      });
    };

    // Cover: the page flips in from the spine (-180°) to lie flat (-360°).
    page.style.transition = "none";
    page.style.transform = "rotateY(-180deg)";
    void page.offsetWidth; // force the reset to apply before animating
    page.addEventListener("transitionend", onCover);
    requestAnimationFrame(() => {
      page.style.transition = ease;
      page.style.transform = "rotateY(-360deg)";
    });
  }
}
