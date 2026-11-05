import { PageTurnView } from "./transition/PageTurnView.ts";

interface PageTurnRequest {
  onCovered: () => void;
  duration: number;
}

/** Serialises page turns and swaps chapters only under an opaque paper sheet. */
export class Transition {
  private readonly view: PageTurnView;
  private readonly requests: PageTurnRequest[] = [];
  private busy = false;

  constructor(color = "#f5eddb") {
    this.view = new PageTurnView(color);
  }

  /** Each half takes `duration` milliseconds; overlapping requests wait their turn. */
  wipe(onCovered: () => void, duration = 850): void {
    this.requests.push({ onCovered, duration: Number.isFinite(duration) ? Math.max(0, duration) : 850 });
    if (!this.busy) void this.playRequests();
  }

  private async playRequests(): Promise<void> {
    this.busy = true;
    while (this.requests.length > 0) {
      const request = this.requests.shift()!;
      try {
        this.view.show();
        await this.view.cover(request.duration);
        request.onCovered();
        await this.view.reveal(request.duration);
      } catch (error) {
        // A failing chapter must not leave an invisible input-blocking sheet.
        console.error("Paper Bloom could not finish a page turn.", error);
      } finally {
        this.view.hide();
      }
    }
    this.busy = false;
  }
}
