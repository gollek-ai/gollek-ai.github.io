---
layout: default
title: Gollek SDK - Universal Inference SDK for AI Models
---

<section class="hero">
  <p class="eyebrow">Universal Inference SDK + CLI + Audio</p>
  <h1>Build AI features once. Run local or cloud with the same API.</h1>
  <p class="lead">Gollek gives your team one execution surface for GGUF, ONNX, TFLite, audio processing (Whisper STT, SpeechT5 TTS), and hosted providers. It centralizes model life-cycle, observability, and provider auto-selection into a single consistent SDK.</p>
  <div class="hero-actions">
    <a class="btn btn-primary" href="/docs/">Get Started</a>
    <a class="btn btn-ghost" href="/blog/">Blog</a>
    <a class="btn btn-ghost" href="/docs/cli-installation">Install Gollek</a>
    <a class="btn btn-ghost" href="https://github.com/bhangun/gollek">GitHub</a>
  </div>
  <div class="hero-stats">
    <span>SDK + CLI</span>
    <span>Local + Cloud + Audio</span>
    <span>Native Ready</span>
    <span>GPU Accelerated</span>
  </div>
</section>

<section class="quick-grid">
  <a class="quick-card" href="/docs/">
    <h3>Start Integration</h3>
    <p>Set up dependencies, configure providers, and run first inference quickly.</p>
  </a>
  <a class="quick-card" href="/docs/cli-installation">
    <h3>Install CLI</h3>
    <p>Install <code>gollek</code> via release installer, Homebrew, or Chocolatey.</p>
  </a>
  <a class="quick-card" href="/docs/examples">
    <h3>Read Examples</h3>
    <p>Copy real code patterns for streaming, async jobs, and provider selection.</p>
  </a>
  <a class="quick-card" href="/docs/developer-guidance#litert-tflite">
    <h3>LiteRT Runtime</h3>
    <p>Download or package the LiteRT C runtime and sample model assets.</p>
  </a>
  <a class="quick-card" href="/blog/">
    <h3>Product Blog</h3>
    <p>Read release notes, architecture updates, and implementation progress.</p>
  </a>
</section>

<section class="subtle-panel">
  <strong>Latest update:</strong> Audio module v2.0 is live with Whisper STT, SpeechT5 TTS, HiFi-GAN vocoder, and VAD pipeline. Plus quantization engine with INT4/INT8/FP8 support.
  <a href="/blog/audio-quantization-release">Read the release</a>
</section>

<section class="subtle-panel">
  <strong>GPU Acceleration:</strong> Native CUDA, Blackwell, ROCm, and Metal kernels with FlashAttention-2/3 and FP4 tensor cores.
  <a href="/docs/gpu-kernels">Learn about GPU support</a>
</section>

<section class="subtle-panel">
  <strong>Audio Processing:</strong> Speech-to-text (Whisper), Text-to-speech (SpeechT5), voice activity detection, and multi-format support.
  <a href="/docs/audio-processing">Audio API reference</a>
</section>

<section class="subtle-panel">
  <strong>Model Quantization:</strong> GPTQ INT4, INT8, and FP8 quantization with SafeTensors format for 4-8x compression.
  <a href="/docs/quantization">Quantization guide</a>
</section>

<section class="subtle-panel">
  <strong>Local install layout:</strong> Gollek stores models and native libraries under <code>~/.gollek/</code> by default.
  <a href="/docs/developer-guidance#gpu-smoke-test-apple-silicon-only">Metal GPU test guide</a>
</section>

<section class="subtle-panel">
  <strong>LiteRT Runtime Assets:</strong> one-command helper to download or package <code>libtensorflowlite_c</code>.
  <a href="/docs/developer-guidance#litert-tflite">Release + install guide</a>
</section>

<section class="terminal-demo">
  <h2>Try the CLI Experience</h2>
  <p>See how a real terminal session starts with Gollek and Gemini provider.</p>
  <div id="terminal" class="terminal-box" role="img" aria-label="Typing demo showing gollek chat command">
    <span class="prompt">$</span>
    <span
      id="typing-effect"
      data-command="gollek chat --provider gemini"
      data-result="Connecting to Gemini API...&#10;✓ Ready to chat&#10;You: "
    >gollek chat --provider gemini</span>
  </div>
</section>

---

## Why Gollek SDK?

Gollek SDK provides a unified interface for AI model inference, abstracting away the complexity of different model formats, providers, and deployment environments.

### Multi-Format Support

Native support for GGUF (llama.cpp), ONNX, TFLite, and cloud APIs (OpenAI, Anthropic, Google Gemini, Ollama) through a single consistent API.

### High Performance

Built on Quarkus 3.x with reactive programming (Mutiny) for non-blocking, high-throughput inference operations.

### Native FFI Support

GraalVM native image support with C entrypoints for seamless integration with C/C++ applications and embedded systems.

### Modular Architecture

Pluggable provider system with optional dependencies. Include only the providers you need for minimal footprint.

---

## Quick Start

Add the dependency to your project:

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-sdk-java-local</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

Create your first inference:

