---
layout: default
title: Gollek SDK Documentation
---

# Gollek SDK Documentation

Welcome to the Gollek SDK documentation. Choose a path below to get started building AI/ML applications in Java.

---

## 🚀 Latest: SDK v0.2 Release

**Advanced Tensor Operations | Vision Transforms | NLP Tokenizers | Complete Examples**

[📖 View v0.2 Release Notes](/docs/release-notes-v0.2)

---

## 🎯 Platform Overview

**Complete Platform Roadmap (9 Phases)**

The Wayang Platform spans 9 phases of development:

1. **Phases 1-3**: Deep Learning Foundation (Gollek SDK) - 1 Complete ✅, 2 Designed, 3 Designed
2. **Phases 4-7**: Agent Framework (Wayang Runtime) - All 4 Complete ✅
3. **Phases 8-9**: Production Hardening - All 3 Complete ✅ (8, 8B, 9), 1 Designed (9B)

**Start Your Journey:**
- [**📊 Platform Phases Overview**](/docs/phases-overview) - Complete roadmap of all 9 phases
- **[🤖 Wayang Agent Framework (Phases 4-7)](/docs/agent-framework/)** - Build intelligent agents
- **[🚀 Production Hardening (Phases 8-9)](/docs/production-hardening/)** - Deploy to production
- **[⚡ GPU Acceleration (Phase 2)](/docs/gpu-acceleration/)** - 30-100x speedup
- **[🔧 Extended Features (Phase 3)](/docs/extended-features/)** - Transformers, model zoo, and more

---

## Getting Started

### New Users

1. **[Platform Overview](/docs/phases-overview)** - Understand the complete system
2. **[Quick Start Guide](/docs/setup/sdk-installation)** - Install and set up Gollek in 5 minutes
3. **[Your First Model](/docs/framework/first-model)** - Build a simple neural network
4. **[MNIST Training Example](/docs/examples/mnist-cnn)** - Complete end-to-end training workflow

### Building Agents (Wayang)

1. **[Agent Framework Intro](/docs/agent-framework/)** - Overview of Phases 4-7
2. **[Building Your First Agent](docs/agent-framework/)** - Create agent with builder pattern
3. **[Skills Integration](/docs/agent-framework/)** - Register and manage skills
4. **[Production Deployment](/docs/production-hardening/)** - Deploy agents safely

### Migrating from PyTorch

1. **[PyTorch to Gollek](/docs/migration/from-pytorch)** - Mapping PyTorch APIs to Gollek
2. **[Common Patterns](/docs/migration/common-patterns)** - Torch patterns in Java
3. **[Examples](/docs/examples)** - PyTorch→Gollek code comparisons

---

## Core Documentation

### 🌟 Wayang Platform (Complete System)

| Section | Description | Status |
|---------|-------------|--------|
| [**Platform Phases Overview**](/docs/phases-overview) | Complete 9-phase roadmap with status | 📊 Complete |
| [**Agent Framework (Phases 4-7)**](/docs/agent-framework/) | Intelligent agent runtime and skills | ✅ Production Ready |
| [**Production Hardening (Phases 8-9)**](/docs/production-hardening/) | Observability, optimization, testing | ✅ Production Ready |
| [**GPU Acceleration (Phase 2)**](/docs/gpu-acceleration/) | CUDA, Metal, ROCm backends | 📋 Designed |
| [**Extended Features (Phase 3)**](/docs/extended-features/) | Transformers, loss functions, model zoo | 📋 Designed |

### Framework & Training

| Document | Description |
|----------|-------------|
| [Framework Overview](/docs/framework/framework) | Introduction to Gollek's ML framework |
| [Tensor API](/docs/api/tensor) | Core Tensor class and operations |
| [GradTensor & Autograd](/docs/api/gradtensor) | Automatic differentiation |
| [Neural Networks](/docs/framework/nn-modules) | 118+ built-in layer implementations |
| [Training Loop](/docs/framework/training) | Building training scripts |
| [Optimizers](/docs/framework/optimizers) | SGD, Adam, RMSprop, etc. |
| [Learning Rate Schedulers](/docs/framework/schedulers) | StepLR, CosineAnnealingLR, etc. |

### Advanced Tensor Operations ⭐ NEW

