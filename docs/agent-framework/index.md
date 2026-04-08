---
layout: default
title: Wayang Agent Framework | Phases 4-7
---

# Wayang Agent Framework (Phases 4-7)

The Wayang Agent Framework represents Phases 4-7 of the platform, building on top of Gollek's deep learning capabilities to create a complete agent orchestration and skill management system.

## Overview

After establishing the core deep learning foundation with Gollek (Phases 1-3), Wayang introduces:

- **Phase 4**: Quarkus Decoupling - Pure Java agent framework with optional Quarkus integration
- **Phase 5**: SPI Integration - Pluggable provider selection and intelligent routing
- **Phase 6**: AgentSkills.io Compliance - Standards-based skill definition and metadata
- **Phase 7**: Skill Integration - Dynamic skill registry and manifest-based loading

## Quick Start

### Installation

```bash
# Add to your Maven project
<dependency>
  <groupId>tech.kayys</groupId>
  <artifactId>wayang-agent-core</artifactId>
  <version>0.2.0</version>
</dependency>
```

### Basic Agent Creation

```java
// Pure Java - no framework required
AgentClient agent = AgentClient.builder()
  .name("MyAgent")
  .skills()
    .add("search", new SearchSkill())
    .add("summarize", new SummarizeSkill())
  .build();

// Run a skill
Result result = agent.executeSkill("search", new SearchRequest("AI"));
```

### With Quarkus (Optional)

```java
@ApplicationScoped
public class MyAgent {
  @Inject
  AgentClient agent;
  
  public void process(String query) {
    agent.executeSkill("search", new SearchRequest(query));
  }
}
```

## Key Features

| Feature | Phase | Status | Details |
|---------|-------|--------|---------|
| **Agent Runtime** | 4 | ✅ Complete | Pure Java, Quarkus optional via CDI producers |
| **Builder Pattern** | 4 | ✅ Complete | Fluent API for agent configuration |
| **Pluggable Providers** | 5 | ✅ Complete | IntelligentRouter + ProviderSelector SPI |
| **Configuration Driven** | 5 | ✅ Complete | Externalized configuration for routing/selection |
| **Skills Compliance** | 6 | ✅ Complete | AgentSkills.io v1.0 spec compliance (12/12 rules) |
| **Metadata Validation** | 6 | ✅ Complete | Name/description validation, progressive disclosure |
| **Skill Registry** | 7 | ✅ Complete | Dynamic registration and discovery |
| **Manifest Loading** | 7 | ✅ Complete | YAML-based skill definitions |

## Architecture

```
┌─────────────────────────────────────────┐
│        Application Layer                 │
│  (Your Agent, Controllers, Services)    │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│        Wayang Agent Framework            │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ Skill Registry & Discovery       │   │ Phase 7
│  │ Manifest Parser                  │   │
│  └──────────────────────────────────┘   │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ AgentSkills.io Compliance        │   │ Phase 6
│  │ Metadata Validator               │   │
│  │ Progressive Disclosure           │   │
│  └──────────────────────────────────┘   │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ IntelligentRouter                │   │ Phase 5
│  │ ProviderSelector SPI             │   │
│  │ Configuration Engine             │   │
│  └──────────────────────────────────┘   │
│                                         │
│  ┌──────────────────────────────────┐   │
│  │ AgentClient Builder              │   │ Phase 4
│  │ Pure Java Core (CDI optional)    │   │
│  └──────────────────────────────────┘   │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│     Gollek Deep Learning Foundation     │
│  (CNN, RNN, GPU Acceleration, etc.)    │
└─────────────────────────────────────────┘
```

## Documentation Structure

- **[Phase 4: Quarkus Decoupling](./phase4-decoupling.md)** - Pure Java framework architecture
- **[Phase 5: SPI Integration](./phase5-spi-routing.md)** - Pluggable provider selection
- **[Phase 6: Skills Compliance](./phase6-skills-compliance.md)** - Standards-based skills
- **[Phase 7: Skill Integration](./phase7-skill-integration.md)** - Dynamic skill management
- **[Configuration Guide](./configuration.md)** - Agent and skill configuration
- **[API Reference](./api-reference.md)** - Complete API documentation

## Learning Path

1. **Start Here**: [Introduction to Wayang Agents](../../../START_HERE.md)
2. **Phase 4**: Build your first agent with the builder pattern
3. **Phase 5**: Configure provider selection and routing
4. **Phase 6**: Define agent skills following AgentSkills.io spec
5. **Phase 7**: Create a skill registry and load manifests
6. **Production**: See [Production Hardening](../production-hardening/) for Phases 8-9

## Code Statistics

```
Agent Framework Implementation:
  • Total Production Code: 3,000+ LOC
  • Total Test Code: 1,200+ LOC
  • Test Methods: 45+ covering all phases
  • Code Coverage: >90% of code paths
  
Phase Breakdown:
  Phase 4: 800 LOC - Builder pattern, CDI integration
  Phase 5: 700 LOC - Router, provider selection
  Phase 6: 600 LOC - Skills compliance, validation
  Phase 7: 900 LOC - Skill registry, manifest loading
```

## Key Concepts

### 1. Builder Pattern (Phase 4)
Pure Java construction pattern enabling:
- Standalone Java usage without Quarkus
- CDI integration when Quarkus is available
- Zero API changes between environments
- 100% backward compatibility

### 2. Pluggable Providers (Phase 5)
Service Provider Interface (SPI) architecture:
- IntelligentRouter for request distribution
- ProviderSelector for strategy-based selection
- Configuration-driven behavior
- A/B testing support

### 3. Skills Compliance (Phase 6)
AgentSkills.io specification implementation:
- 12/12 validation rules enforced
- Name/description validation
- Metadata restructuring
- Progressive disclosure (lazy loading)

### 4. Skill Management (Phase 7)
Complete skill lifecycle:
- Dynamic registration
- Manifest-based configuration
- Discovery and loading
- Version management

## Integration Points

### With Gollek (Phases 1-3)
Agents use Gollek models for:
- Embeddings generation
- Intent classification
- Entity extraction
- Response generation

### With Production (Phases 8-9)
Framework integrates with:
- OpenTelemetry tracing
- Circuit breaker patterns
- Audit logging
- Health checks

## Next Steps

- [Explore Phase 4 Details](./phase4-decoupling.md)
- [View Complete Master Report](../WAYANG_PLATFORM_PHASES_1_to_9_MASTER_REPORT.md)
- [See Production Setup](../production-hardening/)

## Resources

- **GitHub Repository**: [gollek](https://github.com/bhangun/gollek)
- **Issue Tracker**: [GitHub Issues](https://github.com/bhangun/gollek/issues)
- **Discussions**: [GitHub Discussions](https://github.com/bhangun/gollek/discussions)

---

*Last Updated: April 2025 | Phases 4-7 Complete ✅*
