---
layout: default
title: Multimodal SDK
---

# Multimodal SDK

Process text, images, audio, and video with unified multimodal inference through the Gollek SDK.

---

## Overview

The Gollek Multimodal SDK provides a unified API for processing multiple input modalities and generating multimodal outputs. Built on top of the inference engine, it supports vision-language models, image generation, and more.

**Supported Modalities:**
- ✅ Text (input/output)
- ✅ Images (input/output)
- ✅ Audio (input)
- ✅ Video (input)
- ✅ Documents (input)
- ✅ Embeddings (input/output)

---

## Quick Start

### Installation

Add the SDK dependency to your project:

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-sdk-java-local</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

### Basic Usage

```java
import tech.kayys.gollek.sdk.local.GollekLocalClient;
import tech.kayys.gollek.sdk.local.GollekLocalClientAdapter;
import tech.kayys.gollek.multimodal.model.MultimodalRequest;
import tech.kayys.gollek.multimodal.model.MultimodalResponse;

// Create client
GollekLocalClient client = new GollekLocalClientAdapter(
    GollekSdkFactory.createLocalSdk()
);

// Vision QA example
byte[] imageBytes = Files.readAllBytes(Path.of("image.jpg"));

MultimodalResponse response = client.visionQA(
    "llava-13b-gguf",
    imageBytes,
    "What's in this image?"
);

System.out.println("Answer: " + response.getOutputs()[0].getText());
```

---

## Multimodal Inference

### Vision Question Answering

Ask questions about images using LLaVA or similar models:

```java
// Method 1: Convenience method
MultimodalResponse response = client.visionQA(
    "llava-13b-gguf",
    imageBytes,
    "What color is the car?"
);

// Method 2: Full request builder
MultimodalRequest request = MultimodalRequest.builder()
    .model("llava-13b-gguf")
    .inputs(
        MultimodalContent.ofText("What color is the car?"),
        MultimodalContent.ofBase64Image(imageBytes, "image/jpeg")
    )
    .outputConfig(MultimodalRequest.OutputConfig.builder()
        .maxTokens(256)
        .temperature(0.7)
        .build())
    .build();

MultimodalResponse response = client.multimodalInference(request);
System.out.println("Answer: " + response.getOutputs()[0].getText());
```

### Image Captioning

Generate descriptions for images:

```java
MultimodalResponse caption = client.imageCaptioning(
    "blip-large",
    imageBytes
);

System.out.println("Caption: " + caption.getOutputs()[0].getText());
```

### Image Embedding

Generate embeddings for images (e.g., CLIP):

```java
float[] embedding = client.imageEmbedding(
    "clip-vit-large",
    imageBytes
);

// Use for similarity search
float similarity = cosineSimilarity(embedding, otherEmbedding);
```

### Document Analysis

Analyze PDFs and documents:

```java
byte[] pdfBytes = Files.readAllBytes(Path.of("document.pdf"));

MultimodalRequest request = MultimodalRequest.builder()
    .model("claude-3-opus")
    .inputs(
        MultimodalContent.ofText("Summarize this document"),
        MultimodalContent.ofDocument(pdfBytes, "pdf", "application/pdf")
    )
    .build();

MultimodalResponse response = client.multimodalInference(request);
System.out.println("Summary: " + response.getOutputs()[0].getText());
```

### Image Generation

Generate images from text (Stable Diffusion):

```java
MultimodalRequest request = MultimodalRequest.builder()
    .model("stable-diffusion-v2")
    .inputs(MultimodalContent.ofText("A cat sitting on a couch"))
    .outputConfig(MultimodalRequest.OutputConfig.builder()
        .outputModalities(ModalityType.IMAGE)
        .build())
    .build();

MultimodalResponse response = client.multimodalInference(request);
byte[] generatedImage = response.getOutputs()[0].getRawBytes();

// Save generated image
Files.write(Path.of("generated.png"), generatedImage);
```

---

## Builder API

### MultimodalRequestBuilder

Use the builder for fluent request construction:

