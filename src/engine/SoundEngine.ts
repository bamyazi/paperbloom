/**
 * SoundEngine
 * -----------
 * All game sound, synthesised live with the Web Audio API — no audio files.
 * Provides soft "paper" pops as pieces unfold, a rising chime each time
 * something is coloured, a little success sparkle, a page-turn whoosh, and a
 * gentle looping music-box ambience. Every voice is wrapped in a warm plate
 * reverb and gently stereo-spread so the little paper world feels roomy rather
 * than dry. Must be unlocked from a user gesture via `resume()` (the start
 * button).
 */
export class SoundEngine {
  private readonly ctx: AudioContext | null;
  private readonly master: GainNode | null = null;
  private readonly musicGain: GainNode | null = null;
  private readonly reverbSend: GainNode | null = null;
  private noiseBuffer: AudioBuffer | null = null;

  private enabled = true;
  private lastPop = 0;
  private ambientTimer = 0;

  constructor() {
    const Ctor =
      (window.AudioContext as typeof AudioContext | undefined) ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) {
      this.ctx = null;
      return;
    }
    this.ctx = new Ctor();

    // Master bus: a gentle high-shelf roll-off keeps synth voices soft and
    // "papery" rather than harsh, then a limiter guards against stacking peaks.
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.85;
    const softener = this.ctx.createBiquadFilter();
    softener.type = "highshelf";
    softener.frequency.value = 3200;
    softener.gain.value = -6;
    const limiter = this.ctx.createDynamicsCompressor();
    limiter.threshold.value = -10;
    limiter.knee.value = 24;
    limiter.ratio.value = 4;
    limiter.attack.value = 0.004;
    limiter.release.value = 0.25;
    this.master.connect(softener);
    softener.connect(limiter);
    limiter.connect(this.ctx.destination);

    // Warm plate reverb shared by every voice, for a sense of gentle space.
    const reverb = this.ctx.createConvolver();
    reverb.buffer = this.buildImpulse(2.6, 2.4);
    const reverbReturn = this.ctx.createGain();
    reverbReturn.gain.value = 0.9;
    this.reverbSend = this.ctx.createGain();
    this.reverbSend.gain.value = 1;
    this.reverbSend.connect(reverb);
    reverb.connect(reverbReturn);
    reverbReturn.connect(this.master);

    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.0;
    this.musicGain.connect(this.master);