```java
// Create SDK instance
GollekLocalClient client = new GollekLocalClientAdapter(GollekSdkFactory.createLocalSdk());

// Resolve default model and prepare it (handles discovery & pull)
String modelId = client.resolveDefaultModel().orElse("llama-3.2-3b-instruct");
ModelResolution resolution = client.prepareModel(modelId, progress -> {
    System.out.printf("\rPreparing... %.0f%%", progress.getPercentComplete());
});

// Build and execute inference request
InferenceRequest request = InferenceRequest.builder()
    .model(resolution.getModelId())
    .prompt("Explain quantum computing in simple terms")
    .maxTokens(500)
    .build();

InferenceResponse response = client.createCompletion(request);
System.out.println(response.getContent());
```

---

## Key Features

| Feature | Description |
|---------|-------------|
| Unified API | Single interface for all inference providers and model formats |
| Streaming Support | Real-time token streaming with Mutiny reactive streams |
| Async Jobs | Background job submission with status tracking and callbacks |
| Batch Inference | Process multiple requests efficiently in a single call |
| Model Management | Automated resolution, pull-if-missing, and lifecycle handling |
| Engine Metrics | Real-time P95 latency and error rate monitoring |
| Plugin System | Extensible architecture for custom providers and features |
| Provider Discovery | Auto-select best provider based on model format |
| Native Interop | GraalVM native image with C FFI for embedded integration |
| CDI Integration | Full Jakarta EE CDI support for enterprise applications |
| GPU Acceleration | CUDA, Blackwell, ROCm, and Metal kernels with FlashAttention |
| **Audio Processing** | **Whisper STT, SpeechT5 TTS, HiFi-GAN vocoder, VAD** |
| **Model Quantization** | **GPTQ INT4/INT8, FP8 with SafeTensors format** |

---

## Supported Providers

### Cloud Providers
- **OpenAI** - GPT-4, GPT-3.5-Turbo, o1 with function calling and vision
- **Anthropic** - Claude 3 family (Opus, Sonnet, Haiku) with 200K context
- **Google Gemini** - Gemini Pro/Ultra with multimodal support
- **Cerebras** - Llama 3.1 with ~400 tokens/sec speed
- **Mistral** - Mistral and Mixtral models

### Local Runtimes
- **GGUF** - Quantized models for CPU inference
- **ONNX** (Open Neural Network Exchange) - Cross-platform neural network format
- **TFLite** (TensorFlow Lite) - TensorFlow Lite for mobile and edge devices

### Audio Processing
- **Whisper** - Speech-to-text (STT) with 99+ language support
- **SpeechT5** - Text-to-speech (TTS) with 8 preset voices
- **HiFi-GAN** - High-quality neural vocoder
- **VAD** - Voice activity detection for silence removal

### Model Quantization
- **GPTQ** - 4-bit integer quantization (8x compression)
- **INT8** - 8-bit integer quantization (4x compression)
- **FP8** - 8-bit floating point for GPU tensor cores

### Default Models
- **Text Generation**: `Llama-3.2-3B-Instruct` (via GGUF)
- **Embeddings**: `Qwen/Qwen2.5-0.5B-Instruct` (via GGUF)
- **Speech-to-Text**: `openai/whisper-large-v3`
- **Text-to-Speech**: `microsoft/speecht5_tts`


---

## Architecture Overview

```
+-------------------------------------------------------------+
|                    Gollek SDK Client                         |
+-------------------------------------------------------------+
|  GollekLocalClient (Java API) | GollekNativeEntrypoints    |
+-------------------------------------------------------------+
|                    LocalGollekSdk                            |
|  +--------------+ +--------------+ +---------------------+  |
|  | Inference    | | Model Prep   | | Metrics &           |  |
|  | Service      | | Service      | | Observability       |  |
|  +--------------+ +--------------+ +---------------------+  |
+-------------------------------------------------------------+
|                    Model Repository                          |
|  Local | HuggingFace | S3 | Custom Sources                  |
+-------------------------------------------------------------+
|                    Inference Providers                       |
|  GGUF | ONNX | TFLite | OpenAI | Anthropic | Gemini | ...  |
+-------------------------------------------------------------+
```

---

## Use Cases

| Domain | Application |
|--------|-------------|
| Edge AI | Run quantized GGUF models on resource-constrained devices |
| Microservices | Embed inference directly in Java microservices |
| Hybrid Cloud | Seamlessly switch between local and cloud providers |
| Model Testing | Compare outputs across multiple providers and formats |
| Embedded Systems | Native library integration via GraalVM FFI |
| Enterprise Apps | CDI integration for Jakarta EE applications |

---

## Community and Support

- [Documentation](/docs/) - Comprehensive guides and API references
- [Discussions](https://github.com/bhangun/gollek/discussions) - Ask questions and share ideas
- [Issues](https://github.com/bhangun/gollek/issues) - Report bugs and request features
- [Architecture](/docs/architecture) - Deep dive into Gollek architecture

---

## Ready to Build?

Start building AI-powered applications with Gollek SDK today.

[Get Started Now](/docs/) &nbsp; [View API Reference](/docs/core-api)

---

Gollek SDK is open source and available under the Apache 2.0 License.
