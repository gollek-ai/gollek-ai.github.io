---
layout: default
title: Installation & Hello World
parent: Basic Tutorials
grand_parent: Tutorials
nav_order: 1
---

# 🚀 Installation & Hello World

This tutorial will guide you through the process of setting up the Gollek environment and running your first AI script on local hardware.

## 1. System Requirements

Before you begin, ensure your system meets the following requirements:
- **Java**: JDK 17 or higher.
- **Hardware**: 
    - macOS: Apple Silicon (M1/M2/M3/M4) recommended.
    - Linux: x86_64 with modern GLIBC.
- **JBang**: Installed and configured in your shell path.

## 2. Installing Gollek CLI

The easiest way to install Gollek is via our automated installation script:

```bash
curl -sSL https://raw.githubusercontent.com/bhangun/gollek/main/install.sh | bash
```

Verify the installation:

```bash
gollek --version
```

## 3. Your First Script: Hello World

Create a new file named `hello_gollek.java`:

```java
//DEPS tech.kayys.gollek:gollek-ml-api:0.1.0-SNAPSHOT
import tech.kayys.gollek.ml.Gollek;
import tech.kayys.gollek.ml.tensor.Tensor;

public class hello_gollek {
    public static void main(String[] args) {
        // Initialize Gollek on the best available device (CPU/GPU)
        Gollek gollek = Gollek.init();
        
        // Create a simple identity matrix
        Tensor t = Tensor.eye(3);
        
        System.out.println("Hello from Gollek!");
        System.out.println("Default Device: " + gollek.getDeviceName());
        System.out.println("Tensor: " + t);
    }
}
```

Run it using JBang:

```bash
jbang hello_gollek.java
```

## 🎯 Next Steps

Now that your environment is ready, move on to [Tensors for Beginners](../tensors/).
