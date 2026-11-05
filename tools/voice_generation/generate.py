"""Generate the game's static WAVs from its exported lines and an isolated Kokoro install."""
import argparse
from hashlib import sha256
import json
from pathlib import Path
import tempfile
from time import perf_counter
import numpy as np
import onnxruntime as ort
import soundfile as sf
from kokoro_onnx import Kokoro

REPOSITORY = Path(__file__).resolve().parents[2]
CAST = json.loads(Path(__file__).with_name("cast.json").read_text(encoding="utf-8"))


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def render_line(model, entry, output):
    speaker = entry["speaker"]
    text = entry["text"].strip()
    profile = CAST[speaker]
    key = f"{speaker}\n{text}"
    asset_id = entry.get("id") or f"{speaker}-{sha256(key.encode()).hexdigest()[:16]}"
    if not asset_id or any(char not in "abcdefghijklmnopqrstuvwxyz0123456789-_" for char in asset_id):
        raise ValueError(f"Invalid audio asset id: {asset_id}")
    language = "en-gb" if profile["voice"].startswith("b") else "en-us"
    audio, rate = model.create(text, voice=profile["voice"], speed=profile["speed"], lang=language)
    if not len(audio) or not np.isfinite(audio).all():
        raise RuntimeError(f"Invalid audio for {asset_id}")
    peak = float(np.max(np.abs(audio)))
    rms = float(np.sqrt(np.mean(audio.astype(np.float64) ** 2)))
    # Bring quiet voices closer together while leaving headroom and dynamics.
    gain = min(1.8, 0.085 / max(rms, 1e-6), 0.92 / max(peak, 1e-6))
    target = output / f"{asset_id}.wav"
    sf.write(target, audio * gain, rate, subtype="PCM_16")
    return key, {
        "id": asset_id, "speaker": speaker, "text": text, **profile,
        "language": language, "file": target.name,
        "seconds": round(len(audio) / rate, 3), "sample_rate": rate,
        "gain": round(gain, 5), "sha256": sha256(target.read_bytes()).hexdigest(),
    }


def reusable_record(entry, previous, output):
    key = f"{entry['speaker']}\n{entry['text'].strip()}"
    record = previous.get(key)
    if not record or any(record.get(field) != value for field, value in CAST[entry["speaker"]].items()):
        return None
    if entry.get("id") and record["id"] != entry["id"]:
        return None
    target = output / record["file"]
    if not target.exists() or sha256(target.read_bytes()).hexdigest() != record["sha256"]:
        return None
    return key, record


def generate(workspace, manifest, output):
    entries = json.loads(manifest.read_text(encoding="utf-8-sig"))
    if not isinstance(entries, list):
        raise ValueError("The exported manifest must be a list of {speaker, text, id?}.")
    scratch = workspace / "runtime" / "tmp"
    scratch.mkdir(parents=True, exist_ok=True)
    tempfile.tempdir = str(scratch)
    output.mkdir(parents=True, exist_ok=True)
    history = output / "generation.json"
    previous = {
        f"{record['speaker']}\n{record['text']}": record
        for record in json.loads(history.read_text(encoding="utf-8"))
    } if history.exists() else {}
    ort.set_default_logger_severity(3)
    model = Kokoro(str(workspace / "models" / "kokoro-v1.0.fp16.onnx"), str(workspace / "models" / "voices-v1.0.bin"))
    clips = {}
    records = []
    for index, entry in enumerate(entries):
        before = perf_counter()
        reused = reusable_record(entry, previous, output)
        key, record = reused or render_line(model, entry, output)
        if key in clips:
            raise ValueError(f"Duplicate narration key: {key}")
        clips[key] = f"audio/narration/{record['file']}"
        records.append(record)
        write_json(output / "generation.json", records)
        status = "reused" if reused else f"generated in {perf_counter() - before:.2f}s"
        print(f"{index + 1}/{len(entries)} {record['file']}: {record['seconds']}s, {status}", flush=True)
    write_json(output / "manifest.json", clips)
    target = REPOSITORY / "src" / "game" / "audio" / "narrationClips.ts"
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(
        'import type { NarrationClipMap } from "../../engine/narration/RecordedNarration.ts";\n\n'
        '/** Generated from the current story text by tools/voice_generation/generate.py. */\n'
        'export const NARRATION_CLIPS: NarrationClipMap = '
        + json.dumps(clips, ensure_ascii=False, indent=2) + ';\n', encoding="utf-8"
    )
    print(f"Generated {len(clips)} recordings and both asset catalogues.", flush=True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--workspace", type=Path, required=True)
    parser.add_argument("--manifest", type=Path, default=REPOSITORY / ".artifacts" / "narration-lines.json")
    parser.add_argument("--output", type=Path, default=REPOSITORY / "public" / "audio" / "narration")
    arguments = parser.parse_args()
    generate(arguments.workspace.resolve(), arguments.manifest.resolve(), arguments.output.resolve())
