---
layout: default
title: JBang Examples Catalog
---

<section class="hero hero-compact">
  <p class="eyebrow">Interactive Examples</p>
  <h1>Gollek SDK JBang Examples Catalog</h1>
  <p class="lead">23+ ready-to-run Java scripts demonstrating everything from basic tensor operations to advanced neural networks and ML library integrations. No build tools required—just run with jbang.</p>
</section>

<section class="quick-grid">
  <a class="quick-card" href="#beginner">
    <h3>🟢 Beginner</h3>
    <p>Hello World, templates, and basic model creation.</p>
  </a>
  <a class="quick-card" href="#neural-networks">
    <h3>🔵 Neural Networks</h3>
    <p>MLP, custom modules, training loops, and persistence.</p>
  </a>
  <a class="quick-card" href="#nlp">
    <h3>🟣 NLP & Text</h3>
    <p>Sentiment analysis, transformers, and chatbots.</p>
  </a>
  <a class="quick-card" href="#machine-learning">
    <h3>🟠 ML Integrations</h3>
    <p>Deeplearning4j, Stanford NLP, Smile, Tribuo.</p>
  </a>
</section>

---

## 🚀 Quick Start

### Prerequisites

```bash
# Java 21+ required
java --version

# Install jbang (if not already installed)
curl -Ls https://sh.jbang.dev | bash -s -
```

### Running Examples

All examples can be run directly from GitHub:

```bash
# Basic syntax
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/<path>/<example>.java

# Example: Hello Gollek
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/hello_gollek.java
```

### First-Time Setup

```bash
# Clone repository (optional, for local editing)
git clone https://github.com/bhangun/gollek.git
cd gollek/gollek/sdk/integration/jbang-templates

# Build SDK locally (required for first run)
cd ../../../../ && mvn clean install -DskipTests
```

---

## 🟢 Beginner Examples {#beginner}

Fundamental concepts and getting started patterns.

### Hello Gollek
**File**: `common/hello_gollek.java`

The simplest possible introduction to the SDK.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/hello_gollek.java
```

**Key Concepts**:
- Model creation
- Forward pass
- Tensor output

**What You'll Learn**: Basic SDK initialization and inference.

---

### My Script (Template)
**File**: `common/my_script.java`

A clean template for starting your own Gollek experiments.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/my_script.java
```

**Key Concepts**:
- Project structure
- Dependency management
- Basic imports

**What You'll Learn**: How to structure your own jbang scripts.

---

### Error Handling
**File**: `common/error_handling.java`

Best practices for catching and managing SDK-specific exceptions.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/error_handling.java
```

**Key Concepts**:
- Try-catch patterns
- Exception types
- Graceful degradation

**What You'll Learn**: Production-ready error handling.

---

## 🔵 Neural Networks {#neural-networks}

Build and train neural networks from scratch.

### Neural Network with Gollek
**File**: `neural_network/neural_network_with_gollek.java`

Complete introduction to building neural networks.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/neural_network/neural_network_with_gollek.java
```

**Key Concepts**:
- Sequential models
- Layer composition
- Activation functions

**What You'll Learn**: Core neural network building blocks.

---

### XOR Training (End-to-End)
**File**: `common/xor_training.java`

A complete script that trains a 2-layer MLP to solve the non-linear XOR problem.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/xor_training.java
```

**Key Concepts**:
- Non-linear classification
- BCEWithLogitsLoss
- SGD optimizer
- Training loop
- Backward pass

**What You'll Learn**: Complete training workflow from data to predictions.

---

### MNIST-Style Setup
**File**: `common/mnist_style_setup.java`

Simulates a digit classification network (28x28 inputs).

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/mnist_style_setup.java
```

**Key Concepts**:
- Deep linear layers
- Parameter counting
- `train()` vs `eval()` modes
- Input flattening

**What You'll Learn**: Setting up image classification architectures.

---

### Custom Module Demo
**File**: `common/custom_module_demo.java`

Shows how to extend the `Module` base class to create complex, reusable components like Residual Blocks.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/custom_module_demo.java
```

**Key Concepts**:
- Class inheritance
- Parameter registration
- Skip connections
- Custom architectures

**What You'll Learn**: Building reusable neural network components.

---

### Model Persistence
**File**: `common/model_persistence.java`

Learn how to save and load model weights to/from disk.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/model_persistence.java
```

**Key Concepts**:
- `model.save(path)`
- `model.load(path)`
- Checkpoint management

**What You'll Learn**: Saving and restoring trained models.

---

### Model Persistence (Safetensors)
**File**: `common/model_persistence_safetensor.java`

Advanced model persistence using the Safetensors format.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/model_persistence_safetensor.java
```

**Key Concepts**:
- Safetensors format
- Safe model serialization
- Cross-framework compatibility

**What You'll Learn**: Modern, safe model persistence.

---

### Batch Processing
**File**: `common/batch_process.java`

Demonstrates how to process multiple data files in a loop.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/batch_process.java
```

