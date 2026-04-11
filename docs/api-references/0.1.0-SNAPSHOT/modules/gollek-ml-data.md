---
layout: default
title: gollek-ml-data
parent: API REferences
nav_order: 140
---

# gollek-ml-data

The `gollek-ml-data` module provides abstractions for data ingestion, processing, and batching. It implements a familiar `Dataset` and `DataLoader` pattern for efficient multi-threaded data loading.

## 🌟 Overview

Training deep learning models requires efficient handling of potentially massive datasets. This module provides standard patterns for loading common formats (CSV, Text, Images) and abstractions for building custom data pipelines with on-the-fly transformations.

## 🚀 Key Features

- **Dataset Abstraction**: Unified interface for indexed and iterable datasets.
- **Multithreaded DataLoader**: High-performance batching with pre-fetching and shuffling support.
- **Predefined Datasets**:
    - `ImageDataset`: Loading images from directories with support for vision transforms.
    - `TextDataset`: Stream-based loading of raw text files.
    - `TokenizedDataset`: Integrates with NLP tokenizers for ready-to-train sequence data.
    - `CsvDataset`: Fast parsing of tabular data.
- **Support for Large Data**: `StreamingDataset` allows processing of datasets that exceed system RAM.
- **Integrated Transforms**: Native support for applying vision or audio transforms during the loading process.

## 📦 Installation

Add the following dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-ml-data</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
```

## 🛠️ Usage Examples

### Loading an Image Dataset

```java
import tech.kayys.gollek.ml.data.ImageDataset;
import tech.kayys.gollek.ml.data.DataLoader;
import tech.kayys.gollek.ml.vision.transforms.VisionTransforms;

// Create dataset with transformations
ImageDataset dataset = ImageDataset.fromDirectory(Path.of("data/train/"))
    .transform(new VisionTransforms.Compose(
        new VisionTransforms.Resize(224, 224),
        new VisionTransforms.ToTensor()
    ));

// Create DataLoader for batching
DataLoader loader = DataLoader.builder(dataset)
    .batchSize(32)
    .shuffle(true)
    .workers(4)
    .build();

// Use in training loop
for (DataLoader.Batch batch : loader) {
    Tensor images = batch.inputs();
    Tensor labels = batch.labels();
    // ... model.forward(images)
}
```

### Working with Tokenized Data

```java
import tech.kayys.gollek.ml.data.TokenizedDataset;

TokenizedDataset trainData = TokenizedDataset.builder()
    .source(Path.of("corpus.txt"))
    .tokenizer(myTokenizer)
    .maxSeqLength(512)
    .build();
```

## 📖 API Highlights

### `tech.kayys.gollek.ml.data.DataLoader`

The primary engine for data batching.

| Method | Description |
|:-------|:------------|
| `builder(Dataset d)` | Returns a builder for configuring batch size, workers, and shuffling. |
| `iterator()` | Returns an iterator that yields `Batch` objects. |
| `size()` | Returns the number of batches in the dataset. |

### Dataset Implementations

- **`ImageDataset`**: Loads `Image` files and applies `VisionTransforms`.
- **`CsvDataset`**: Maps CSV columns to input and target tensors.
- **`StreamingDataset`**: Interface for multi-GB datasets that are read lazily.

### `tech.kayys.gollek.ml.data.DataLoader.Batch`

Container for a single batch of data.

- `inputs()`: Returns the input tensor (e.g., shape `[BatchSize, Channels, H, W]`).
- `labels()`: Returns the target/label tensor.

---

[Back to API Hub](../)