    const frames = Math.floor(this.ctx.sampleRate * 1);
    this.noiseBuffer = this.ctx.createBuffer(1, frames, this.ctx.sampleRate);
    const data = this.noiseBuffer.getChannelData(0);
    for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
  }

  /** Synthesise a stereo decaying-noise impulse response for the reverb. */
  private buildImpulse(seconds: number, decay: number): AudioBuffer {
    const ctx = this.ctx!;
    const rate = ctx.sampleRate;
    const length = Math.max(1, Math.floor(seconds * rate));
    const impulse = ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = impulse.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        const t = i / length;
        // Short fade-in then a smooth exponential tail.
        const env = Math.min(1, t * 40) * Math.pow(1 - t, decay);
        data[i] = (Math.random() * 2 - 1) * env;
      }
    }
    return impulse;
  }

  /** Unlock audio and start ambience (call from a user gesture). */
  resume(): void {
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") void this.ctx.resume();
    if (this.musicGain) {
      this.musicGain.gain.setTargetAtTime(0.12, this.ctx.currentTime, 2);
    }
    this.scheduleAmbient();
  }

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (this.master && this.ctx) {
      this.master.gain.setTargetAtTime(enabled ? 0.85 : 0, this.ctx.currentTime, 0.1);
    }
  }

  private tone(
    freq: number,
    duration: number,
    options: {
      type?: OscillatorType;
      gain?: number;
      attack?: number;
      delay?: number;
      target?: AudioNode;
      /** Stereo position, -1 (left) … 1 (right). */
      pan?: number;
      /** Fraction of the voice sent to the reverb (0–1). */
      reverb?: number;
      /** Slight upward pitch glide in cents for a music-box "bloom". */
      glide?: number;
    } = {}
  ): void {
    if (!this.ctx || !this.master) return;
    const { type = "sine", gain = 0.2, attack = 0.005, delay = 0, pan = 0, reverb = 0.35, glide = 0 } =
      options;
    const target = options.target ?? this.master;
    const t = this.ctx.currentTime + delay;
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();
    const panner = this.ctx.createStereoPanner();
    panner.pan.value = Math.max(-1, Math.min(1, pan));
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    if (glide) {
      osc.frequency.exponentialRampToValueAtTime(freq * Math.pow(2, glide / 1200), t + attack + 0.04);
    }
    env.gain.setValueAtTime(0.0001, t);
    env.gain.linearRampToValueAtTime(gain, t + attack);
    env.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(env);
    env.connect(panner);
    panner.connect(target);
    if (this.reverbSend && reverb > 0) {
      const send = this.ctx.createGain();
      send.gain.value = reverb;
      panner.connect(send);
      send.connect(this.reverbSend);
    }
    osc.start(t);
    osc.stop(t + duration + 0.05);
  }

  private noise(
    duration: number,
    options: {
      gain?: number;
      type?: BiquadFilterType;
      from?: number;
      to?: number;
      pan?: number;
      reverb?: number;
    } = {}
  ): void {
    if (!this.ctx || !this.master || !this.noiseBuffer) return;
    const { gain = 0.15, type = "bandpass", from = 1200, to = from, pan = 0, reverb = 0.25 } = options;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.setValueAtTime(from, t);
    filter.frequency.exponentialRampToValueAtTime(Math.max(60, to), t + duration);
    filter.Q.value = 0.8;
    const env = this.ctx.createGain();
    env.gain.setValueAtTime(gain, t);
    env.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    const panner = this.ctx.createStereoPanner();
    panner.pan.value = Math.max(-1, Math.min(1, pan));
    src.connect(filter);
    filter.connect(env);
    env.connect(panner);
    panner.connect(this.master);
    if (this.reverbSend && reverb > 0) {
      const send = this.ctx.createGain();
      send.gain.value = reverb;
      panner.connect(send);
      send.connect(this.reverbSend);
    }
    src.start(t);
    src.stop(t + duration + 0.02);
  }

  /** A satisfying paper "pop" as a pop-up unfolds (throttled + pitch-varied). */
  pop(): void {
    if (!this.ctx || !this.master || !this.enabled) return;
    const now = this.ctx.currentTime;
    if (now - this.lastPop < 0.03) return;
    this.lastPop = now;
    const pan = (Math.random() - 0.5) * 1.2;
    const panner = this.ctx.createStereoPanner();
    panner.pan.value = Math.max(-1, Math.min(1, pan));
    // A gentle low-pass keeps the pop warm and rounded rather than clicky.
    const soften = this.ctx.createBiquadFilter();
    soften.type = "lowpass";
    soften.frequency.value = 1400;
    soften.Q.value = 0.4;
    soften.connect(panner);
    panner.connect(this.master);
    if (this.reverbSend) {
      const send = this.ctx.createGain();
      send.gain.value = 0.22;
      panner.connect(send);
      send.connect(this.reverbSend);
    }

    // Warm body: a soft sine "pud" with a quick downward pitch drop.
    const osc = this.ctx.createOscillator();
    const env = this.ctx.createGain();
    osc.type = "sine";
    const f0 = 420 + Math.random() * 160;
    osc.frequency.setValueAtTime(f0, now);
    osc.frequency.exponentialRampToValueAtTime(150, now + 0.08);
    env.gain.setValueAtTime(0.0001, now);
    env.gain.linearRampToValueAtTime(0.42, now + 0.008);
    env.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);
    osc.connect(env);
    env.connect(soften);
    osc.start(now);
    osc.stop(now + 0.22);

    // A soft low thump for body.
    const thump = this.ctx.createOscillator();
    const thumpEnv = this.ctx.createGain();
    thump.type = "sine";
    thump.frequency.setValueAtTime(150, now);
    thump.frequency.exponentialRampToValueAtTime(80, now + 0.1);
    thumpEnv.gain.setValueAtTime(0.0001, now);
    thumpEnv.gain.linearRampToValueAtTime(0.22, now + 0.008);
    thumpEnv.gain.exponentialRampToValueAtTime(0.0001, now + 0.15);
    thump.connect(thumpEnv);
    thumpEnv.connect(soften);
    thump.start(now);
    thump.stop(now + 0.18);

    // A whisper of low-passed noise for the "paper" texture — soft, not clicky.
    if (this.noiseBuffer) {
      const src = this.ctx.createBufferSource();
      src.buffer = this.noiseBuffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.value = 900;
      const nEnv = this.ctx.createGain();
      nEnv.gain.setValueAtTime(0.12, now);
      nEnv.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      src.connect(filter);
      filter.connect(nEnv);
      nEnv.connect(soften);
      src.start(now);
      src.stop(now + 0.09);
    }
  }

  /** A bright chime that rises with each successive colour. */
  chime(index = 0): void {
    const scale = [523.25, 587.33, 659.25, 783.99, 880.0, 987.77, 1046.5];
    const f = scale[Math.min(index, scale.length - 1)];
    const pan = (Math.random() - 0.5) * 0.6;
    // Fundamental plus a soft octave and a shimmering fifth, panned together.
    this.tone(f, 0.9, { type: "sine", gain: 0.22, attack: 0.004, pan, reverb: 0.6, glide: 12 });
    this.tone(f * 2, 0.5, { type: "sine", gain: 0.06, attack: 0.004, pan, reverb: 0.6 });
    this.tone(f * 3, 0.35, { type: "sine", gain: 0.025, attack: 0.004, pan, reverb: 0.6 });
    this.tone(f * 1.5, 0.6, { type: "triangle", gain: 0.04, attack: 0.006, pan, reverb: 0.6 });
  }

  /** A little ascending sparkle when a puzzle is solved. */
  success(): void {
    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5];
    notes.forEach((f, i) => {
      // Each note drifts a touch further right, like a rising glissando.
      const pan = -0.4 + (i / (notes.length - 1)) * 0.8;
      this.tone(f, 0.9, { type: "sine", gain: 0.18, attack: 0.004, delay: i * 0.11, pan, reverb: 0.7 });
      this.tone(f * 2, 0.55, { type: "sine", gain: 0.04, attack: 0.004, delay: i * 0.11, pan, reverb: 0.7 });
    });
    // A soft bell bloom crowning the phrase.
    this.tone(1046.5, 1.6, { type: "sine", gain: 0.05, attack: 0.02, delay: 0.55, reverb: 0.85, glide: 6 });
  }

  /** A soft page-turn whoosh for scene transitions. */
  whoosh(): void {
    // Two panned sweeps in opposite directions read as paper sliding past.
    this.noise(0.55, { gain: 0.14, type: "lowpass", from: 2200, to: 320, pan: -0.6, reverb: 0.4 });
    this.noise(0.5, { gain: 0.08, type: "lowpass", from: 1800, to: 260, pan: 0.6, reverb: 0.4 });
  }

  /**
   * A big, slow paper "sweep" for the page-turn transition: filtered noise that
   * rushes past and pans across the stereo field like a page swinging over,
   * with a soft low "fwoomp" of air underneath. Two sweeps cover the flip in
   * and the flip away.
   */
  pageTurn(): void {
    this.sweep(0, 1);
    // A softer trailing sweep as the page flips away to reveal the new scene.
    this.sweep(1.15, 0.6);
  }

  private sweep(delay: number, level: number): void {
    if (!this.ctx || !this.master || !this.noiseBuffer) return;
    const now = this.ctx.currentTime + delay;
    const dur = 1.1;

    // Paper rustle: noise through a band-pass that opens then closes, panning
    // across to follow the page.
    const src = this.ctx.createBufferSource();
    src.buffer = this.noiseBuffer;
    src.loop = true;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.Q.value = 0.6;
    filter.frequency.setValueAtTime(500, now);
    filter.frequency.exponentialRampToValueAtTime(2600, now + dur * 0.45);
    filter.frequency.exponentialRampToValueAtTime(300, now + dur);
    const env = this.ctx.createGain();
    env.gain.setValueAtTime(0.0001, now);
    env.gain.linearRampToValueAtTime(0.2 * level, now + 0.18);
    env.gain.setValueAtTime(0.2 * level, now + dur * 0.6);
    env.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    const panner = this.ctx.createStereoPanner();
    panner.pan.setValueAtTime(-0.85, now);
    panner.pan.linearRampToValueAtTime(0.85, now + dur);
    src.connect(filter);
    filter.connect(env);
    env.connect(panner);
    panner.connect(this.master);
    if (this.reverbSend) {
      const send = this.ctx.createGain();
      send.gain.value = 0.5;
      panner.connect(send);
      send.connect(this.reverbSend);
    }
    src.start(now);
    src.stop(now + dur + 0.05);

    // A soft low body of moving air.
    const osc = this.ctx.createOscillator();
    const oscEnv = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(120, now);
    osc.frequency.exponentialRampToValueAtTime(60, now + dur);
    oscEnv.gain.setValueAtTime(0.0001, now);
    oscEnv.gain.linearRampToValueAtTime(0.14 * level, now + 0.25);
    oscEnv.gain.exponentialRampToValueAtTime(0.0001, now + dur);
    osc.connect(oscEnv);
    oscEnv.connect(this.master);
    osc.start(now);
    osc.stop(now + dur + 0.05);
  }

  /** Sparse pentatonic music-box notes through the quiet music bus. */
  private scheduleAmbient(): void {
    if (!this.ctx || !this.musicGain) return;
    const music = this.musicGain;
    window.clearTimeout(this.ambientTimer);
    const scale = [523.25, 587.33, 659.25, 783.99, 880.0];
    const step = (): void => {
      if (this.ctx && this.enabled) {
        const f = scale[Math.floor(Math.random() * scale.length)] * (Math.random() < 0.3 ? 0.5 : 1);
        const pan = (Math.random() - 0.5) * 1.2;
        this.tone(f, 1.8, { type: "sine", gain: 0.5, attack: 0.02, target: music, pan, reverb: 0.8 });
        // Occasionally add a soft harmony a third above for a music-box feel.
        if (Math.random() < 0.35) {
          this.tone(f * 1.25, 1.6, {
            type: "sine",
            gain: 0.22,
            attack: 0.03,
            delay: 0.08,
            target: music,
            pan,
            reverb: 0.8
          });
        }
      }
      this.ambientTimer = window.setTimeout(step, 1400 + Math.random() * 1600);
    };
    this.ambientTimer = window.setTimeout(step, 800);
  }
}
