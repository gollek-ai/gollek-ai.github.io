---
layout: default
title: Gollek SDK Features
---

# Gollek SDK Features

Comprehensive feature set for building AI-powered applications with flexibility and performance.

---

## Core Features

### Unified Inference API

Single consistent interface for all inference providers and model formats.

**Benefits:**
- Write once, run anywhere
- Easy provider switching
- Reduced vendor lock-in
- Simplified testing and development

**Supported Formats:**
- GGUF (llama.cpp)
- ONNX Runtime
- TensorFlow Lite
- vLLM
- Cloud APIs (OpenAI, Anthropic, Gemini, Ollama)

---

### Multi-Provider Support

Seamlessly integrate with multiple inference providers.

| Provider | Type | Capabilities |
|----------|------|--------------|
| GGUF | Local | Streaming, Async, Batch |
| ONNX | Local | Streaming, Batch |
| TFLite | Local | Streaming, Batch |
| OpenAI | Cloud | Streaming, Async, Functions |
| Anthropic | Cloud | Streaming, Async, Tools |
| Google Gemini | Cloud | Streaming, Async, Multimodal |
| Ollama | Local/Cloud | Streaming, Async |
| Cerebras | Cloud | Streaming, High-throughput |

---

### Reactive Streaming

Real-time token streaming with backpressure support.

**Features:**
- Non-blocking I/O
- Mutiny reactive streams
- Token-by-token delivery
- Flow control for slow consumers
- Graceful error handling

**Example:**
```java
client.streamCompletion(request)
    .onItem().invoke(chunk -> 
        System.out.print(chunk.getToken())
    )
    .subscribe().with(ignored -> {});
```

---

### Async Job Processing

Background job execution with status tracking.

**Features:**
- Submit long-running requests asynchronously
- Poll for status updates
- Wait for completion with timeout
- Automatic retry on failure
- Result caching

**Use Cases:**
- Large document processing
- Batch data analysis
- Long-form content generation
- Complex reasoning tasks

---

### Batch Inference

Process multiple requests efficiently in a single call.

**Benefits:**
- Reduced network overhead
- Better throughput
- Simplified parallel processing
- Cost optimization

**Example:**
```java
List<InferenceResponse> responses = client.batchInference(
    new BatchInferenceRequest(requests)
);
```

---

## Model Management

### Local Model Repository

Persistent storage for downloaded models.

**Features:**
- Automatic model caching
- No re-downloads on restart
- Progress tracking during download
- Multiple source support (HF, S3, local)
- Model metadata management

---

### Model Discovery

Browse and query available models.

**Capabilities:**
- List all available models
- Paginated model listing
- Filter by format, size, provider
- Detailed model information
- Version tracking

---

## Provider Management

### Provider Discovery

Auto-discover and query available providers.

**Information Available:**
- Provider capabilities
- Health status
- Supported models
- Version and vendor info
- Performance metrics

---

### Provider Selection

Flexible provider routing strategies.

**Options:**
- Global default provider
- Per-request provider override
- Automatic failover
- Load balancing (enterprise)
- Cost-based routing (enterprise)

---

## Native Integration

### GraalVM Native Image

Compile to native code for optimal performance.

**Benefits:**
- Instant startup (no JVM warmup)
- Reduced memory footprint
- Smaller deployment size
- Enhanced security (no bytecode)

**Output:**
- Shared libraries (.so, .dylib, .dll)
- Static executables
- Embedded system binaries

---

### C FFI Interface

Direct C/C++ integration via function entrypoints.

**Functions:**
- Client lifecycle management
- Synchronous and async inference
- Streaming support
- Job management
- Model and provider queries

**Language Bindings:**
- C/C++ (native)
- Python (via ctypes)
- Rust (via FFI)
- Go (via cgo)
- Node.js (via node-ffi)

---

## Enterprise Features

### Multi-Tenancy

Tenant isolation and resource management.

**Features:**
- Tenant-scoped API keys
- Isolated model pools
- Per-tenant quotas and rate limits
- Usage tracking and billing
- Compliance audit trails

**Activation:**
```bash
export WAYANG_MULTITENANCY_ENABLED=true
export GOLLEK_TENANT_ID=tenant-123
```

---

### Security

Enterprise-grade security features.

**Capabilities:**
- Secure credential management
- API key rotation
- Encrypted model storage
- Network isolation
- Access control policies
- Audit logging

---

### Observability

Comprehensive monitoring and debugging.

**Metrics:**
- Request latency histograms
- Token usage counters
- Provider health gauges
- Queue depth monitors
- Error rate tracking

**Tracing:**
- OpenTelemetry integration
- Distributed trace propagation
- Span annotations
- Context propagation

**Logging:**
- Structured JSON logging
- Correlation IDs
- Configurable log levels
- Sensitive data redaction

---

## Developer Experience

### CDI Integration

Seamless Jakarta EE integration.

**Features:**
- Automatic bean discovery
- Dependency injection
- CDI scopes support
- Event integration
- Interceptor support

**Example:**
```java
@ApplicationScoped
public class MyService {
    @Inject
    GollekLocalClient client;
    
    public String generate(String prompt) {
        // Use injected client
    }
}
```

---

### Modular Architecture

Include only what you need.

**Benefits:**
- Minimal dependencies
- Reduced attack surface
- Faster builds
- Smaller deployments

**Optional Modules:**
- Provider-specific extensions
- Model repository implementations
- Format converters
- MCP integrations

---

### Type-Safe APIs

Full Java type safety with builders.

**Features:**
- Immutable request/response objects
- Builder pattern for construction
- Compile-time validation
- IDE autocomplete support
- Clear error messages

---

## Performance Features

### Non-Blocking I/O

Reactive architecture throughout.

**Benefits:**
- High concurrency
- Efficient resource utilization
- Better throughput
- Responsive under load

---

### Connection Pooling

Efficient connection management for cloud providers.

**Features:**
- Reusable HTTP connections
- Configurable pool sizes
- Connection keepalive
- Automatic reconnection

---

### Response Caching

Optional caching for repeated requests.

**Use Cases:**
- FAQ responses
- Common queries
- Static content generation
- Test data

---

## Integration Features

### MCP Support

Model Context Protocol integration for tools.

**Capabilities:**
- Tool discovery
- Tool invocation
- Context management
- Multi-tool workflows

---

### Plugin System

Extensible architecture via plugins.

**Extension Points:**
- Custom providers
- Model repositories
- Format converters
- Authentication schemes
- Pre/post processors

---

## Comparison Table

| Feature | Community | Enterprise |
|---------|-----------|------------|
| Multi-provider support | Yes | Yes |
| Streaming inference | Yes | Yes |
| Async jobs | Yes | Yes |
| Batch processing | Yes | Yes |
| Native FFI | Yes | Yes |
| Model management | Yes | Yes |
| CDI integration | Yes | Yes |
| Multi-tenancy | No | Yes |
| Advanced security | Basic | Full |
| Audit logging | Basic | Comprehensive |
| Priority support | Community | 24/7 |
| SLA | No | Yes |

---

## Getting Started

Ready to explore these features?

[View Documentation](/docs/) &nbsp; [See Examples](/docs/examples)

---

[Back to Home](/) &nbsp; [View Documentation](/docs/)
