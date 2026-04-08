---
layout: default
title: Gollek - Universal AI/ML Platform for Java
---

<section class="hero">
  <div class="hero-logo-container">
    <img src="https://raw.githubusercontent.com/bhangun/repo-assets/master/gollek03%404x.png" alt="Gollek SDK" class="hero-logo">
  </div>
  <p class="eyebrow">One Platform. Three Ways to Build AI/ML Applications.</p>
  <h1>Build, Train, and Serve AI Models in Java</h1>
  <p class="lead">Gollek is a unified platform that works as a <strong>CLI tool</strong>, a <strong>PyTorch-like ML Framework</strong>, and an <strong>Inference/Serving Runtime</strong>. Choose your path or combine them all.</p>
  <div class="hero-actions">
    <a class="btn btn-primary" href="#three-paths">Get Started</a>
    <a class="btn btn-ghost" href="/docs/jbang-examples">Examples</a>
    <a class="btn btn-ghost" href="https://github.com/bhangun/gollek">GitHub</a>
  </div>
  <div class="hero-stats">
    <span>PyTorch-like API</span>
    <span>GPU Accelerated</span>
    <span>Multi-Format Support</span>
    <span>Native Java ML</span>
  </div>
</section>

<section id="three-paths" class="three-paths-section">
  <div class="content-container">
    <h2>Choose Your Path</h2>
    <p class="lead">Gollek adapts to your needs—whether you're a developer who wants quick CLI commands, a researcher building models, or an enterprise deploying production inference services.</p>
       <div class="paths-grid">
      <!-- Path 1: CLI -->
      <div class="path-card">
        <div class="path-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="4,17 10,11 4,5"/>
            <line x1="12" y1="19" x2="20" y2="19"/>
          </svg>
        </div>
        <h3>1. CLI Tool</h3>
        <p class="path-description">Quick inference, model management, and conversions from your terminal. Perfect for developers who want to use AI models without writing code.</p>
        
        <div class="path-features">
          <span class="feature-tag">Chat with LLMs</span>
          <span class="feature-tag">Model Conversion</span>
          <span class="feature-tag">GGUF Tools</span>
          <span class="feature-tag">Quantization</span>
        </div>
        
        <div class="path-example">
          <div class="example-label">Example:</div>
          <pre><code class="language-bash">gollek chat --provider gemini
gollek convert --input model.pt \
  --output model.gguf --quant q4_k
gollek list-models</code></pre>
        </div>
        
        <div class="path-actions">
          <a href="/docs/setup/cli-installation" class="btn btn-sm btn-primary">Install CLI</a>
          <a href="/docs/setup/cli-reference" class="btn btn-sm btn-ghost">View Commands</a>
        </div>
      </div>
      
      <!-- Path 2: Framework -->
      <div class="path-card path-card-highlighted">
        <div class="path-badge">Core Engine</div>
        <div class="path-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/>
            <path d="M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h3>2. ML Framework</h3>
        <p class="path-description">Build and train neural networks with a PyTorch-like API in pure Java. Tensors, autograd, advanced indexing, and multimodal layers.</p>
        
        <div class="path-features">
          <span class="feature-tag feature-tag-highlighted">GradTensor + Autograd</span>
          <span class="feature-tag feature-tag-highlighted">118+ NN Classes</span>
          <span class="feature-tag feature-tag-highlighted">Advanced Tensor Ops ⭐ NEW</span>
          <span class="feature-tag">Vision Transforms ⭐ NEW</span>
          <span class="feature-tag">NLP Tokenizers ⭐ NEW</span>
          <span class="feature-tag">Distributed Training</span>
        </div>
        
        <div class="path-example">
          <div class="example-label">Example (Vision/Audio NN):</div>
          <pre><code class="language-java">// Build a Multimodal Encoder
Module vision = new Sequential(
    new Conv2d(3, 64, 3), new ReLU(),
    new MaxPool2d(2),
    new Flatten()
);

Module audio = new Sequential(
    new MelSpectrogram(),
    new Conv1d(128, 256, 3)
);

