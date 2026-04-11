---
layout: default
title: On-Device Inference with LiteRT
parent: Advanced Tutorials
grand_parent: Tutorials
nav_order: 2
---

# 📱 On-Device Inference with LiteRT

Bringing your Gollek models to mobile and edge devices requires the `gollek-ml-litert` module.

## 1. Exporting for Performance

First, convert your `NNModule` into an optimized LiteRT format:

```java
import tech.kayys.gollek.ml.export.LiteRTExporter;

Sequential model = ... // Your trained model
LiteRTExporter exporter = new LiteRTExporter();

// Quantize to INT8 for extreme efficiency
exporter.quantize(true);
exporter.save(model, "model_v1.tflite");
```

## 2. Running Inference on Mobile

Using the LiteRT runner to execute predictions on device hardware (including NPU):

```java
import tech.kayys.gollek.ml.litert.LiteRTRunner;

LiteRTRunner runner = LiteRTRunner.load("model_v1.tflite");
runner.useNpu(true); // Enable Apple Neural Engine or Linux NPU

Tensor input = Tensor.randn(1, 224, 224, 3);
Tensor output = runner.run(input);
```

## 3. Best Practices

- **Model Pruning**: Remove redundant weights before export.
- **Selective Quantization**: Keep sensitive layers in FP16 if needed.
- **Hardware Acceleration**: Always check for NPU/GPU delegates before fallback to CPU.

---

[Back to Tutorials Overview](../)
