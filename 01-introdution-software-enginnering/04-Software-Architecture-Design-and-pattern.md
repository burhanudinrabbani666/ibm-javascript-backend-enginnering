# Software Architecture Design and pattern

### Definition and Role of Software Architecture

- Software architecture is the organization and blueprint of a software system, defining its fundamental structures and component interactions.
- It captures early design decisions that influence system behavior and are costly to change later.

### Importance of Well-Designed Architecture

- Balances stakeholder needs and facilitates communication among team members.
- Supports agility by accommodating changing requirements and extends software lifespan despite implementation changes.

### Impact on Technology and Deployment

- Guides the choice of technology stacks that meet non-functional requirements like performance and security.
- Influences production environment decisions, including infrastructure such as servers and databases.

### Architectural Artifacts

- Software Design Document (SDD) details technical specifications, assumptions, constraints, and methodologies.
- Architectural diagrams show components, interactions, and patterns.
- Unified Modeling Language (UML) diagrams communicate structure and behavior in a standardized way.

## Software Design and Modeling

### Structured Design and Behavioral Models

- Structured design breaks down software problems into organized modules and sub-modules that are cohesive and loosely coupled to minimize interdependencies.
- Behavioral models describe what a system does through diagrams like state transition and interaction diagrams, without detailing how the system implements these behaviors.

### Unified Modeling Language (UML)

- UML is a standardized, programming language-agnostic visual modeling language used to represent software architecture, design, and behavior.
- UML diagrams help plan features before coding, onboard new team members quickly, facilitate communication between technical and non-technical stakeholders, and assist developers in navigating source code.

### Behavioral UML Diagrams

- State transition diagrams depict system states and the events that trigger transitions between these states, illustrating system behavior over time.
- Interaction diagrams, such as sequence diagrams, model dynamic interactions between objects, showing how they communicate in a time-ordered sequence.

## Object-Oriented Analysis and Design

### Object-Oriented Concepts

- Objects represent entities containing data and behaviors, such as a patient who can perform actions like canceling an appointment.
- Classes are blueprints or templates for objects, defining generic attributes and methods; specific objects (instances) are created from these classes through instantiation.

### Class Diagrams and Software Architecture

- Class diagrams are structural UML diagrams that depict the relationships between classes in a system, showing attributes and methods.
- Inheritance allows subclasses to inherit properties and methods from parent classes, enabling hierarchical relationships like doctors and specialists inheriting from medical personnel.

### Purpose and Benefits of OOAD

- OOAD helps break down a system into interacting objects, facilitating parallel development by multiple developers.
- It supports visual modeling of both static structure and dynamic behavior of software systems, improving communication and design clarity.

## Software Architecture Patterns and Deployment Topologies

### Component Characteristics

- Components are encapsulated units of functionality that are reusable, replaceable, independent, extensible, encapsulated, and non-context specific.
- Examples include APIs, data access objects, and controllers that manage interactions between components.

### Component-Based and Service-Oriented Architectures

- Component-based architecture decomposes a system into loosely coupled, independent components working together.
- Services are specialized components designed for independent deployment and reuse across multiple systems, focusing on business needs.
- Services consist of components, and components consist of objects; services communicate over networks in a service-oriented architecture (SOA).

### Distributed Systems

- Distributed systems consist of multiple services running on different machines but appear as a single coherent system to users.
- They share resources, are fault-tolerant, scalable, and support concurrent activities, using architectures like client-server, three-tier, peer-to-peer, or microservices.

## Architectural Patterns in Software

### Architectural Patterns Overview

- Architectural patterns are repeatable solutions to common software architecture problems, highlighting typical internal structures.
- The video covers 2-tier, 3-tier, peer-to-peer, event-driven, and microservices patterns, noting others exist like MVC and message-broker.

### Key Architectural Patterns

- 2-tier (client-server): Server manages resources; clients request services. Example: text messaging apps and database clients.
- 3-tier: Divides software into presentation (UI), application (business logic), and data tiers. Common in web apps.
- Peer-to-peer: Decentralized nodes act as both clients and servers, sharing resources directly. Used in cryptocurrencies like Bitcoin.

### Event-Driven and Microservices Patterns

- Event-driven: Components produce and consume events asynchronously via an event router, suitable for distributed systems. Example: ride-sharing apps.
- Microservices: Applications broken into modular, loosely coupled services communicating via APIs, orchestrated to behave as one system. Example: social media platforms.
- Patterns can be combined, but some are mutually exclusive, e.g., peer-to-peer cannot be 2-tier.

## Application deployment evironments

### Types of Application Environments

- Pre-production environments include development, QA (quality assurance), and staging, each serving different roles in preparing the application for production.
- The production environment is the final, robust environment intended for general users, handling load, security, reliability, and scalability.

### Characteristics of Production Environment

- It includes the full hardware and software stack needed to run the application.
- It must support potentially thousands or millions of users and meet non-functional requirements like security and scalability.

### Deployment Options for Application Environments

- On-premises deployment involves hosting the system within the organization's physical location, offering greater control and security but at higher cost.
- Cloud deployment models include public cloud (shared infrastructure), private cloud (exclusive use), and hybrid cloud (combination of public and private), each with different trade-offs in cost, security, and flexibility.

## Production Deployment Components

### Production Deployment Components

- An n-tier architecture typically includes presentation, web, application, and data tiers, often separated by a firewall for security.
- Components such as firewalls, load balancers, web servers, application servers, proxy servers, and database servers are commonly used, though not all are required in every deployment.

### Security and Traffic Management

- Firewalls monitor and control network traffic based on security rules to protect internal networks from threats like viruses and hackers.
- Load balancers distribute incoming network traffic efficiently across multiple servers to prevent overload and ensure responsiveness.

### Server Roles and Functions

- Web servers deliver content like web pages and media to clients, responding primarily to HTTP requests.
- Application servers run business logic and provide applications to clients, managing interactions and data processing.
- Proxy servers act as intermediaries between tiers, enhancing security, privacy, and efficiency by handling requests, caching, and load balancing.
- Database servers store and manage data, controlled by database management systems (DBMS) that connect databases to applications for data retrieval and manipulation.