Module fusion = new ModalityFusion(vision, audio);</code></pre>
        </div>
        
        <div class="path-actions">
          <a href="/docs/framework/framework" class="btn btn-sm btn-primary">Framework Guide</a>
          <a href="/docs/setup/jbang-examples" class="btn btn-sm btn-ghost">Browse Examples</a>
        </div>
      </div>
      
      <!-- Path 3: Runtime -->
      <div class="path-card">
        <div class="path-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color: var(--multimodal-primary);">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M12 22l10-5-10-5-10 5 10 5z"/>
          </svg>
        </div>
        <h3>3. Multimodal SDK</h3>
        <p class="path-description">High-level fluent API for vision, audio, and video tasks. Unified content mapping for local GGUF, ONNX, and Cloud AI providers.</p>
        
        <div class="path-features">
          <span class="feature-tag" style="border-color: var(--multimodal-primary);">Vision QA</span>
          <span class="feature-tag" style="border-color: var(--multimodal-primary);">Speech-to-Text</span>
          <span class="feature-tag" style="border-color: var(--multimodal-primary);">Video Analysis</span>
          <span class="feature-tag">LangChain4j</span>
          <span class="feature-tag">Streaming</span>
        </div>
        
        <div class="path-example">
          <div class="example-label">Example (Fluent API):</div>
          <pre><code class="language-java">// Multimodal Chat with Vision
var result = Gollek.vision()
    .model("llama-3.2-11b-vision")
    .image(Path.of("image.png"))
    .prompt("Describe this scene")
    .generate();

System.out.println(result.text());</code></pre>
        </div>
        
        <div class="path-actions">
          <a href="/docs/framework/multimodal-sdk" class="btn btn-sm btn-primary" style="background: var(--multimodal-gradient);">Explore Multimodal</a>
          <a href="/docs/runtime/core-api" class="btn btn-sm btn-ghost">SDK Reference</a>
        </div>
    </div>
  </div>
</section>

<section class="quick-grid">
  <a class="quick-card" href="/docs/framework/framework">
    <h3>🧠 ML Framework</h3>
    <p>PyTorch-like API: Tensors, Autograd, 118+ NN modules, Advanced Tensor Ops, and Multimodal layers.</p>
  </a>
  <a class="quick-card" href="/docs/setup/cli-installation">
    <h3>💻 CLI Tool</h3>
    <p>Install via brew, choco, or curl. Chat, convert, and manage models.</p>
  </a>
  <a class="quick-card" href="/docs/runtime/core-api">
    <h3>🚀 Inference Runtime</h3>
    <p>High-performance serving with GPU acceleration and unified Multimodal SDK.</p>
  </a>
  <a class="quick-card" href="/docs/setup/jbang-examples">
    <h3>📚 Examples</h3>
    <p>23+ ready-to-run scripts: from Hello World to Transformer classifiers.</p>
  </a>
  <a class="quick-card" href="/docs/runtime/gpu-kernels">
    <h3>⚡ GPU Kernels</h3>
    <p>CUDA, Metal, ROCm with FlashAttention 2/3/4 and FP8/FP4 precision.</p>
  </a>
  <a class="quick-card" href="/blog/">
    <h3>📝 Blog</h3>
    <p>Release notes, architecture updates, and implementation progress.</p>
  </a>
</section>

<section class="subtle-panel">
  <strong>🚀 SDK v0.2 Released:</strong> Advanced Tensor Operations, Vision Transforms, NLP Tokenizers, and complete MNIST training example. 75% PyTorch parity achieved!
  <a href="/docs/release-notes-v0.2">View v0.2 Release Notes</a>
</section>

<section class="subtle-panel">
  <strong>🔥 JBang Examples:</strong> 23+ verified scripts covering neural networks, NLP, computer vision, and integrations with Deeplearning4j, Stanford NLP, Smile ML, and Oracle Tribuo.
  <a href="/docs/setup/jbang-examples">Browse Examples Catalog</a>
</section>

<section class="subtle-panel">
  <strong>Latest update:</strong> Comprehensive quantization engine with GPTQ, AWQ, AutoRound, and TurboQuant support. 4-bit quantization with 8x compression and minimal quality loss.
  <a href="/docs/plugins/quantization">Explore quantization docs</a>
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

## Why Gollek?

Gollek is designed to be the most versatile AI/ML platform for Java developers, offering three distinct usage patterns that can be mixed and matched based on your needs.

### As a CLI Tool
- **Quick Inference**: Chat with LLMs directly from terminal
- **Model Management**: List, download, and convert models
- **Format Conversion**: GGUF, SafeTensors, ONNX, PyTorch
- **Quantization**: GPTQ, AWQ, AutoRound, TurboQuant, INT4, INT8, FP8

