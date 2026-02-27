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
curl -fsSL https://github.com/wayang-ai/wayang-platform/releases/download/gollek-v<version>/install.sh | bash
```

### Homebrew

Use the generated release formula (`gollek.rb`) in your tap:

```bash
brew tap <org>/<tap>
brew install gollek
```

### Chocolatey

Use the generated release package template (`gollek-chocolatey-template.zip`) and publish it, then:

```powershell
choco install gollek
```

### Windows native executable

```powershell
Invoke-WebRequest -Uri "https://github.com/wayang-ai/wayang-platform/releases/download/gollek-v<version>/gollek-windows-x64.exe" -OutFile "gollek.exe"
.\gollek.exe --version
```

### Windows JVM fallback (Java 21+)

Download and extract `gollek-jvm.zip`, then:

```powershell
.\bin\gollek.bat --version
```

---

## Runtime Directories

Gollek and Wayang service defaults are:

- Primary: `~/.wayang/gollek/*`
- Legacy compatibility: `~/.gollek/*`

If needed, set `GOLLEK_HOME` to force legacy layout, otherwise prefer `~/.wayang/gollek`.

---

## Verify Install

```bash
gollek --version
gollek --help
```

---

[Back to Getting Started](/docs/) &nbsp; [Code Examples](/docs/examples)
