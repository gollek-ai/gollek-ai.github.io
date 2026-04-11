---
layout: default
title: gollek-ml-hub
parent: API REferences
nav_order: 300
---

# gollek-ml-hub

The `gollek-ml-hub` module provides a unified interface for interacting with remote and local model registries. It simplifies the process of discovering, downloading, and caching pre-trained models and weights from platforms like HuggingFace.

## 🌟 Overview

Modern ML workflows rely heavily on shared repositories of models and weights. The `ModelHub` abstraction masks the complexity of HTTP requests, authentication, and local file management, providing a "Git-like" experience for model assets.

## 🚀 Key Features

- **HuggingFace Integration**: Direct support for downloading repositories and specific files from the HuggingFace Hub.
- **Efficient Caching**: Automatic local caching of downloaded assets to minimize bandwidth usage and enable offline execution.
- **SafeTensor Bridge**: Native support for identifying and loading Safetensors weights directly into Gollek models.
- **Configurable Hubs**: Support for custom model registries (S3, local NAS, etc.) via the `ModelHub` interface.
- **Resume-able Downloads**: Built-in support for resuming interrupted model downloads.

## 📦 Installation

Add the following dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>tech.kayys.gollek</groupId>
    <artifactId>gollek-ml-hub</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
```

## 🛠️ Usage Examples

### Downloading and Loading a Model from HuggingFace

```java
import tech.kayys.gollek.ml.hub.ModelHub;
import tech.kayys.gollek.ml.hub.ModelHubFactory;
import java.nio.file.Path;

// Create a hub instance tied to HuggingFace
ModelHub hub = ModelHubFactory.huggingface();

// Download a specific file from a repository
Path modelPath = hub.download("Qwen/Qwen2.5-0.5B", "model.safetensors");

System.out.println("Model local path: " + modelPath);
```

### Using the SafeTensor Bridge

```java
import tech.kayys.gollek.ml.hub.SafeTensorBridge;

// Automatically map weight names from a Hub file to a Gollek Model
SafeTensorBridge.loadInto(myModel, modelPath);
```

## 📖 API Highlights

### `tech.kayys.gollek.ml.hub.ModelHub`

The primary interface for interacting with model registries.

| Method | Description |
|:-------|:------------|
| `download(repoId, filename)` | Downloads a specific file and returns its local path. |
| `getRepoInfo(repoId)` | Returns metadata about the remote repository. |
| `listModelFiles(repoId)` | Returns a list of all files in the repository. |
| `setCacheDir(path)` | Configures where models are stored locally. |

### Utilities

- **`ModelHubFactory`**: Provides static methods to create pre-configured hub clients (e.g., `huggingface()`).
- **`HubConfig`**: Encapsulates authentication tokens (HF_TOKEN), timeout settings, and proxy configurations.

---

[Back to API Hub](../)