**Key Concepts**:
- Batch inference
- File I/O
- Loop processing

**What You'll Learn**: Efficient batch processing patterns.

---

### Train via CLI
**File**: `common/train_cli.java`

A script that accepts command-line arguments for epochs and learning rate.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/train_cli.java 20 0.05
```

**Key Concepts**:
- Command-line arguments
- Hyperparameter configuration
- Flexible training scripts

**What You'll Learn**: Building configurable training tools.

**Usage**:
```bash
jbang train_cli.java 50 0.001
```

---

### Train Model (Complete Example)
**File**: `common/train_model.java`

Full training example with loss tracking and metrics.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/common/train_model.java
```

**Key Concepts**:
- Complete training loop
- Loss monitoring
- Progress reporting

**What You'll Learn**: Professional training workflows.

---

## 🟣 NLP & Text Processing {#nlp}

Natural language processing with transformers and sentiment analysis.

### NLP Sentiment Analysis
**File**: `nlp_sentiment_analysis.java`

Trains a native classifier on real movie reviews using the Gollek SDK.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/nlp_sentiment_analysis.java
```

**Key Concepts**:
- Bag-of-Words features
- Text tokenization
- Binary classification
- Real dataset (100 reviews)

**What You'll Learn**: End-to-end text classification.

**Dataset**: 50 positive + 50 negative movie reviews with TF normalization.

---

### NLP Transformer Classifier
**File**: `nlp_transformer_classifier.java`

A sophisticated sequence model using Transformer architecture.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/nlp_transformer_classifier.java
```

**Key Concepts**:
- Embedding layers
- Positional encoding
- Multi-head attention
- Global pooling
- Safetensor persistence

**What You'll Learn**: Building transformer-based models.

**Workflow**: Tokenization → Training → Persistence → Inference

---

### NLP Chat with Qwen GGUF
**File**: `nlp_chat_qwen_gguf.java`

Interactive chatbot using Qwen model in GGUF format.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/nlp_chat_qwen_gguf.java
```

**Key Concepts**:
- GGUF model loading
- Chat interface
- Streaming responses
- Conversation history

**What You'll Learn**: Building conversational AI applications.

---

## 🟠 Machine Learning Integrations {#machine-learning}

Integration with popular Java ML libraries.

### Computer Vision MLP Classifier
**File**: `machine_learning/cv_mlp_classifier_export.java`

Image classification with model export capabilities.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/machine_learning/cv_mlp_classifier_export.java
```

**Key Concepts**:
- Image preprocessing
- MLP for vision
- Model export
- Classification metrics

**What You'll Learn**: Computer vision with Gollek.

---

## 🔗 External Library Integrations

Advanced integrations with external ML/NLP libraries. All integration examples are located in the `integration/` subdirectory.

### Deeplearning4j Integration
**File**: `integration/deeplearning4j_integration.java`

Integrates Gollek SDK with Deeplearning4j for hybrid workflows.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/integration/deeplearning4j_integration.java
```

**Patterns Demonstrated**:
1. DL4J preprocessing → Gollek inference
2. DL4J feature extraction → Gollek classification
3. Ensemble (DL4J + Gollek)
4. Bidirectional tensor conversion (INDArray ↔ GradTensor)

**Key Classes**:
- `DL4JPreprocessorGollekInference`
- `DL4JFeatureExtractorGollekClassifier`
- `EnsembleDL4JGollek`

**What You'll Learn**: Leveraging DL4J's ecosystem with Gollek inference.

---

### Stanford NLP Integration
**File**: `integration/stanford_nlp_integration.java`

Integrates Gollek SDK with Stanford CoreNLP for advanced NLP.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/integration/stanford_nlp_integration.java
```

**Patterns Demonstrated**:
1. Linguistic feature extraction (POS, NER, sentiment)
2. Text classification with linguistic features
3. Hybrid sentiment analysis (Stanford + Gollek)
4. Multi-stage NLP pipeline

**Features Extracted**:
- Sentence length, avg word length
- POS tag distribution (12 tags)
- Named entity counts (7 categories)
- Stanford sentiment score
- Parse tree depth

**What You'll Learn**: Rich linguistic feature engineering.

---

### Apache OpenNLP Integration
**File**: `integration/opennlp_integration.java`

Integrates Gollek SDK with Apache OpenNLP for text processing.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/integration/opennlp_integration.java
```

**Patterns Demonstrated**:
1. Sentence detection → tokenization → POS tagging
2. Named entity recognition
3. Text classification with OpenNLP features
4. NER-based document categorization

**Features Extracted**:
- Sentence/token counts
- POS ratios (noun, verb, adjective, adverb)
- Named entity distribution
- Vocabulary richness

**What You'll Learn**: Production-ready NLP pipelines.

**Note**: Downloads OpenNLP models on first run (cached in temp directory).

---

### Smile ML Integration
**File**: `integration/smile_ml_integration.java`

Integrates Gollek SDK with Smile (Statistical Machine Intelligence & Learning Engine).

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/integration/smile_ml_integration.java
```