| Document | Description |
|----------|-------------|
| [TensorOps API](/docs/api-tensorops) | Advanced slicing, gathering, masking |
| [Tensor Indexing](/docs/framework/indexing) | Multi-dimensional indexing patterns |
| [Reshape & Transpose](/docs/framework/reshape) | Tensor shape manipulation |
| [Broadcasting](/docs/framework/broadcasting) | Numpy-style broadcasting rules |

### Data Loading & Preprocessing

| Document | Description |
|----------|-------------|
| [DataLoader](/docs/framework/dataloader) | Efficient data loading |
| [Datasets](/docs/framework/datasets) | Built-in dataset implementations |
| [Vision Transforms](/docs/api-vision-transforms) | Image preprocessing pipeline ⭐ NEW |
| [Data Augmentation](/docs/framework/augmentation) | Mixup, CutMix, RandomCrop, etc. |

### NLP & Tokenization ⭐ NEW

| Document | Description |
|----------|-------------|
| [Tokenizer API](/docs/api-tokenizer) | Text tokenization interface |
| [NLP Layers](/docs/framework/nlp-layers) | Embeddings, Attention, etc. |
| [Transformers](/docs/framework/transformers) | Transformer architecture building blocks |
| [Language Models](/docs/examples/llm) | Training language models |

### Computer Vision

| Document | Description |
|----------|-------------|
| [Vision Layers](/docs/framework/vision-layers) | Conv2d, MaxPool, etc. |
| [CNN Architectures](/docs/examples/cnn) | ResNet, VGG, etc. examples |
| [Image Classification](/docs/examples/image-classification) | End-to-end image classification |
| [Object Detection](/docs/examples/object-detection) | YOLO-style detection |

### Model Export & Deployment

| Document | Description |
|----------|-------------|
| [Model Saving](/docs/framework/model-save) | Save/load models in SafeTensors format |
| [ONNX Export](/docs/framework/onnx-export) | Export to ONNX format |
| [Model Serving](/docs/deployment/model-serving) | REST API serving |
| [Production Deployment](/docs/deployment/production) | Docker, Kubernetes, etc. |

---

## API Reference

### Core Classes

- **[Tensor](/docs/api/tensor)** - Multi-dimensional array abstraction
- **[GradTensor](/docs/api/gradtensor)** - Tensor with gradient tracking
- **[TensorOps](/docs/api-tensorops)** - Advanced tensor operations ⭐ NEW
- **[Module](/docs/api/module)** - Base class for neural network components
- **[Sequential](/docs/api/sequential)** - Container for stacked modules

### Neural Network Modules (118+ classes)

**Layers:**
- [Linear](/docs/api/nn/linear)
- [Conv2d](/docs/api/nn/conv2d)
- [RNN, LSTM, GRU](/docs/api/nn/rnn)
- [MultiHeadAttention](/docs/api/nn/attention)
- [Embedding](/docs/api/nn/embedding)

**Full List:** [All NN Modules](/docs/api/nn-modules)

### Loss Functions

- [CrossEntropyLoss](/docs/api/loss/crossentropy)
- [MSELoss](/docs/api/loss/mse)
- [BCELoss](/docs/api/loss/bce)
- [Full List](/docs/api/losses)

### Optimizers

- [Adam](/docs/api/optimizer/adam)
- [SGD](/docs/api/optimizer/sgd)
- [RMSprop](/docs/api/optimizer/rmsprop)
- [Full List](/docs/api/optimizers)

### Data & Vision ⭐ NEW

- [Tokenizer](/docs/api-tokenizer)
- [VisionTransforms](/docs/api-vision-transforms)
- [Compose](/docs/api/vision/compose)
- [Normalize](/docs/api/vision/normalize)

---

## Examples

### Beginner

- [Hello World](/docs/examples/hello-world) - Tensor basics
- [Linear Regression](/docs/examples/linear-regression) - Simple training
- [MNIST Classification](/docs/examples/mnist) - Neural network classifier

### Intermediate

- [MNIST CNN](/docs/examples/mnist-cnn) - Convolutional network ⭐ NEW
- [Sentiment Analysis](/docs/examples/sentiment-analysis) - NLP example
- [Image Classification](/docs/examples/image-classification) - Vision example

### Advanced

