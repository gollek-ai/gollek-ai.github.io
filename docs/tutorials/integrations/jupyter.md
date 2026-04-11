---
layout: default
title: Jupyter Integration
parent: Platform Integrations
grand_parent: Tutorials
nav_order: 2
---

# 📓 Jupyter: Interactive ML Development

Jupyter notebooks provide an excellent environment for iterative ML development, data exploration, and visualization.

## 1. Prerequisites

- **Python & pip**
- **Jupyter Notebook** or **JupyterLab**
- **IJava Kernel**: Follow the [SpencerPark/IJava](https://github.com/SpencerPark/IJava) installation guide to enable Java support in Jupyter.

## 2. Installing the Gollek Kernel

We provide a custom kernel configuration that includes all necessary native libraries for hardware acceleration.

```bash
cd gollek/framework/integration/jupyter/jupyter-kernel
bash install.sh
```

## 3. Creating Your First Notebook

1. Start Jupyter: `jupyter notebook`
2. Click **New** -> **Gollek SDK (Java)**
3. Run your first cell:

```java
import tech.kayys.gollek.ml.nn.*;
Module model = new Sequential(new Linear(10, 5), new ReLU());
System.out.println(model);
```

---

[Back to Integrations Overview](./)
