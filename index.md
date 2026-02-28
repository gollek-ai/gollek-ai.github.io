---
layout: default
title: Gollek SDK - Universal Inference SDK for AI Models
---

<section class="hero">
  <p class="eyebrow">Universal Inference SDK + CLI</p>
  <h1>Build AI features once. Run local or cloud with the same API.</h1>
  <p class="lead">Gollek gives your team one execution surface for GGUF, ONNX, TFLite, and hosted providers. Use it as a Java SDK or install the standalone <code>gollek</code> CLI.</p>
  <div class="hero-actions">
    <a class="btn btn-primary" href="/docs/">Get Started</a>
    <a class="btn btn-ghost" href="/docs/cli-installation">Install Gollek</a>
    <a class="btn btn-ghost" href="https://github.com/bhangun/gollek">GitHub</a>
  </div>
  <div class="hero-stats">
    <span>SDK + CLI</span>
    <span>Local + Cloud Providers</span>
    <span>Native Ready</span>
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
</section>

<section class="subtle-panel">
  <strong>Latest update:</strong> Multi-LoRA and LibTorch advanced path progress is live, including FP8 rowwise calibration lifecycle and SageAttention2 safety guardrails.
  <a href="/blog/multilora-libtorch-advanced-update">Read the update</a>
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

// Build inference request
InferenceRequest request = InferenceRequest.builder()
    .model("llama-3.2-3b-instruct")
    .prompt("Explain quantum computing in simple terms")
    .maxTokens(500)
    .build();

// Execute inference
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
| Model Management | Pull, list, and delete models programmatically |
| Provider Discovery | Auto-discover available providers and their capabilities |
| Native Interop | GraalVM native image with C FFI for embedded integration |
| CDI Integration | Full Jakarta EE CDI support for enterprise applications |

---

## Supported Providers

### Local Runtimes
- **GGUF** (llama.cpp) - Quantized models for CPU inference
- **ONNX** - Cross-platform neural network format
- **TFLite** - TensorFlow Lite for mobile and edge devices
- **vLLM** - High-throughput LLM serving

### Cloud Providers
- **OpenAI** - GPT-4, GPT-3.5-Turbo, and more
- **Anthropic** - Claude family of models
- **Google Gemini** - Gemini Pro and Ultra
- **Ollama** - Self-hosted open-source models
- **Cerebras** - High-performance cloud inference

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
|  | Inference    | | Async Job    | | Provider            |  |
|  | Service      | | Manager      | | Registry            |  |
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
