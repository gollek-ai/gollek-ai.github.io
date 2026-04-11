---
layout: default
title: gollek-ml-train
parent: API REferences
nav_order: 50
---

# gollek-ml-train

The `gollek-ml-train` module provides high-level orchestration for training deep learning models. It features a complete training pipeline with support for callbacks, learning rate scheduling, mixed precision, and performance monitoring.

## 🌟 Overview

Training a model from scratch involves managing complex loops, hardware synchronization, and periodic logging. The `Trainer` class in this module encapsulates these best practices into a single, highly-configurable engine, allowing developers to focus on model design rather than loop orchestration.

## 🚀 Key Features

- **Standardized Training Loop**: Unified `fit()` method for training and validation.
- **Callback System**: Pluggable architecture for logging, checkpointing, and early stopping.
- **Learning Rate Schedulers**: Integrated support for StepLR and Cosine Annealing.
- **Mixed Precision (AMP)**: Automated scaling for FP16 training on supported hardware through `GradScaler`.
- **Gradient Management**: Built-in support for global norm gradient clipping.
- **Console Monitoring**: Real-time progress updates and metrics logging.

## 📦 Installation

Add the following dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-ml-train</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
```

## 🛠️ Usage Examples

### Orchestrating a Training Run

```java
import tech.kayys.gollek.ml.train.Trainer;
import tech.kayys.gollek.ml.train.ModelCheckpoint;
import tech.kayys.gollek.ml.train.ConsoleLogger;
import tech.kayys.gollek.ml.train.EarlyStopping;

Trainer trainer = Trainer.builder()
    .model(inputs -> myModel.forward(inputs))
    .optimizer(myOptimizer)
    .loss((preds, targets) -> myLoss.compute(preds, targets))
    .epochs(50)
    .gradientClip(1.0)
    .mixedPrecision(true) // Enable AMP
    .callbacks(List.of(
        ConsoleLogger.create(),
        ModelCheckpoint.at(Path.of("checkpoints/")),
        EarlyStopping.patience(5)
    ))
    .build();

// Start training
trainer.fit(trainLoader, valLoader);
```

### Implementing a Custom Callback

```java
import tech.kayys.gollek.ml.train.Callback;

public class MyCustomMonitor implements Callback {
    @Override
    public void onEpochEnd(Trainer trainer, int epoch, double trainLoss) {
        System.out.println("Epoch " + epoch + " finished with loss: " + trainLoss);
        // Send alert or update custom dashboard
    }
}
```

## 📖 API Highlights

### `tech.kayys.gollek.ml.train.Trainer`

The main pipeline orchestrator.

| Method | Description |
|:-------|:------------|
| `fit(DataLoader train, DataLoader val)` | Starts the full training and validation lifecycle. |
| `stop()` | Gracefully stops the training loop (e.g., via interrupt). |
| `getMetrics()` | Returns `TrainingMetrics` containing loss and accuracy history. |
| `getGradScaler()` | Returns the active `GradScaler` for mixed precision inspection. |

### `tech.kayys.gollek.ml.train.Callback`

The interface for extending the trainer's behavior.

- `onTrainingStart(Trainer trainer)`
- `onEpochStart(Trainer trainer, int epoch)`
- `onEpochEnd(Trainer trainer, int epoch, double trainLoss)`
- `onBatchEnd(Trainer trainer, int step, double loss)`
- `onEarlyStopping(Trainer trainer, int epoch)`

---

[Back to API Hub](../)