```java
import static tech.kayys.gollek.sdk.multimodal.MultimodalRequestBuilder.*;

MultimodalRequest request = builder()
    .model("llava-13b-gguf")
    .addText("Describe this image in detail")
    .addImage(imageBytes, "image/jpeg")
    .maxTokens(512)
    .temperature(0.7)
    .topP(0.9)
    .build();
```

### Builder Methods

| Method | Description |
|--------|-------------|
| `model(String)` | Set model name |
| `addText(String)` | Add text input |
| `addImage(byte[], String)` | Add image from bytes |
| `addImageBase64(String, String)` | Add image from base64 |
| `addImageUri(String, String)` | Add image from URI |
| `addDocument(byte[], String, String)` | Add document |
| `maxTokens(int)` | Set max output tokens |
| `temperature(double)` | Set temperature (0-2) |
| `topP(double)` | Set top P (0-1) |
| `stream(boolean)` | Enable streaming |
| `outputModalities(ModalityType...)` | Set output types |

---

## Supported Models

### Vision-Language Models

| Model | Format | Use Case | Provider |
|-------|--------|----------|----------|
| LLaVA-13B | GGUF | Visual QA | GGUF |
| LLaVA-1.6 | GGUF | Multi-image QA | GGUF |
| BakLLaVA | GGUF | Visual reasoning | GGUF |

### Image Understanding

| Model | Format | Use Case | Provider |
|-------|--------|----------|----------|
| CLIP ViT | ONNX | Image embedding | ONNX |
| BLIP | ONNX | Image captioning | ONNX |
| ViT | ONNX | Image classification | ONNX |
| TrOCR | ONNX | OCR | ONNX |

### Image Generation

| Model | Format | Use Case | Provider |
|-------|--------|----------|----------|
| Stable Diffusion v2 | LibTorch | Text-to-image | LibTorch |
| DALL-E Mini | LibTorch | Text-to-image | LibTorch |

---

## Configuration

### Basic Configuration

```properties
# Enable multimodal
gollek.multimodal.enabled=true

# Default model
gollek.multimodal.default-model=llava-13b-gguf

# Timeout settings
gollek.multimodal.timeout-ms=30000

# Max concurrent requests
gollek.multimodal.max-concurrent=10
```

### Provider Configuration

```properties
# GGUF/LLaVA
gollek.multimodal.gguf.enabled=true
gollek.multimodal.gguf.model-path=/path/to/llava-13b.gguf
gollek.multimodal.gguf.vision-projector=/path/to/projector.gguf

# ONNX
gollek.multimodal.onnx.enabled=true
gollek.multimodal.onnx.execution-provider=cuda
gollek.multimodal.onnx.model-dir=/path/to/onnx-models

# LibTorch
gollek.multimodal.torch.enabled=true
gollek.multimodal.torch.device=cuda
gollek.multimodal.torch.model-dir=/path/to/torch-models
```

---

## Streaming

Stream multimodal responses:

```java
MultimodalRequest request = MultimodalRequest.builder()
    .model("llava-13b-gguf")
    .inputs(
        MultimodalContent.ofText("Describe this image"),
        MultimodalContent.ofBase64Image(imageBytes, "image/jpeg")
    )
    .outputConfig(MultimodalRequest.OutputConfig.builder()
        .stream(true)
        .build())
    .build();

client.multimodalInferenceStream(request)
    .subscribe().with(
        response -> System.out.print(response.getOutputs()[0].getText()),
        error -> error.printStackTrace(),
        () -> System.out.println("\nDone!")
    );
```

---

## Error Handling

```java
try {
    MultimodalResponse response = client.multimodalInference(request);
} catch (SdkException e) {
    if (e instanceof MultimodalException) {
        // Handle multimodal-specific errors
        System.err.println("Multimodal error: " + e.getMessage());
    } else if (e instanceof ModelNotFoundException) {
        // Handle missing model
        System.err.println("Model not found: " + e.getMessage());
    } else {
        // Handle other SDK errors
        System.err.println("SDK error: " + e.getMessage());
    }
}
```

