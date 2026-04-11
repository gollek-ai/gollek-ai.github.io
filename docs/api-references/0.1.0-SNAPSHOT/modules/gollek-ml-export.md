---
layout: default
title: gollek-ml-export
parent: API REferences
nav_order: 240
---

# gollek-ml-export

The `gollek-ml-export` module provides tools for converting Gollek models into various industry-standard formats. It enables seamless transition from training in Gollek to deployment in other runtimes like ONNX Runtime, LiteRT (TFLite), or llama.cpp.

## 🌟 Overview

Model portability is key for diverse deployment targets. The `ModelExporter` suite allows you to serialize both architecture and weights into formats optimized for high-performance inference, edge devices, or cross-language integration.

## 🚀 Key Features

- **Multi-format Support**: Export to **ONNX**, **GGUF**, and **LiteRT** (.tflite) formats.
- **Unified Export API**: The `ModelExporter` provides a consistent entry point for all conversion tasks.
- **Weight Quantization**: Integrated support for basic quantization during the export process to reduce model size.
- **Verification Support**: Optional benchmarking during export to ensure the exported model matches the original's output.
- **Custom Metadata**: Inject custom metadata into GGUF and LiteRT containers for enhanced model discovery.

## 📦 Installation

Add the following dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-ml-export</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
```

## 🛠️ Usage Examples

### Exporting to ONNX

```java
import tech.kayys.gollek.ml.export.ModelExporter;
import tech.kayys.gollek.ml.export.OnnxExporter;

// Export a vision model to ONNX for production serving
ModelExporter.onnx(myResnetModel)
    .inputShape(1, 3, 224, 224)
    .opset(15)
    .export("resnet50.onnx");
```

### Exporting to GGUF (for llama.cpp)

```java
import tech.kayys.gollek.ml.export.GGUFExporter;

GGUFExporter.from(myLLaMAModel)
    .quantize("q4_k_m") // Apply 4-bit quantization
    .export("llama-3-8b.gguf");
```

### Exporting to LiteRT (TFLite)

```java
import tech.kayys.gollek.ml.export.LiteRTExporter;

LiteRTExporter.from(myMobileNet)
    .optimizeForSize()
    .export("mobilenet_v2.tflite");
```

## 📖 API Highlights

### `tech.kayys.gollek.ml.export.ModelExporter`

The main service for managing model serialization.

| Method | Description |
|:-------|:------------|
| `onnx(Module m)` | Returns an `OnnxExporter` for the target module. |
| `gguf(Module m)` | Returns a `GGUFExporter` for the target module. |
| `litert(Module m)` | Returns a `LiteRTExporter` for the target module. |

### Exporter Configurations

- **`OnnxExporter`**: Allows setting input names, output names, and ONNX opset version.
- **`GGUFExporter`**: Supports quantization presets and custom KV (Key-Value) metadata pairs.
- **`LiteRTExporter`**: Supports conversion options for selective op registration and weight pruning.

---

[Back to API Hub](../)
