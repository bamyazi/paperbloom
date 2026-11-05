/** Finish at the authored end state even if a browser cancels an animation. */
export async function animatePaper(
  element: HTMLElement,
  frames: Keyframe[],
  duration: number,
  delay = 0
): Promise<void> {
  const end = frames[frames.length - 1];
  let animation: Animation | null = null;
  let timeout: ReturnType<typeof setTimeout> | undefined;
  try {
    if (typeof element.animate === "function") {
      animation = element.animate(frames, {
        duration,
        delay,
        easing: "cubic-bezier(0.36, 0.02, 0.24, 1)",
        fill: "both"
      });
      await Promise.race([
        animation.finished.catch(() => {}),
        new Promise<void>((resolve) => { timeout = setTimeout(resolve, duration + delay + 250); })
      ]);
    }
  } catch {
    // An unsupported/interrupted compositor effect falls back to its end state.
  } finally {
    if (timeout !== undefined) clearTimeout(timeout);
    for (const [property, value] of Object.entries(end)) {
      if (property !== "offset" && property !== "easing" && property !== "composite") {
        Reflect.set(element.style, property, value);
      }
    }
    animation?.cancel();
  }
}
