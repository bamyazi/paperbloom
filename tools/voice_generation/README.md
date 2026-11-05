# Recorded story voices

The game plays static WAV files. The speech model and Python environment are
authoring tools and are never downloaded by players.

Use an isolated Python 3.12 environment with `requirements.txt`, plus the official
`kokoro-v1.0.fp16.onnx` and `voices-v1.0.bin` files in `<workspace>/models/`.
The release is [kokoro-onnx model-files-v1.1](https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.1).
Keep that workspace outside the repository; the original local generation used
`C:\_development\teardown\.artifacts\paperbloom-voices`.

1. Export the current story text with
   `node tools/export-narration.mjs .artifacts/narration-lines.json`.
2. Run the environment's Python:

   ```powershell
   python tools/voice_generation/generate.py --workspace C:\path\to\voice-workspace
   ```

3. Listen locally before deploying. The generator writes WAVs, `manifest.json`
   and `generation.json` in `public/audio/narration/`, and updates
   `src/game/audio/narrationClips.ts`.
4. Run `node tools/voice_generation/verify.mjs`. It exports the current story and
   explicit counting words, then checks exact catalogue coverage, WAV format,
   non-silent unclipped samples, durations and SHA-256 digests. No transcript
   list is duplicated in the verifier.

Change casting and speaking speed in `cast.json`. British voices use British
phonemization; American voices use American phonemization. The spoken spelling
of Mabli is preserved: the local phonemizer produces MAB-lee without an override.
Each output records its exact text, voice, speed, duration and SHA-256 digest.
Unchanged lines with matching hashes are reused when the script runs again.

Kokoro's model weights are Apache-2.0; the `kokoro-onnx` runtime is MIT. The
generated asset folder contains source links, casting and the upstream notices.
