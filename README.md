# InstaStore API

Welcome to InstaStore API.

## Architecture

Domain-Driven Design (DDD) is an approach to software development that emphasizes structuring the software around the core business domain. The goal of DDD is to ensure that the design of the system closely reflects the real-world business processes and rules, making the software more maintainable, scalable, and aligned with business needs.

- Domain: The core business logic and rules that the software is designed to address.
- Entities: Objects that have a distinct identity and lifecycle, such as User or Order.
- Repositories: Abstractions that handle data retrieval and persistence, keeping the domain model isolated from infrastructure concerns.
- Services: Stateless operations that encapsulate domain logic not naturally suited for an entity or value object.

By aligning the system architecture with the domain, DDD helps teams focus on delivering business value while maintaining clear boundaries and minimizing complexity.

### Folders

- Application: Contains use cases and coordinates the flow of data between the domain and external layers. It manages tasks but doesn’t hold business logic.

- Domain: The core of the business logic, containing entities, value objects, and domain services. This layer is independent of external systems.

- Infrastructure: Handles external concerns like databases and APIs, providing concrete implementations of repositories and other services.

### DDD Architecture Diagram

![DDD Architecture Diagram](./img/ddd-architecture.png)