- [Transformer Training](/docs/examples/transformer) - Language model
- [Distributed Training](/docs/examples/distributed-training) - Multi-GPU
- [Custom Layers](/docs/examples/custom-layers) - Building extensions

### Complete Projects

- [Vision Model](/docs/examples/complete/vision-model) - CNN classifier
- [Language Model](/docs/examples/complete/language-model) - GPT-style model
- [Multimodal](/docs/examples/complete/multimodal) - Vision + Text

---

## Tools & Integration

### CLI Tool

- [CLI Installation](/docs/setup/cli-installation)
- [CLI Reference](/docs/setup/cli-reference)
- [Chat Command](/docs/cli/chat)
- [Model Conversion](/docs/cli/convert)

### JBang Scripts

- [JBang Setup](/docs/setup/jbang-setup)
- [23+ Example Scripts](/docs/setup/jbang-examples)
- [Writing JBang Scripts](/docs/setup/jbang-writing)

### Integration

- [LangChain4j](/docs/integration/langchain4j)
- [Spring Boot](/docs/integration/spring-boot)
- [Gradle Plugin](/docs/integration/gradle-plugin)

---

## Performance & Optimization

- [Benchmarking Guide](/docs/performance/benchmarking)
- [Profiling](/docs/performance/profiling)
- [GPU Acceleration](/docs/performance/gpu)
- [Memory Optimization](/docs/performance/memory)
- [Quantization](/docs/performance/quantization)

---

## Architecture & Design

- [Architecture Overview](/docs/architecture/overview)
- [Tensor Implementation](/docs/architecture/tensor)
- [Autograd System](/docs/architecture/autograd)
- [Memory Management](/docs/architecture/memory)
- [Design Patterns](/docs/architecture/patterns)

---

## Troubleshooting & FAQ

- [Troubleshooting Guide](/docs/troubleshooting)
- [FAQ](/docs/faq)
- [Common Errors](/docs/common-errors)
- [Performance Issues](/docs/performance/troubleshooting)

---

## Contributing

- [Contributing Guide](/docs/contributing)
- [Development Setup](/docs/development/setup)
- [Code Style](/docs/development/style-guide)
- [Testing](/docs/development/testing)
- [Building from Source](/docs/development/build)

---

## Release Notes

- **[SDK v0.2](/docs/release-notes-v0.2)** ⭐ Latest - Advanced Tensor Ops, Vision Transforms, NLP Tokenizers
- [SDK v0.1](/docs/release-notes-v0.1) - Initial release
- [Migration Guide](/docs/migration/from-v0.1) - Upgrading to v0.2

---

## Community & Support

- [GitHub Repository](https://github.com/bhangun/gollek)
- [GitHub Discussions](https://github.com/bhangun/gollek/discussions)
- [Issue Tracker](https://github.com/bhangun/gollek/issues)
- [Email](mailto:support@gollek.io)

---

## Quick Navigation

### By Use Case

**Training a neural network?**  
→ [Framework Overview](/docs/framework/framework) → [Training Loop](/docs/framework/training) → [MNIST Example](/docs/examples/mnist-cnn)

**Using from CLI?**  
→ [CLI Installation](/docs/setup/cli-installation) → [CLI Reference](/docs/setup/cli-reference)

**Migrating from PyTorch?**  
→ [Migration Guide](/docs/migration/from-pytorch) → [API Mapping](/docs/migration/api-mapping)

**Looking for examples?**  
→ [All Examples](/docs/examples) or [JBang Scripts](/docs/setup/jbang-examples)

**Need API reference?**  
→ [Core Classes](/docs/api/tensor) → [NN Modules](/docs/api/nn-modules) → [Operations](/docs/api/operations)

---

<div style="text-align: center; margin-top: 3rem; padding: 2rem; background: var(--subtle-bg); border-radius: 12px;">
  <h3>Ready to Build?</h3>
  <p>Start with the <strong><a href="/docs/setup/sdk-installation">Quick Start Guide</a></strong> or dive into <strong><a href="/docs/examples">Examples</a></strong></p>
  <p style="font-size: 0.9rem; margin-top: 1rem;">
    <a href="https://github.com/bhangun/gollek">⭐ Star on GitHub</a> • 
    <a href="https://github.com/bhangun/gollek/discussions">💬 Join Discussions</a> •
    <a href="mailto:support@gollek.io">📧 Email Support</a>
  </p>
</div>
