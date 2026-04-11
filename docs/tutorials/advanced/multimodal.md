---
layout: default
title: Multimodal AI Pipelines
parent: Advanced Tutorials
grand_parent: Tutorials
nav_order: 1
---

# 🤖 Multimodal AI Pipelines

Gollek excels at combining different data modalities into a single reasoning pipeline. This tutorial covers the `gollek-ml-multimodal` module.

## 1. Bridging Modalities

A multimodal model typically involves specialized encoders and a fusion head or a cross-attention layer.

```java
import tech.kayys.gollek.ml.multimodal.OmniModel;
import tech.kayys.gollek.ml.vision.Encoder;
import tech.kayys.gollek.ml.nlp.LanguageModel;

// Load pre-trained CLIP-style weights
OmniModel omni = OmniModel.load("wayang-omni-v1");

Tensor image = Tensor.load("input.jpg").to(omni.device());
Tensor query = omni.tokenizer().encode("What is in this image?");

// One-shot inference across vision and language
String result = omni.generate(image, query);
System.out.println("AI Response: " + result);
```

## 2. Shared Latent Spaces

Learn how to projecting text and image embeddings into a shared space:

```java
Tensor imgEmbed = omni.encodeImage(image);
Tensor txtEmbed = omni.encodeText(query);

// Compute cosine similarity
float similarity = imgEmbed.cosineSimilarity(txtEmbed);
```

## 3. Real-world Use Case: Omni-Assistant

Building an assistant that can process live audio streams and visual context in real-time using Gollek's stream processing agents.

---

[Back to Tutorials Overview](../)
