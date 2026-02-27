---
layout: default
title: Getting Started with Gollek SDK
---

# Getting Started with Gollek SDK

Get up and running with Gollek SDK in minutes. This guide covers installation, configuration, and your first inference call.

---

## Prerequisites

Before you begin, ensure you have:

- **Java 21 or higher** - Gollek SDK requires Java 21+
- **Maven 3.8+** - For dependency management
- **GraalVM** (optional) - For native image compilation

---

## Installation

### Maven Dependency

Add the Gollek SDK dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-sdk-java-local</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

### Gradle Dependency

For Gradle projects:

```groovy
implementation 'tech.kayys.gollek:gollek-sdk-java-local:1.0.0-SNAPSHOT'
```

### Optional Provider Dependencies

Gollek SDK uses a modular architecture. Add only the providers you need:

```xml
<!-- Ollama Cloud Provider -->
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-ext-cloud-ollama</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>

<!-- Google Gemini Provider -->
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-ext-cloud-gemini</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>

<!-- Cerebras Provider -->
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-ext-cloud-cerebras</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

---

## Quick Start

### 1. Create SDK Instance

```java
import tech.kayys.gollek.sdk.local.GollekLocalClient;
import tech.kayys.gollek.sdk.local.GollekLocalClientAdapter;
import tech.kayys.gollek.sdk.factory.GollekSdkFactory;

// Create the SDK client
GollekLocalClient client = new GollekLocalClientAdapter(
    GollekSdkFactory.createLocalSdk()
);
```

### 2. Build an Inference Request

```java
import tech.kayys.gollek.spi.inference.InferenceRequest;

InferenceRequest request = InferenceRequest.builder()
    .model("llama-3.2-3b-instruct")
    .prompt("Explain quantum computing in simple terms")
    .maxTokens(500)
    .temperature(0.7)
    .build();
```

### 3. Execute Inference

```java
import tech.kayys.gollek.spi.inference.InferenceResponse;

// Synchronous inference
InferenceResponse response = client.createCompletion(request);
System.out.println(response.getContent());
```

---

## Core Concepts

### GollekLocalClient

The `GollekLocalClient` interface is the main entry point for all SDK operations. It provides:

- **Completion API** - Standard request/response inference
- **Streaming API** - Real-time token streaming
- **Async Jobs** - Background job processing
- **Batch Inference** - Multiple requests in one call
- **Model Management** - Pull, list, and delete models
- **Provider Discovery** - List and query available providers

### InferenceRequest

The `InferenceRequest` object defines all parameters for an inference call:

| Field | Type | Description |
|-------|------|-------------|
| model | String | Model identifier or name |
| prompt | String | Input prompt/text |
| messages | List | Conversation history (for chat models) |
| maxTokens | int | Maximum tokens to generate |
| temperature | double | Sampling temperature (0.0-2.0) |
| topP | double | Nucleus sampling parameter |
| stopSequences | List | Stop sequences for generation |
| preferredProvider | Optional | Preferred inference provider |
| metadata | Map | Additional provider-specific options |

### InferenceResponse

The `InferenceResponse` contains the inference result:

| Field | Type | Description |
|-------|------|-------------|
| requestId | String | Unique request identifier |
| content | String | Generated text content |
| model | String | Model that generated the response |
| usage | UsageInfo | Token usage statistics |
| finishReason | String | Reason for completion |
| metadata | Map | Additional response metadata |

---

## CDI Integration

For Jakarta EE applications, Gollek SDK integrates seamlessly with CDI:

```java
import jakarta.inject.Inject;
import jakarta.enterprise.context.ApplicationScoped;
import tech.kayys.gollek.sdk.local.GollekLocalClient;

@ApplicationScoped
public class MyService {
    
    @Inject
    GollekLocalClient client;
    
    public String generateResponse(String prompt) {
        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt(prompt)
            .build();
        
        return client.createCompletion(request).getContent();
    }
}
```

---

## Configuration

### API Keys

Configure API keys for cloud providers via environment variables:

```bash
export OPENAI_API_KEY=sk-...
export ANTHROPIC_API_KEY=sk-ant-...
export GOOGLE_API_KEY=...
export OLLAMA_API_KEY=...
```

### Model Repository

Gollek SDK uses a local model repository for caching and persistence. Configure the location:

```bash
export GOLLEK_MODEL_REPO_PATH=/path/to/models
```

### Provider Selection

Set a default provider or specify per-request:

```java
// Set global default
client.setPreferredProvider("ollama");

// Or specify per request
InferenceRequest request = InferenceRequest.builder()
    .model("llama-3.2-3b-instruct")
    .prompt("Hello")
    .preferredProvider("openai")
    .build();
```

---

## Next Steps

- [Core API Reference](/docs/core-api) - Detailed API documentation
- [Native FFI](/docs/native-ffi) - GraalVM native integration
- [Architecture](/docs/architecture) - System architecture overview
- [Examples](/docs/examples) - Code examples and patterns

---

## Troubleshooting

### Common Issues

**ClassNotFoundException**
- Ensure all required dependencies are on the classpath
- Check that provider modules are included

**Model Not Found**
- Verify the model exists in your local repository
- Check model identifier syntax

**Provider Unavailable**
- Ensure the provider module is included
- Verify API keys are configured correctly
- Check network connectivity for cloud providers

---

[Back to Home](/) &nbsp; [View API Reference](/docs/core-api)
