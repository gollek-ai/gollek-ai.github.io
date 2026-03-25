---
layout: default
title: Gollek CLI Reference
---

# Gollek CLI Reference

Quick reference for the core CLI commands.

---

## Convert to GGUF

Convert a local model (directory or file) into GGUF.

```bash
gollek convert --input ~/models/llama-2-7b --output ~/conversions --quant q4_k_m
```

Dry‑run (resolve paths only):

```bash
gollek convert --input ~/models/llama-2-7b --output ~/conversions --dry-run
```

Options:
- `--input`: Input model path (file or directory)
- `--output`: Output GGUF file or directory
- `--quant`: Quantization type (`q4_k_m`, `q8_0`, `f16`, ...)
- `--overwrite`: Overwrite output if it exists
- `--dry-run`: Resolve paths without converting
- `--json`: Print JSON output for scripting
- `--json-pretty`: Pretty-print JSON output
- `--model-base`: Base path for relative input paths
- `--output-base`: Base path for relative output paths

---

## Run Inference

```bash
gollek run --model Qwen/Qwen2.5-0.5B-Instruct --prompt "Hi"
```

---

## Pull a Model

```bash
gollek pull hf:Qwen/Qwen2.5-0.5B-Instruct
```

---

[Back to Docs Index](/docs/) &nbsp; [CLI Installation](/docs/cli-installation)
