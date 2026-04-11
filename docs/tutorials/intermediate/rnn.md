---
layout: default
title: LSTMs & Sequences
parent: Intermediate Tutorials
grand_parent: Tutorials
nav_order: 2
---

# 🎵 LSTMs & Sequences

Handling time-series, audio, and text requires recurrent architectures. This tutorial covers the `gollek-ml-rnn` module.

## 1. Recurrent Layers

Gollek supports various recurrent units:
- `RNN`: Basic vanilla recurrence.
- `LSTM`: Long Short-Term Memory for long dependencies.
- `GRU`: Gated Recurrent Unit for efficient sequence modeling.

## 2. Sequence Prediction Example

Building a simple LSTM for many-to-one prediction:

```java
import tech.kayys.gollek.ml.nn.layer.LSTM;
import tech.kayys.gollek.ml.nn.layer.Linear;

// Input: (batch, seq_len, 32) -> Output: (batch, 64)
LSTM rnn = new LSTM(32, 64, 2); // 2 layers deep
Linear head = new Linear(64, 1);

Tensor x = Tensor.randn(8, 10, 32); // Batch of 8, 10 time steps
Tensor state = rnn.initHidden(8);

// Forward pass through stages
var output = rnn.forward(x, state);
Tensor finalHidden = output.getHidden(); // Last hidden state
Tensor prediction = head.forward(finalHidden);
```

## 3. NLP Preprocessing

For text data, use the `gollek-ml-nlp` transforms:

```java
import tech.kayys.gollek.ml.nlp.token.*;

Tokenizer tokenizer = new WordPieceTokenizer("bert-vocab.txt");
Tensor tokens = tokenizer.encode("Gollek is the future of AI.");
```

## 🎯 Next Steps

Learn how to feed your data efficiently in [Building Efficient Data Pipelines](../data-pipelines/).