### As an ML Framework (like PyTorch)
- **Tensor Operations**: GradTensor with autograd and dynamic computational graphs
- **Neural Network Modules**: 36+ components including Linear, Conv2d, MultiHeadAttention, Transformer layers
- **Training Support**: Complete training loops with optimizers, schedulers, early stopping
- **Hardware Acceleration**: CUDA, Metal, ROCm kernels with FlashAttention
- **Interactive Development**: JBang scripting and Jupyter notebooks
- **Ecosystem Integration**: LangChain4j, Deeplearning4j, Stanford NLP, Smile ML

### As an Inference Runtime
- **Multi-Format Support**: GGUF, ONNX, SafeTensors, PyTorch JIT, TFLite, TensorRT
- **Cloud Providers**: OpenAI, Anthropic, Google Gemini, Cerebras, Mistral
- **High Performance**: GPU-accelerated inference with batching and streaming
- **Production Ready**: GraalVM native image, plugin system, observability

---

## Quick Start

### Option 1: Install CLI

```bash
# macOS
brew tap bhangun/gollek
brew install gollek

# Windows
choco install gollek

# Linux/Windows (universal)
curl -sSL https://raw.githubusercontent.com/bhangun/gollek/main/scripts/install.sh | bash
```

### Option 2: Use as ML Framework

Add the dependency to your project:

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-sdk-ml</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

Build and train your first model:

```java
// Create model (PyTorch-style API)
Module model = new Sequential(
    new Linear(784, 256),
    new ReLU(),
    new Dropout(0.2f),
    new Linear(256, 10)
);

// Setup training
var optimizer = new Adam(model.parameters(), 0.001f);
var loss = new CrossEntropyLoss();

// Training loop
for (int epoch = 0; epoch < 100; epoch++) {
    var output = model.forward(input);
    var lossVal = loss.compute(output, target);
    lossVal.backward();
    optimizer.step();
    optimizer.zeroGrad();
}
```

### Option 3: Use as Inference Runtime

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-sdk-java-local</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

Run inference in your application:

```java
// Create SDK instance
GollekLocalClient client = GollekSdkFactory.createLocalSdk();

// Build and execute inference request
InferenceRequest request = InferenceRequest.builder()
    .model("llama-3.2-3b-instruct")
    .prompt("Explain quantum computing in simple terms")
    .maxTokens(500)
    .build();

InferenceResponse response = client.createCompletion(request);
System.out.println(response.getContent());
```

---

## Key Features

| Feature | CLI | Framework | Runtime |
|---------|-----|-----------|---------|
| **Quick Inference** | ✅ | ✅ | ✅ |
| **Model Training** | ❌ | ✅ | ❌ |
| **Neural Network API** | ❌ | ✅ | ❌ |
| **GPU Acceleration** | ✅ | ✅ | ✅ |
| **Multi-Format Support** | ✅ | ✅ | ✅ |
| **Cloud Providers** | ✅ | ✅ | ✅ |
| **Streaming** | ✅ | ✅ | ✅ |
| **Batch Inference** | ❌ | ✅ | ✅ |
| **Plugin System** | ❌ | ✅ | ✅ |
| **GraalVM Native** | ✅ | ✅ | ✅ |
| **JBang/Jupyter** | ❌ | ✅ | ❌ |
| **LangChain4j** | ❌ | ✅ | ❌ |

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
- **SafeTensors** - HuggingFace format for PyTorch models
- **PyTorch JIT** - Direct .pt file loading

### Audio Processing
- **Whisper** - Speech-to-text (STT) with 99+ language support
- **SpeechT5** - Text-to-speech (TTS) with 8 preset voices
- **HiFi-GAN** - High-quality neural vocoder
- **VAD** - Voice activity detection for silence removal

### Model Quantization
- **GPTQ** - Hessian-based 4-bit quantization (best quality, 8x compression)
- **AWQ** - Activation-aware quantization (fast, 3-5x speedup)
- **AutoRound** - Optimization-based rounding (balanced quality/speed)
- **TurboQuant** - Edge-optimized vector quantization (calibration-free)
- **INT8** - 8-bit integer quantization (4x compression)
- **FP8** - 8-bit floating point (GPU tensor cores)
- [Learn more →](/docs/plugins/quantization)

### Default Models
- **Text Generation**: `Llama-3.2-3B-Instruct` (via GGUF)
- **Embeddings**: `Qwen/Qwen2.5-0.5B-Instruct` (via GGUF)
- **Speech-to-Text**: `openai/whisper-large-v3`
- **Text-to-Speech**: `microsoft/speecht5_tts`


---

## Architecture Overview

