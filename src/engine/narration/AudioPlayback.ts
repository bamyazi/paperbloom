interface PlaybackRequest {
  generation: number;
  startedAt: number;
  pending: boolean;
  onUnavailable: () => void;
}

type AudioFactory = () => HTMLAudioElement | null;
const PLAY_START_TIMEOUT_MS = 8000;
const MAX_CLIP_WAIT_MS = 90_000;

/** Owns one reusable audio element and only the current clip's callbacks. */
export class AudioPlayback {
  private audio: HTMLAudioElement | null = null;
  private request: PlaybackRequest | null = null;
  private generation = 0;

  constructor(
    private readonly createAudio: AudioFactory = () => typeof Audio === "undefined" ? null : new Audio(),
    private readonly now: () => number = () => performance.now()
  ) {}

  get isPlaying(): boolean {
    const request = this.request;
    if (!request) return false;
    if (this.audio?.ended && !request.pending) {
      this.finish(request);
      return false;
    }
    const elapsed = this.now() - request.startedAt;
    if ((request.pending && elapsed > PLAY_START_TIMEOUT_MS) || elapsed > MAX_CLIP_WAIT_MS) {
      this.fail(request);
    }
    return this.request !== null;
  }

  play(url: string, onUnavailable: () => void): boolean {
    this.cancel();
    try {
      this.audio ??= this.createAudio();
    } catch {
      return false;
    }
    const audio = this.audio;
    if (!audio) return false;
    const request: PlaybackRequest = {
      generation: this.generation,
      startedAt: this.now(),
      pending: true,
      onUnavailable
    };
    this.request = request;
    audio.preload = "auto";
    audio.onended = () => this.finish(request);
    audio.onerror = () => this.fail(request);
    audio.onplaying = () => {
      if (this.isCurrent(request)) request.pending = false;
    };
    audio.src = url;
    try {
      const started = audio.play();
      started?.then(() => {
        if (this.isCurrent(request)) request.pending = false;
      }).catch(() => this.fail(request));
    } catch {
      this.fail(request);
    }
    return true;
  }

  cancel(): void {
    this.generation++;
    this.request = null;
    if (!this.audio) return;
    this.audio.onended = null;
    this.audio.onerror = null;
    this.audio.onplaying = null;
    this.audio.pause();
    this.audio.removeAttribute("src");
    this.audio.load();
  }

  private isCurrent(request: PlaybackRequest): boolean {
    return this.request === request && request.generation === this.generation;
  }

  private finish(request: PlaybackRequest): void {
    if (this.isCurrent(request)) this.request = null;
  }

  private fail(request: PlaybackRequest): void {
    if (!this.isCurrent(request)) return;
    this.cancel();
    request.onUnavailable();
  }
}
