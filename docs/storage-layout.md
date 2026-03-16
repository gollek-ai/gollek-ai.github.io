---
layout: default
title: Storage Layout
---

# Storage Layout

Gollek stores local models, native libraries, and runtime artifacts under a single root.

## Default Root

`~/.gollek/`

Set `GOLLEK_HOME` to override this root for local deployments.

## Common Paths

- Models: `~/.gollek/models/`
- GGUF: `~/.gollek/models/gguf/`
- Safetensors: `~/.gollek/models/safetensors/`
- LibTorch: `~/.gollek/models/libtorchscript/`
- Native libs: `~/.gollek/libs/`
- Logs: `~/.gollek/logs/`
- MCP registry: `~/.gollek/mcp/servers.json`

## Metal GPU Library

The Metal dylib is expected at:

`~/.gollek/libs/libgollek_metal.dylib`

Build and install it with:

```bash
make -C inference-gollek/extension/kernel/gollek-kernel-metal/src/main/cpp/metal install
```

---

[Back to Docs Index](/docs/) &nbsp; [Developer Guidance](/docs/developer-guidance)