```
+-------------------------------------------------------------+
|                    Gollek Platform                           |
+-------------------------------------------------------------+
|  CLI Tool  |  ML Framework (SDK)  |  Inference Runtime      |
+-------------------------------------------------------------+
|                    Core SDK Layer                            |
|  +--------------+ +--------------+ +---------------------+  |
|  | Tensor &     | | NN Modules   | | Model Repository    |  |
|  | Autograd     | | & Training   | | & Management        |  |
|  +--------------+ +--------------+ +---------------------+  |
+-------------------------------------------------------------+
|                    Hardware Acceleration                     |
|  CUDA | Metal | ROCm | Blackwell | DirectML                |
+-------------------------------------------------------------+
|                    Model Format Runners                      |
|  GGUF | ONNX | SafeTensors | PyTorch | TFLite | TensorRT   |
+-------------------------------------------------------------+
|                    Cloud Providers                           |
|  OpenAI | Anthropic | Gemini | Cerebras | Mistral           |
+-------------------------------------------------------------+
```

---

## 🌟 Wayang Platform: Complete 9-Phase Architecture

Beyond Gollek SDK (Phase 1-3), the complete Wayang Platform includes:

### **Phases 1-3: Deep Learning Foundation (Gollek SDK)**
- ✅ Phase 1: CNN/RNN Layers - Complete
- 📋 Phase 2: GPU Acceleration (CUDA, Metal, ROCm) - Designed
- 📋 Phase 3: Extended Features (Transformers, Model Zoo) - Designed

### **Phases 4-7: Agent Framework (Wayang Runtime)**  
- ✅ Phase 4: Quarkus Decoupling - Complete
- ✅ Phase 5: SPI Integration - Complete
- ✅ Phase 6: AgentSkills.io Compliance - Complete
- ✅ Phase 7: Skill Integration - Complete

### **Phases 8-9: Production Hardening**
- ✅ Phase 8: Agent Optimization (75-85% size reduction) - Complete
- ✅ Phase 8B: Comprehensive Testing (118 tests, >90% coverage) - Complete
- ✅ Phase 9: Production Observability (OpenTelemetry, Circuit Breakers) - Complete
- 📋 Phase 9B: Code Quality Tooling (SpotBugs, CheckStyle, JaCoCo) - Designed

**Learn More:** [Complete Platform Phases Overview](/docs/phases-overview)  
**Get Started:** [Agent Framework](/docs/agent-framework) • [Production Deployment](/docs/production-hardening)

---

| Domain | Approach | Application |
|--------|----------|-------------|
| **Quick Testing** | CLI | Chat with models, convert formats, quantize models |
| **ML Research** | Framework | Build custom architectures, train from scratch, experiment |
| **Enterprise Apps** | Runtime | Embed inference in microservices, high-throughput serving |
| **Edge AI** | Runtime | Run quantized GGUF models on resource-constrained devices |
| **Hybrid Cloud** | Runtime | Seamlessly switch between local and cloud providers |
| **Model Testing** | CLI + Framework | Compare outputs across multiple providers and formats |
| **Embedded Systems** | Runtime | Native library integration via GraalVM FFI |
| **Interactive Dev** | Framework | JBang scripting, Jupyter notebooks for rapid prototyping |

---

## Community and Support

- **[Complete Platform Documentation](/docs/phases-overview)** ⭐ NEW - 9-phase architecture overview
- **[Platform Phase Documentation](/docs/)** - Deep Learning, Agent Framework, Production Hardening
- [Documentation](/docs/) - Comprehensive guides and API references
- [Framework Guide](/docs/framework) - Build and train models
- [Agent Framework Guide](/docs/agent-framework/) - Build intelligent agents (Phases 4-7)
- [Production Hardening Guide](/docs/production-hardening/) - Deploy to production (Phases 8-9)
- [CLI Reference](/docs/cli-reference) - All CLI commands
- [JBang Examples](/docs/jbang-examples) - 23+ ready-to-run Java scripts
- [Discussions](https://github.com/bhangun/gollek/discussions) - Ask questions and share ideas
- [Issues](https://github.com/bhangun/gollek/issues) - Report bugs and request features
- [Architecture](/docs/architecture) - Deep dive into Gollek architecture

---

## Ready to Build?

Choose your path and start building AI-powered applications with Gollek today.

[CLI Guide](/docs/cli-installation) &nbsp; [Framework Guide](/docs/framework) &nbsp; [Runtime Guide](/docs/core-api) &nbsp; [View Examples](/docs/jbang-examples)

---

Gollek is open source and available under the Apache 2.0 License.
