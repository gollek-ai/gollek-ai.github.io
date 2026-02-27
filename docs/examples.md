---
layout: default
title: Code Examples
---

# Code Examples

Practical examples demonstrating common Gollek SDK usage patterns.

---

## Table of Contents

- [Basic Inference](#basic-inference)
- [Streaming Responses](#streaming-responses)
- [Async Jobs](#async-jobs)
- [Batch Processing](#batch-processing)
- [Provider Selection](#provider-selection)
- [Error Handling](#error-handling)
- [CDI Integration](#cdi-integration)
- [Native FFI](#native-ffi)

---

## Basic Inference

### Simple Completion

```java
import tech.kayys.gollek.sdk.local.GollekLocalClient;
import tech.kayys.gollek.sdk.local.GollekLocalClientAdapter;
import tech.kayys.gollek.sdk.factory.GollekSdkFactory;
import tech.kayys.gollek.spi.inference.InferenceRequest;
import tech.kayys.gollek.spi.inference.InferenceResponse;

public class SimpleCompletion {
    public static void main(String[] args) {
        // Create client
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        // Build request
        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("What is the capital of France?")
            .maxTokens(100)
            .temperature(0.7)
            .build();

        // Execute inference
        InferenceResponse response = client.createCompletion(request);
        
        System.out.println("Answer: " + response.getContent());
        System.out.println("Model: " + response.getModel());
        System.out.println("Tokens used: " + response.getUsage().getTotalTokens());
    }
}
```

### Chat Completion

```java
import tech.kayys.gollek.spi.inference.Message;
import java.util.List;

public class ChatCompletion {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        // Build conversation
        List<Message> messages = List.of(
            Message.builder()
                .role("system")
                .content("You are a helpful assistant.")
                .build(),
            Message.builder()
                .role("user")
                .content("What is Java?")
                .build()
        );

        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .messages(messages)
            .maxTokens(200)
            .build();

        InferenceResponse response = client.createCompletion(request);
        System.out.println(response.getContent());
    }
}
```

---

## Streaming Responses

### Basic Streaming

```java
import io.smallrye.mutiny.Multi;
import tech.kayys.gollek.spi.stream.StreamChunk;

public class StreamingExample {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("Write a short poem about coding.")
            .maxTokens(300)
            .build();

        // Stream tokens
        Multi<StreamChunk> stream = client.streamCompletion(request);
        
        stream.subscribe().with(
            chunk -> {
                System.out.print(chunk.getToken());
                if (chunk.isComplete()) {
                    System.out.println("\n\n[Generation complete]");
                }
            },
            Throwable::printStackTrace,
            () -> System.out.println("Stream finished")
        );
        
        // Keep application alive during streaming
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```

### Streaming with Callbacks

```java
public class StreamingWithCallbacks {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("Explain recursion in programming.")
            .build();

        client.streamCompletion(request)
            .onItem().invoke(chunk -> {
                System.out.print(chunk.getToken());
            })
            .onFailure().invoke(error -> {
                System.err.println("\nError: " + error.getMessage());
            })
            .onCompletion().invoke(() -> {
                System.out.println("\nDone!");
            })
            .subscribe().with(ignored -> {});
    }
}
```

---

## Async Jobs

### Submit and Poll

```java
import tech.kayys.gollek.spi.inference.AsyncJobStatus;
import java.time.Duration;

public class AsyncJobExample {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("Generate a detailed business plan for a startup.")
            .maxTokens(2000)
            .build();

        // Submit async job
        String jobId = client.submitAsyncJob(request);
        System.out.println("Job submitted: " + jobId);

        // Poll for status
        while (true) {
            AsyncJobStatus status = client.getJobStatus(jobId);
            System.out.println("Status: " + status.getStatus());
            
            if (status.isComplete()) {
                System.out.println("Result: " + status.getResult().getContent());
                break;
            } else if (status.hasError()) {
                System.err.println("Error: " + status.getError());
                break;
            }
            
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                break;
            }
        }
    }
}
```

### Wait for Completion

```java
public class WaitForJob {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("Write a comprehensive guide on microservices.")
            .maxTokens(3000)
            .build();

        String jobId = client.submitAsyncJob(request);

        // Wait up to 5 minutes, check every 2 seconds
        AsyncJobStatus status = client.waitForJob(
            jobId,
            Duration.ofMinutes(5),
            Duration.ofSeconds(2)
        );

        if (status.isComplete()) {
            System.out.println("Completed: " + status.getResult().getContent());
        } else {
            System.err.println("Timeout or error: " + status.getError());
        }
    }
}
```

---

## Batch Processing

### Multiple Requests

```java
import tech.kayys.gollek.spi.inference.BatchInferenceRequest;

public class BatchInference {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        // Create multiple requests
        List<InferenceRequest> requests = List.of(
            InferenceRequest.builder()
                .model("llama-3.2-3b-instruct")
                .prompt("Translate 'Hello' to French")
                .build(),
            InferenceRequest.builder()
                .model("llama-3.2-3b-instruct")
                .prompt("Translate 'Hello' to Spanish")
                .build(),
            InferenceRequest.builder()
                .model("llama-3.2-3b-instruct")
                .prompt("Translate 'Hello' to German")
                .build()
        );

        // Execute batch
        BatchInferenceRequest batch = new BatchInferenceRequest(requests);
        List<InferenceResponse> responses = client.batchInference(batch);

        // Process results
        for (int i = 0; i < responses.size(); i++) {
            System.out.printf("Request %d: %s%n", 
                i + 1, 
                responses.get(i).getContent());
        }
    }
}
```

---

## Provider Selection

### List Available Providers

```java
import tech.kayys.gollek.spi.provider.ProviderInfo;

public class ListProviders {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        List<ProviderInfo> providers = client.listAvailableProviders();
        
        for (ProviderInfo provider : providers) {
            System.out.printf("Provider: %s (%s)%n", 
                provider.getName(), 
                provider.getId());
            System.out.printf("  Version: %s%n", provider.getVersion());
            System.out.printf("  Status: %s%n", provider.getHealthStatus());
            System.out.printf("  Capabilities: %s%n", provider.getCapabilities());
            System.out.println();
        }
    }
}
```

### Set Preferred Provider

```java
public class ProviderSelection {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        // Set default provider
        client.setPreferredProvider("ollama");
        
        // All subsequent requests use Ollama by default
        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("Hello!")
            .build();

        InferenceResponse response = client.createCompletion(request);
        System.out.println(response.getContent());

        // Override for specific request
        InferenceRequest openAiRequest = InferenceRequest.builder()
            .model("gpt-3.5-turbo")
            .prompt("Hello!")
            .preferredProvider("openai")
            .build();

        InferenceResponse openAiResponse = client.createCompletion(openAiRequest);
        System.out.println(openAiResponse.getContent());
    }
}
```

---

## Error Handling

### Try-Catch Pattern

```java
import tech.kayys.gollek.sdk.local.GollekLocalClientException;

public class ErrorHandling {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        InferenceRequest request = InferenceRequest.builder()
            .model("nonexistent-model")
            .prompt("Test")
            .build();

        try {
            InferenceResponse response = client.createCompletion(request);
            System.out.println(response.getContent());
        } catch (GollekLocalClientException e) {
            System.err.println("Inference failed: " + e.getMessage());
            System.err.println("Cause: " + e.getCause());
        }
    }
}
```

### Retry Logic

```java
public class RetryExample {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("Test with retry")
            .build();

        int maxRetries = 3;
        int attempt = 0;
        
        while (attempt < maxRetries) {
            try {
                InferenceResponse response = client.createCompletion(request);
                System.out.println("Success: " + response.getContent());
                break;
            } catch (GollekLocalClientException e) {
                attempt++;
                System.err.println("Attempt " + attempt + " failed: " + e.getMessage());
                
                if (attempt >= maxRetries) {
                    System.err.println("Max retries reached");
                    throw e;
                }
                
                try {
                    Thread.sleep(1000 * attempt); // Exponential backoff
                } catch (InterruptedException ie) {
                    Thread.currentThread().interrupt();
                    break;
                }
            }
        }
    }
}
```

---

## CDI Integration

### Jakarta EE Service

```java
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;
import tech.kayys.gollek.sdk.local.GollekLocalClient;
import tech.kayys.gollek.spi.inference.InferenceRequest;
import tech.kayys.gollek.spi.inference.InferenceResponse;

@ApplicationScoped
public class AiService {
    
    @Inject
    GollekLocalClient client;
    
    public String generateSummary(String text) {
        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("Summarize: " + text)
            .maxTokens(200)
            .build();
        
        return client.createCompletion(request).getContent();
    }
    
    public String translate(String text, String targetLanguage) {
        InferenceRequest request = InferenceRequest.builder()
            .model("llama-3.2-3b-instruct")
            .prompt("Translate to " + targetLanguage + ": " + text)
            .maxTokens(500)
            .build();
        
        return client.createCompletion(request).getContent();
    }
}
```

### REST Resource

```java
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.inject.Inject;

@Path("/ai")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class AiResource {
    
    @Inject
    GollekLocalClient client;
    
    @POST
    @Path("/complete")
    public CompletionResponse complete(CompletionRequest request) {
        InferenceRequest inferenceRequest = InferenceRequest.builder()
            .model(request.getModel())
            .prompt(request.getPrompt())
            .maxTokens(request.getMaxTokens())
            .build();
        
        InferenceResponse response = client.createCompletion(inferenceRequest);
        
        return new CompletionResponse(
            response.getContent(),
            response.getModel(),
            response.getUsage().getTotalTokens()
        );
    }
    
    public static class CompletionRequest {
        public String model;
        public String prompt;
        public int maxTokens;
        // getters and setters
    }
    
    public static class CompletionResponse {
        public String content;
        public String model;
        public int tokensUsed;
        // constructor, getters and setters
    }
}
```

---

## Native FFI

### C Example

```c
#include <stdio.h>
#include <stdlib.h>

extern long golek_client_create();
extern int golek_client_destroy(long clientHandle);
extern char* golek_create_completion_json(long clientHandle, const char* requestJson);
extern char* golek_last_error();
extern void golek_string_free(char* str);

int main() {
    // Create client
    long client = golek_client_create();
    if (client == 0) {
        fprintf(stderr, "Failed to create client: %s\n", golek_last_error());
        return 1;
    }

    // Build request JSON
    const char* requestJson = "{"
        "\"model\": \"llama-3.2-3b-instruct\","
        "\"prompt\": \"What is machine learning?\","
        "\"maxTokens\": 200"
    "}";

    // Execute inference
    char* responseJson = golek_create_completion_json(client, requestJson);
    
    if (responseJson != NULL) {
        printf("Response: %s\n", responseJson);
        golek_string_free(responseJson);
    } else {
        fprintf(stderr, "Error: %s\n", golek_last_error());
    }

    // Cleanup
    golek_client_destroy(client);
    return 0;
}
```

### Compile and Run

```bash
# Compile with GCC
gcc -o inference_example inference_example.c \
    -L. -lgollek_sdk_local \
    -Wl,-rpath,.

# Run
./inference_example
```

---

## Model Management

### List Models

```java
import tech.kayys.gollek.sdk.model.ModelInfo;

public class ListModels {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        // List all models
        List<ModelInfo> models = client.listModels();
        
        for (ModelInfo model : models) {
            System.out.printf("Model: %s%n", model.getModelId());
            System.out.printf("  Name: %s%n", model.getName());
            System.out.printf("  Format: %s%n", model.getFormat());
            System.out.printf("  Size: %d bytes%n", model.getSizeBytes());
            System.out.println();
        }
    }
}
```

### Get Model Info

```java
public class GetModelInfo {
    public static void main(String[] args) {
        GollekLocalClient client = new GollekLocalClientAdapter(
            GollekSdkFactory.createLocalSdk()
        );

        Optional<ModelInfo> modelInfo = client.getModelInfo("llama-3.2-3b-instruct");
        
        modelInfo.ifPresent(info -> {
            System.out.println("Model Details:");
            System.out.println("  ID: " + info.getModelId());
            System.out.println("  Name: " + info.getName());
            System.out.println("  Version: " + info.getVersion());
            System.out.println("  Format: " + info.getFormat());
            System.out.println("  Quantization: " + info.getQuantization());
        });
        
        if (modelInfo.isEmpty()) {
            System.out.println("Model not found");
        }
    }
}
```

---

[Back to Architecture](/docs/architecture) &nbsp; [Features](/features/)
