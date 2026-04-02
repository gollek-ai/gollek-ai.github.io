---
layout: default
title: Gollek SDK - Universal Inference SDK for AI Models
---

<section class="hero">
  <div class="hero-logo-container">
    <img src="https://raw.githubusercontent.com/bhangun/repo-assets/master/gollek03%404x.png" alt="Gollek SDK" class="hero-logo">
  </div>
  <p class="eyebrow">Universal Inference SDK + CLI + Embedded ML Framework</p>
  <h1>Build AI features once. Run and Train anywhere with a PyTorch-like Java API.</h1>
  <p class="lead">Gollek gives your team one execution surface for GGUF, ONNX, TFLite, and now a **native Java ML SDK**. It centralizes model life-cycle, autograd-powered training, and provider auto-selection into a single consistent ecosystem.</p>
  <div class="hero-actions">
    <a class="btn btn-primary" href="/docs/">Get Started</a>
    <a class="btn btn-ghost" href="/docs/jbang-examples">JBang Examples</a>
    <a class="btn btn-ghost" href="/docs/cli-installation">Install CLI</a>
    <a class="btn btn-ghost" href="https://github.com/bhangun/gollek">GitHub</a>
  </div>
  <div class="hero-stats">
    <span>Distributed KV Fabric</span>
    <span>Mixture-of-Experts</span>
    <span>GPU Accelerated</span>
    <span>Token-Level Routing</span>
  </div>
</section>

<section class="quick-grid">
  <a class="quick-card" href="/docs/">
    <h3>Start Integration</h3>
    <p>Set up dependencies, configure providers, and run first inference quickly.</p>
  </a>
  <a class="quick-card" href="/docs/jbang-examples">
    <h3>JBang Examples</h3>
    <p>23+ ready-to-run Java scripts: from Hello World to Transformer classifiers.</p>
  </a>
  <a class="quick-card" href="/docs/cli-installation">
    <h3>Install CLI</h3>
    <p>Install <code>gollek</code> via release installer, Homebrew, or Chocolatey.</p>
  </a>
  <a class="quick-card" href="/docs/ml-sdk">
    <h3>Embedded ML SDK</h3>
    <p>PyTorch-like Tensors, Autograd, NN Modules, and training in pure Java.</p>
  </a>
  <a class="quick-card" href="/docs/examples">
    <h3>SDK Examples</h3>
    <p>Copy real code patterns for streaming, async jobs, and provider selection.</p>
  </a>
  <a class="quick-card" href="/blog/">
    <h3>Product Blog</h3>
    <p>Read release notes, architecture updates, and implementation progress.</p>
  </a>
</section>

<section class="subtle-panel">
  <strong>🔥 New Release:</strong> Comprehensive JBang Examples Catalog is live! 23+ verified scripts covering neural networks, NLP, computer vision, and integrations with Deeplearning4j, Stanford NLP, Smile ML, and Oracle Tribuo.
  <a href="/docs/jbang-examples">Browse Examples Catalog</a>
</section>

<section class="subtle-panel">
  <strong>Latest update:</strong> Audio module v2.0 is live with Whisper STT, SpeechT5 TTS, HiFi-GAN vocoder, and VAD pipeline. Plus quantization engine with INT4/INT8/FP8 support.
  <a href="/blog/audio-quantization-release">Read the release</a>
</section>

<section class="subtle-panel">
  <strong>GGUF Enhancement:</strong> K-quant support (Q2_K, Q4_K, Q5_K, Q6_K) with fixed Q4_0 nibble overflow and C-compatible Q8_0 rounding. Now supporting 40+ model families including DeepSeek, Yi, DBRX, Grok, and Jamba.
  <a href="/docs/gguf-enhancements">Learn about GGUF improvements</a>
</section>

<section class="subtle-panel">
  <strong>GPU Acceleration:</strong> Native CUDA, Blackwell, ROCm, and Metal kernels with FlashAttention-2/3 and FP4 tensor cores.
  <a href="/docs/gpu-kernels">Learn about GPU support</a>
</section>

<section class="visual-feature">
  <div class="content-container">
    <h2>The Distributed Inference Fabric</h2>
    <p class="lead">Gollek isn't just an SDK; it's a <strong>Distributed LLM OS</strong>. We've unified KV memory across the cluster, enabling multi-node attention, universal speculative decoding, and native Mixture-of-Experts sharding.</p>
    <div class="feature-mockup">
      <img src="/assets/token_routing_control_tower_mockup_1774865775837.png" alt="Token Routing Control Tower Mockup" style="width: 100%; border-radius: 12px; box-shadow: 0 20px 40px rgba(0,0,0,0.4);">
      <p class="caption">Real-time Token Routing: A small "Draft" model (cyan) proposes tokens while a large "Target" model (violet) verifies them on the shared KV fabric.</p>
    </div>
  </div>
</section>

<section class="terminal-demo">
  <div class="content-container">
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
| **GPU Acceleration** | **CUDA, Blackwell, ROCm, and Metal kernels with FlashAttention** |
| **Audio Processing** | **Whisper STT, SpeechT5 TTS, HiFi-GAN vocoder, VAD** |
| **Model Quantization** | **GPTQ INT4/INT8, FP8 with SafeTensors format** |
| **Embedded ML SDK** | **PyTorch-like Tensors, Autograd, NN Modules, Optimizers** |
| **Distributed Fabric** | **Unified KV memory, Cluster-wide Attention, Sparse Expert Routing** |
| **Token Orchestrator** | **Speculative Decoding (2-4x speed), Logit Mixing, Ensemble Inference** |
| **MoE Runtime** | **Native Expert Gating (Top-K), Sharded Experts, Heatmap Telemetry** |
| **K-Quants** | **Q2_K, Q4_K, Q5_K, Q6_K with improved quality/size ratios** |
| **40+ Model Families** | **DeepSeek, Yi, DBRX, Grok, Jamba, Mamba, RWKV, and more** |
| **JBang Examples** | **23+ ready-to-run scripts: NN, NLP, CV, and ML integrations** |

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
- [JBang Examples](/docs/jbang-examples) - 23+ ready-to-run Java scripts
- [Discussions](https://github.com/bhangun/gollek/discussions) - Ask questions and share ideas
- [Issues](https://github.com/bhangun/gollek/issues) - Report bugs and request features
- [Architecture](/docs/architecture) - Deep dive into Gollek architecture

---

## Ready to Build?

Start building AI-powered applications with Gollek SDK today.

[Get Started Now](/docs/) &nbsp; [View JBang Examples](/docs/jbang-examples) &nbsp; [View API Reference](/docs/core-api)

---

Gollek SDK is open source and available under the Apache 2.0 License.
