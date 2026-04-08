---
layout: default
title: Gollek CLI Reference
---

# Gollek CLI Reference

Quick reference for the core CLI commands.

---

## Chat with Models

Start an interactive chat session with any supported model.

```bash
gollek chat --model google/gemma-4-E2B-it --gguf
```

### GGUF Conversion Options

Force GGUF format with custom quantization:

```bash
# Default Q4_K_M quantization
gollek chat --model ~/models/my-model --gguf

# Custom quantization
gollek chat --model ~/models/my-model --gguf --quant Q8_0
```

### Chat Options

| Flag | Description | Default |
|------|-------------|---------|
| `-m, --model` | Model ID or path | - |
| `-p, --provider` | Provider ID (gguf, openai, gemini, etc.) | Auto |
| `--gguf` | Force GGUF format (converts if necessary) | false |
| `--quant` | Quantization type for GGUF conversion | Q4_K_M |
| `--temperature` | Sampling temperature | 0.2 |
| `--max-tokens` | Max tokens to generate | 256 |
| `--top-p` | Top-p sampling | 0.95 |
| `--top-k` | Top-k sampling | 40 |
| `--stream` | Stream response token by token | true |
| `--session` | Enable persistent session (KV cache reuse) | true |
| `--concise` | Use concise system prompt | false |
| `-v, --verbose` | Show detailed internal logs | false |
| `-q, --quiet` | Quiet mode: only output messages | false |
| `--no-color` | Disable ANSI color output | false |
| `--json` | Enable JSON output mode | false |
| `--sse` | Output as OpenAI-compatible SSE JSON | false |
| `-o, --output` | Save conversation to file | - |

### Quantization Types

| Type | Quality | Size | Speed | Use Case |
|------|---------|------|-------|----------|
| `Q4_0` | Good | Smallest | Fastest | Edge devices, limited memory |
| `Q4_K_M` | Better | Small | Fast | **Default** - Balanced |
| `Q5_0` | High | Medium | Moderate | Better quality |
| `Q5_K_M` | High | Medium | Moderate | Good balance |
| `Q6_K` | Very High | Large | Slower | High quality needs |
| `Q8_0` | Best | Largest | Slowest | Maximum quality |
| `F16` | Original | 2x | Fast | No quantization |
| `F32` | Original | 4x | Slowest | Full precision |

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
