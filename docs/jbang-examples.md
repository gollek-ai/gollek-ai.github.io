# Gollek SDK JBang Examples

This page provides a curated catalog of verified JBang scripts for the Gollek SDK. These examples demonstrate everything from basic tensor operations to advanced neural network training and model persistence.

## 🚀 Quick Start

If you haven't already, set up your environment with a single command:

```bash
curl -sSL https://raw.githubusercontent.com/bhangun/gollek/main/scripts/install.sh | bash
```

---

## 🟢 Beginner Examples

### Hello Gollek
The simplest possible introduction to the SDK.
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/hello_gollek.java`
*   **Key Concepts**: Model creation, forward pass, tensor output.

### My Script (Template)
A clean template for starting your own Gollek experiments.
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/my_script.java`

---

## 🟡 Intermediate Examples

### XOR Training (End-to-End)
A complete script that trains a 2-layer MLP to solve the non-linear XOR problem.
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/xor_training.java`
*   **Key Concepts**: `BCEWithLogitsLoss`, `SGD`, Training Loop, Backward Pass.

### MNIST-style Setup
Simulates a digit classification network (28x28 inputs).
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/mnist_style_setup.java`
*   **Key Concepts**: Deep Linear layers, Parameter counting, `train()` vs `eval()` modes.

### Batch Processing
Demonstrates how to process multiple data files in a loop.
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/batch_process.java`

---

## 🔴 Advanced Examples

### Model Persistence
Learn how to save and load model weights to/from disk.
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/model_persistence.java`
*   **Key Concepts**: `model.save(path)`, `model.load(path)`.

### Custom Module Demo
Shows how to extend the `Module` base class to create complex, reusable components like Residual Blocks.
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/custom_module_demo.java`
*   **Key Concepts**: Class inheritance, parameter registration, skip connections.

---

## 🛠 Troubleshooting & Utilities

### Error Handling
Best practices for catching and managing SDK-specific exceptions.
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/error_handling.java`

### Train via CLI
A script that accepts command-line arguments for epochs and learning rate.
*   **Run**: `jbang https://raw.githubusercontent.com/bhangun/gollek/main/sdk/integration/jbang-templates/examples/train_cli.java 20 0.05`

---

> [!TIP]
> You can view the raw source of any example by replacing `jbang` with `curl` in the commands above.