---

## Performance Tips

### Image Optimization

```java
// Resize large images before sending
BufferedImage resized = resizeImage(originalImage, 512, 512);
ByteArrayOutputStream baos = new ByteArrayOutputStream();
ImageIO.write(resized, "jpg", baos);
byte[] optimizedBytes = baos.toByteArray();
```

### Batch Processing

```java
// Process multiple images in batch
List<MultimodalRequest> requests = images.stream()
    .map(img -> MultimodalRequest.builder()
        .model("clip-vit")
        .inputs(MultimodalContent.ofBase64Image(img, "image/jpeg"))
        .build())
    .collect(Collectors.toList());

List<MultimodalResponse> responses = requests.stream()
    .map(client::multimodalInference)
    .collect(Collectors.toList());
```

### Caching

```java
// Cache embeddings for reuse
Map<String, float[]> embeddingCache = new ConcurrentHashMap<>();

float[] getEmbedding(String imageId, byte[] imageBytes) {
    return embeddingCache.computeIfAbsent(imageId, id -> 
        client.imageEmbedding("clip-vit", imageBytes)
    );
}
```

---

## Examples

### Example 1: Visual Assistant

```java
public class VisualAssistant {
    
    @Inject
    GollekLocalClient client;
    
    public String describeImage(byte[] imageBytes) {
        return client.visionQA(
            "llava-13b-gguf",
            imageBytes,
            "Describe this image in detail"
        ).getOutputs()[0].getText();
    }
    
    public String answerQuestion(byte[] imageBytes, String question) {
        return client.visionQA(
            "llava-13b-gguf",
            imageBytes,
            question
        ).getOutputs()[0].getText();
    }
}
```

### Example 2: Image Search

```java
public class ImageSearch {
    
    @Inject
    GollekLocalClient client;
    
    private Map<String, float[]> index = new ConcurrentHashMap<>();
    
    public void indexImage(String imageId, byte[] imageBytes) {
        float[] embedding = client.imageEmbedding("clip-vit", imageBytes);
        index.put(imageId, embedding);
    }
    
    public List<String> search(byte[] queryImage, int topK) {
        float[] queryEmbedding = client.imageEmbedding("clip-vit", queryImage);
        
        return index.entrySet().stream()
            .sorted(Comparator.comparingDouble(e -> 
                -cosineSimilarity(queryEmbedding, e.getValue())
            ))
            .limit(topK)
            .map(Map.Entry::getKey)
            .collect(Collectors.toList());
    }
}
```

### Example 3: Document Q&A

```java
public class DocumentQA {
    
    @Inject
    GollekLocalClient client;
    
    public String answerQuestion(Path documentPath, String question) {
        byte[] docBytes = Files.readAllBytes(documentPath);
        
        MultimodalRequest request = MultimodalRequest.builder()
            .model("claude-3-opus")
            .inputs(
                MultimodalContent.ofText(question),
                MultimodalContent.ofDocument(docBytes, "pdf", "application/pdf")
            )
            .build();
        
        return client.multimodalInference(request)
            .getOutputs()[0].getText();
    }
}
```

---

## Troubleshooting

### Common Issues

#### "Model not found"

**Solution**: Ensure the model file exists and path is correct:
```properties
gollek.multimodal.gguf.model-path=/absolute/path/to/model.gguf
```

#### "Out of memory"

**Solutions**:
1. Resize images before processing
2. Reduce batch size
3. Use streaming for large outputs

#### "Slow inference"

**Solutions**:
1. Enable GPU acceleration
2. Use smaller models
3. Implement caching

---

## Resources

- [Multimodal Integration Guide](/docs/multimodal-integration)
- [API Reference](/docs/api/multimodal)
- [Model Catalog](/docs/models/multimodal)
- [GitHub Examples](https://github.com/gollek-ai/gollek/tree/main/examples/multimodal)

---

[Back to SDK Documentation](/docs/sdk) &nbsp; [View Inference Engine](/docs/inference-engine)
