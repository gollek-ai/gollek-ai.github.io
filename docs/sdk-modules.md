---
layout: default
title: SDK Modules
---

# Gollek SDK Modules

Complete machine learning and deep learning SDK for Java with 18+ modules covering the entire ML/DL lifecycle.

---

## Overview

The Gollek SDK provides a comprehensive, production-ready infrastructure for building, training, and deploying AI models in Java.

### Key Features

- ✅ **18+ SDK Modules** - Complete coverage of ML/DL workflow
- ✅ **PyTorch-like API** - Intuitive, familiar interface
- ✅ **Mixed Precision Training** - FP16 support with GradScaler
- ✅ **Model Export** - ONNX, GGUF, LiteRT formats
- ✅ **Data Augmentation** - 8+ augmentation transforms
- ✅ **Performance Benchmarking** - Built-in benchmarking tools
- ✅ **Memory Management** - Tracking and optimization
- ✅ **Device Abstraction** - CPU, CUDA, MPS support

---

## Module Catalog

### Training & Optimization

| Module | Description | Status |
|--------|-------------|--------|
| **[gollek-sdk-train](#training-pipeline)** | PyTorch Lightning-like training pipeline | ✅ Complete |
| **[gollek-sdk-optimize](#optimizers)** | Complete optimizer suite (Adam, SGD, etc.) | ✅ Complete |
| **[gollek-sdk-augment](#data-augmentation)** | Data augmentation transforms | ✅ Complete |

### Computer Vision

| Module | Description | Status |
|--------|-------------|--------|
| **[gollek-sdk-vision](#computer-vision)** | Vision layers and pre-trained models | ✅ Complete |
| **[gollek-sdk-export](#model-export)** | Model export to ONNX/GGUF/LiteRT | ✅ Complete |

### Core Infrastructure

| Module | Description | Status |
|--------|-------------|--------|
| **[gollek-sdk-core](#core-tensor-api)** | Unified Tensor API with device placement | ✅ Complete |
| **[gollek-sdk-autograd](#autograd)** | Automatic differentiation engine | ✅ Complete |
| **[gollek-sdk-nn](#neural-networks)** | Neural network layers | ✅ Complete |

### Data & Models

| Module | Description | Status |
|--------|-------------|--------|
| **[gollek-sdk-data](#data-loading)** | Data loading and processing | ✅ Complete |
| **[gollek-sdk-hub](#model-hub)** | Model hub and registry | ✅ Complete |
| **[gollek-sdk-ml](#traditional-ml)** | Traditional ML algorithms | ✅ Complete |

### Specialized Domains

| Module | Description | Status |
|--------|-------------|--------|
| **[gollek-sdk-nlp](#nlp)** | Natural language processing | ✅ Complete |
| **[gollek-sdk-multimodal](#multimodal)** | Multimodal processing | ✅ Complete |
| **[gollek-sdk-litert](#litert)** | Google LiteRT integration | ✅ Complete |
| **[gollek-sdk-onnx](#onnx)** | ONNX runtime | ✅ Complete |
| **[gollek-langchain4j](#langchain)** | LangChain integration | ✅ Complete |

---

## Quick Start

### Installation

Add SDK modules to your Maven project:

```xml
<dependencies>
    <!-- Core SDK -->
    <dependency>
        <groupId>tech.kayys.gollek</groupId>
        <artifactId>gollek-sdk-core</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>

    <!-- Training pipeline -->
    <dependency>
        <groupId>tech.kayys.gollek</groupId>
        <artifactId>gollek-sdk-train</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>

    <!-- Computer vision -->
    <dependency>
        <groupId>tech.kayys.gollek</groupId>
        <artifactId>gollek-sdk-vision</artifactId>
        <version>0.1.0-SNAPSHOT</version>
    </dependency>
</dependencies>
```

### Complete Example

```java
import tech.kayys.gollek.sdk.core.*;
import tech.kayys.gollek.sdk.train.*;
import tech.kayys.gollek.sdk.optimize.*;
import tech.kayys.gollek.sdk.vision.models.ResNet;
import tech.kayys.gollek.sdk.export.*;

// 1. Create model
ResNet model = ResNet.resnet18(numClasses=10);

// 2. Create optimizer
Optimizer optimizer = AdamW.builder(model.parameters(), 0.001)
    .weightDecay(0.01)
    .build();

// 3. Create trainer
Trainer trainer = Trainer.builder()
    .model(inputs -> model.forward(inputs))
    .optimizer(optimizer)
    .loss(CrossEntropyLoss())
    .callbacks(List.of(
        EarlyStopping.patience(10),
        ModelCheckpoint.at(Path.of("checkpoints/")),
        ConsoleLogger.create()
    ))
    .epochs(100)
    .mixedPrecision(true)
    .build();

// 4. Train
trainer.fit(trainLoader, valLoader);

// 5. Export
ModelExporter exporter = ModelExporter.builder()
    .model(model)
    .inputShape(1, 3, 224, 224)
    .build();

exporter.toONNX("model.onnx");
exporter.toGGUF("model.gguf", Quantization.INT4);
```

---

## Module Details

### Training Pipeline

**Module**: `gollek-sdk-train`

Complete training infrastructure with PyTorch Lightning-like API.

**Features**:
- Trainer with callback system
- Early stopping
- Model checkpointing
- Learning rate schedulers
- Mixed precision training
- Gradient clipping
- Console logging

**Example**:
```java
Trainer trainer = Trainer.builder()
    .model(model)
    .optimizer(optimizer)
    .loss(CrossEntropyLoss())
    .callbacks(List.of(
        EarlyStopping.patience(10),
        ModelCheckpoint.at(Path.of("checkpoints/"))
    ))
    .mixedPrecision(true)
    .build();

trainer.fit(trainLoader, valLoader);
```

[View Full Documentation →](/docs/sdk/train)

---

### Optimizers

**Module**: `gollek-sdk-optimize`

Complete optimizer suite for neural network training.

**Available Optimizers**:
- **Adam** - Adaptive Moment Estimation
- **AdamW** - Adam with decoupled weight decay
- **SGD** - Stochastic Gradient Descent with momentum
- **RMSprop** - Root Mean Square Propagation

**Example**:
```java
Optimizer optimizer = AdamW.builder(parameters, 0.001)
    .betas(0.9, 0.999)
    .weightDecay(0.01)
    .build();
```

[View Full Documentation →](/docs/sdk/optimize)

---

### Computer Vision

**Module**: `gollek-sdk-vision`

Computer vision layers and pre-trained models.

**Layers**:
- Conv2d (with im2col algorithm)
- MaxPool2d
- BatchNorm2d
- Linear
- ReLU
- AdaptiveAvgPool2d

**Pre-trained Models**:
- ResNet-18
- ResNet-34
- ResNet-50

**Example**:
```java
ResNet model = ResNet.resnet18(1000);
GradTensor output = model.forward(input);
```

[View Full Documentation →](/docs/sdk/vision)

---

### Model Export

**Module**: `gollek-sdk-export`

Export trained models to various deployment formats.

**Supported Formats**:
- **ONNX** - Cross-platform inference
- **GGUF** - llama.cpp format (with INT4/INT8/NF4 quantization)
- **LiteRT** - Edge device deployment

**Example**:
```java
ModelExporter exporter = ModelExporter.builder()
    .model(model)
    .inputShape(1, 3, 224, 224)
    .build();

exporter.toONNX("model.onnx");
exporter.toGGUF("model.gguf", Quantization.INT4);
```

[View Full Documentation →](/docs/sdk/export)

---

### Core Tensor API

**Module**: `gollek-sdk-core`

Unified Tensor abstraction with PyTorch-like API.

**Features**:
- Device placement (CPU, CUDA, MPS)
- Operator overloading
- Memory management
- NoGrad context
- Sequential container

**Example**:
```java
Tensor x = Tensor.randn(2, 3, 224, 224).to(Device.CUDA);
Tensor y = x.relu().softmax();
```

[View Full Documentation →](/docs/sdk/core)

---

### Data Augmentation

**Module**: `gollek-sdk-augment`

Data augmentation transforms for training robust vision models.

**Available Transforms**:
- RandomHorizontalFlip
- RandomVerticalFlip
- RandomCrop
- ColorJitter
- RandomErasing
- RandomRotation
- RandomGrayscale
- GaussianBlur

**Example**:
```java
AugmentationPipeline pipeline = new AugmentationPipeline(
    Augmentation.RandomHorizontalFlip.create(),
    Augmentation.RandomCrop.of(224),
    Augmentation.ColorJitter.of(0.2, 0.2, 0.2)
);

GradTensor augmented = pipeline.apply(input);
```

[View Full Documentation →](/docs/sdk/augment)

---

## JBang Examples

Try all SDK features with JBang (no project setup required):

```bash
# Training pipeline example
jbang gollek-sdk-train-example.java

# Vision example
jbang gollek-sdk-vision-example.java --image cat.jpg

# Core Tensor API example
jbang gollek-sdk-core-example.java

# Export and benchmark example
jbang gollek-sdk-export-example.java

# Data augmentation example
jbang gollek-sdk-augment-example.java
```

[View All Examples →](/docs/examples)

---

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Application Layer                       │
├─────────────────────────────────────────────────────────────┤
│  gollek-sdk-train  │  gollek-sdk-export  │  gollek-sdk-*    │
├─────────────────────────────────────────────────────────────┤
│                    SDK Core Layer                            │
├─────────────────────────────────────────────────────────────┤
│  gollek-sdk-core  │  gollek-sdk-optimize  │  gollek-sdk-*   │
├─────────────────────────────────────────────────────────────┤
│                  Infrastructure Layer                        │
├─────────────────────────────────────────────────────────────┤
│  gollek-sdk-autograd  │  gollek-safetensor  │  gollek-*     │
└─────────────────────────────────────────────────────────────┘
```

---

## Getting Started

1. **Install Java 25+** - [Download Adoptium](https://adoptium.net/)
2. **Add SDK dependencies** - See installation section above
3. **Run JBang examples** - Try features without project setup
4. **Read documentation** - Detailed guides for each module
5. **Build your first model** - Follow the quick start guide

---

## Resources

- **[API Reference](/docs/api)** - Complete API documentation
- **[Tutorials](/docs/tutorials)** - Step-by-step guides
- **[Examples](/docs/examples)** - JBang examples
- **[GitHub](https://github.com/gollek-ai/gollek)** - Source code
- **[Issues](https://github.com/gollek-ai/gollek/issues)** - Bug reports

---

[Back to Home](/) &nbsp; [View Architecture](/docs/architecture) &nbsp; [Get Started](/docs/setup)
