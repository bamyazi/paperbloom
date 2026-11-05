export type StoryVoice =
  | "narrator" | "mabli" | "frog" | "fox" | "bird" | "rabbit"
  | "butterfly" | "bee" | "duckling" | "snail" | "firefly";

interface VoiceProfile {
  rate: number;
  pitch: number;
  preferredNames: readonly string[];
}

const WARM_VOICES = ["Sonia", "Serena", "Google UK English Female", "Samantha", "Karen"];
const BRIGHT_VOICES = ["Aria", "Jenny", "Google US English", "Samantha", "Google UK English Female"];
const LOW_VOICES = ["Ryan", "Guy", "Google UK English Male", "Daniel", "David"];

/** Recorded character voices take priority; these are gentle browser fallbacks. */
export const STORY_VOICES: Readonly<Record<StoryVoice, VoiceProfile>> = {
  narrator: { rate: 0.9, pitch: 1, preferredNames: WARM_VOICES },
  mabli: { rate: 0.94, pitch: 1.15, preferredNames: BRIGHT_VOICES },
  frog: { rate: 0.86, pitch: 0.8, preferredNames: LOW_VOICES },
  fox: { rate: 0.91, pitch: 0.96, preferredNames: LOW_VOICES },
  bird: { rate: 0.98, pitch: 1.23, preferredNames: BRIGHT_VOICES },
  rabbit: { rate: 0.91, pitch: 1.12, preferredNames: WARM_VOICES },
  butterfly: { rate: 0.94, pitch: 1.2, preferredNames: BRIGHT_VOICES },
  bee: { rate: 0.97, pitch: 1.12, preferredNames: BRIGHT_VOICES },
  duckling: { rate: 0.92, pitch: 1.18, preferredNames: BRIGHT_VOICES },
  snail: { rate: 0.83, pitch: 0.96, preferredNames: WARM_VOICES },
  firefly: { rate: 0.88, pitch: 1.1, preferredNames: WARM_VOICES }
};

export function selectStoryVoice(voices: readonly SpeechSynthesisVoice[], speaker: StoryVoice): SpeechSynthesisVoice | null {
  const english = voices.filter((voice) => /^en(-|_|$)/i.test(voice.lang));
  for (const preferred of STORY_VOICES[speaker].preferredNames) {
    const match = english.find((voice) => voice.name.toLowerCase().includes(preferred.toLowerCase()));
    if (match) return match;
  }
  return english.find((voice) => /natural|premium|enhanced|google/i.test(voice.name)) ?? english[0] ?? voices[0] ?? null;
}
