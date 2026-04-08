---
layout: default
title: Gollek CLI Installation
---

# Gollek CLI Installation

Install Gollek CLI using release artifacts for macOS, Linux, and Windows.

---

## Install Methods

### curl installer (macOS/Linux)

```bash
curl -fsSL https://github.com/bhangun/gollek/releases/latest/download/install.sh | bash
```

### Homebrew

Use the generated release formula (`gollek.rb`) in your tap:

```bash
brew tap bhangun/gollek
brew install gollek
```

### Chocolatey

Use the generated release package template (`gollek-chocolatey-template.zip`) and publish it, then:

```powershell
choco install gollek
```

### Windows native executable

```powershell
Invoke-WebRequest -Uri "https://github.com/bhangun/gollek/releases/latest/download/gollek-windows-x64.exe" -OutFile "gollek.exe"
.\gollek.exe --version
```

### Windows JVM fallback (Java 21+)

Download and extract `gollek-jvm.zip`, then:

```powershell
.\bin\gollek.bat --version
```

---

## Runtime Directories

Gollek defaults to a single local root:

- Default: `~/.gollek/*`

Set `GOLLEK_HOME` to override the root location if needed.

---

## Verify Install

```bash
gollek --version
gollek --help
```

---

## Quick Commands

```bash
# Run inference
gollek run --model Qwen/Qwen2.5-0.5B-Instruct --prompt "Hi"

# Convert a local model to GGUF
gollek convert --input ~/models/llama-2-7b --output ~/conversions --quant q4_k_m

# Dry-run conversion (path resolution only)
gollek convert --input ~/models/llama-2-7b --output ~/conversions --dry-run

# JSON output for scripting
gollek convert --input ~/models/llama-2-7b --output ~/conversions --json

# Pretty JSON output
gollek convert --input ~/models/llama-2-7b --output ~/conversions --json-pretty
```

---

[Back to Getting Started](/docs/) &nbsp; [Storage Layout](/docs/storage-layout) &nbsp; [Code Examples](/docs/examples)