**Patterns Demonstrated**:
1. Smile preprocessing → Gollek inference
2. Smile feature selection → Gollek classification
3. Ensemble (Smile Random Forest + Gollek NN)
4. Statistical feature extraction

**Statistical Features**:
- Mean, variance, standard deviation
- Min, max, skewness, kurtosis

**What You'll Learn**: Combining traditional ML with neural networks.

---

### Oracle Tribuo Integration
**File**: `integration/tribuo_integration.java`

Integrates Gollek SDK with Oracle's Tribuo ML library.

```bash
jbang https://raw.githubusercontent.com/bhangun/gollek/main/gollek/sdk/integration/jbang-templates/examples/integration/tribuo_integration.java
```

**Patterns Demonstrated**:
1. Tribuo feature pipeline → Gollek classification
2. Ensemble (Tribuo XGBoost + Gollek NN)
3. Tribuo text classification → Gollek
4. Tribuo regression + Gollek refinement

**What You'll Learn**: Enterprise ML integration patterns.

---

## 📊 Example Categories Summary

| Category | Files | Difficulty | Topics |
|----------|-------|------------|--------|
| **Beginner** | 3 | 🟢 Easy | Hello World, Templates, Error Handling |
| **Neural Networks** | 8 | 🟡 Medium | MLP, Training, Persistence, Custom Modules |
| **NLP & Text** | 3 | 🟠 Advanced | Sentiment, Transformers, Chatbots |
| **ML Integrations** | 6 | 🔴 Expert | DL4J, Stanford NLP, OpenNLP, Smile, Tribuo |

---

## 🛠 Troubleshooting

### Common Issues

**Problem: Dependencies not found**
```bash
# Solution: Build SDK locally first
cd gollek && mvn clean install -DskipTests
```

**Problem: Out of memory**
```bash
# Solution: Increase heap size
JAVA_OPTS="-Xmx4g" jbang example.java
```

**Problem: First run is slow**
- Normal behavior—jbang downloads and caches dependencies
- Subsequent runs are fast (1-2 seconds)

**Problem: Class not found**
```bash
# Solution: Clear jbang cache
rm -rf ~/.jbang/cache
jbang example.java
```

### Getting Help

- [JBang Setup Guide](https://github.com/bhangun/gollek/blob/main/gollek/sdk/integration/jbang-templates/JBANG_SETUP.md)
- [Jupyter Integration](/docs/jupyter-jbang-integration)
- [ML SDK Documentation](/docs/ml-sdk)
- [Troubleshooting Guide](/docs/troubleshooting)

---

## 📚 Additional Resources

### Documentation
- [JBang & Jupyter Tutorial](/docs/jupyter-jbang-integration)
- [ML SDK API Reference](/docs/ml-sdk)
- [Core Concepts](/docs/core-concepts)
- [Examples Overview](/docs/examples)

### External Links
- [jbang Documentation](https://jbang.dev/documentation)
- [Deeplearning4j](https://deeplearning4j.konduit.ai/)
- [Stanford CoreNLP](https://stanfordnlp.github.io/CoreNLP/)
- [Apache OpenNLP](https://opennlp.apache.org/)
- [Smile ML](https://haifengl.github.io/)
- [Oracle Tribuo](https://tribuo.org/)

---

## 🎯 Learning Paths

### Path 1: Complete Beginner
1. Hello Gollek
2. My Script (Template)
3. Error Handling
4. Neural Network with Gollek

### Path 2: Neural Network Developer
1. XOR Training
2. MNIST-Style Setup
3. Custom Module Demo
4. Model Persistence
5. Train Model

### Path 3: NLP Specialist
1. NLP Sentiment Analysis
2. NLP Transformer Classifier
3. Stanford NLP Integration
4. OpenNLP Integration

### Path 4: ML Integration Expert
1. Deeplearning4j Integration
2. Smile ML Integration
3. Oracle Tribuo Integration
4. Computer Vision MLP

---

## 💡 Tips for Success

### Performance
- First execution is slow (dependency download + JIT compilation)
- Subsequent runs use cached dependencies (much faster)
- Use `-o output.jar` for repeated runs

### Development
- Start with templates and modify
- Use IDE with jbang integration for autocomplete
- Test changes incrementally

### Best Practices
- Always handle errors gracefully
- Save model checkpoints during training
- Use `eval()` mode for inference
- Batch process when possible

---

Ready to start? Pick an example above and run it with jbang!

[Back to Documentation](/docs/) · [ML SDK Guide](/docs/ml-sdk) · [Jupyter Tutorial](/docs/jupyter-jbang-integration)
