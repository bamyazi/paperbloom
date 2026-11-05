# Paper Bloom voice assets

These WAVs were generated locally from Paper Bloom's story text with
[Kokoro-82M v1.0](https://huggingface.co/hexgrad/Kokoro-82M) and
[kokoro-onnx 0.6.1](https://github.com/thewh1teagle/kokoro-onnx).
Generation requires no paid service, account or API key. Players download only
the finished audio; the speech model and Python runtime are not shipped.

| Role | Kokoro voice | Speed |
| --- | --- | --- |
| Narrator | `bf_emma` | 0.90 |
| Mabli | `af_heart` | 0.94 |
| Frog | `bm_george` | 0.88 |
| Fox | `bm_fable` | 0.91 |
| Bird | `af_bella` | 0.95 |
| Rabbit | `af_nicole` | 0.93 |
| Butterfly | `bf_isabella` | 0.92 |
| Bee | `am_puck` | 0.96 |
| Duckling | `af_sarah` | 0.94 |
| Snail | `am_michael` | 0.88 |
| Firefly | `af_nova` | 0.93 |

This table is the configured cast; `generation.json` records the profiles actually
used for each line, along with exact text, duration, gain and output SHA-256.
Voices beginning with `b` use British English phonemization; those beginning with
`a` use American English. Mabli's original spelling produces MAB-lee and needs no
spoken-text substitution. No pitch shifting or real-person voice cloning is used.

All files are mono, signed 16-bit PCM WAV at 24 kHz. A bounded gain adjustment
brings quiet voices closer together while preserving headroom. Caption and
recording lookup keys remain the original speaker plus original trimmed text.

## Upstream sources and notices

- Model weights: [hexgrad/Kokoro-82M](https://huggingface.co/hexgrad/Kokoro-82M),
  Apache-2.0. The full license is included in `KOKORO-MODEL-APACHE-2.0.txt`.
- ONNX model and voice export: [model-files-v1.1](https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.1).
  `MODEL_SOURCES.json` records exact download URLs, sizes and SHA-256 digests.
- Offline generation runtime: [thewh1teagle/kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx),
  MIT. Its copyright and license notice is included in `KOKORO-ONNX-MIT.txt`.
- Voice inventory: [official Kokoro voice list](https://huggingface.co/hexgrad/Kokoro-82M/blob/main/VOICES.md).

Regeneration instructions and the editable cast live in `tools/voice_generation/`.
These notices identify the generation tools and their licenses; they do not
relicense Paper Bloom's original story text or other game content.
