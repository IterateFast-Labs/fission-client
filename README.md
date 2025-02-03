<picture>
  <source media="(prefers-color-scheme: dark)" srcset="./docs/fission-logo-dark.png">
  <img alt="Fission" src="./docs/fission-logo-white.png">
</picture>

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FIterateFast-Labs%2Ffission-client&count_bg=%2300FFAE&title_bg=%239C0099&icon=&icon_color=%23000000&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

# Fission Client

Fission is pioneering the future of AI in the Web3 era. By combining the power of decentralized technologies with cutting-edge AI, we are creating an inclusive, transparent, and community-driven ecosystem where AI models evolve and grow through collaborative efforts.

This repository is a monorepo that contains code and modules to interact with the Fission network. The tech stack is React, Typescript, and Vite.

[📖 Learn more about Fission](https://docs.fission.lol/)

## Getting Started

1. Install Pnpm globally: [Check](https://pnpm.io/installation)
2. Clone the repository
3. Run `pnpm install` to install the dependencies
4. Run `pnpm run dev` to start the development server

## Project Structure

This repository is organized as a monorepo, meaning that all packages and modules are maintained within a single repository. This approach simplifies dependency management and encourages code sharing across the entire project.

Within the monorepo, the **mini-app** package plays a critical role as it contains the code for Fission’s Telegram mini-app. The mini-app is structured similarly to an operating system, where core functionalities and applications are separated into distinct sections:

- **Kernel (Core Functionality)**  
  The kernel forms the backbone of the mini-app, providing essential system-level services and common functionalities:

  - **System Initialization & State Management:**  
    Handles authentication via dedicated modules, manages global states (e.g., settings and toast notifications), and controls sessions across the app.
  - **Core Routing & Module Connectivity:**  
    Sets up basic routing and connects various modules, such as the desktop environment and start menu, ensuring seamless transitions between components.
  - **Framework for Extensions:**  
    Offers a base for modules like desktop, settings, and authentication to operate reliably by providing shared utilities and common libraries.

- **Applications (User-Facing Features)**  
  Acting like applications on an operating system, this section provides the user-facing features and specific functionalities built on top of the kernel:
  - **User Interface & Routing:**  
    Contains the splash screen, individual application pages, and dedicated modules (such as the "tay" module) that define how users interact with the app.
  - **Modular and Independent Functionality:**  
    Each application module leverages the kernel’s infrastructure for independent routing, component management, and state handling, allowing for easy expansion and maintenance.
  - **Extensible Service Layer:**  
    Enables the addition of new functionalities or plugins with minimal changes to the core system, fostering flexibility and scalability.
  - **Future Extensions:**  
    In the near future, we plan to enable developers to integrate their own contributions directly into the `/applications` folder. We welcome your ideas and suggestions—please feel free to propose new features or enhancements!

## Contributing

We welcome contributions to Fission Client! Please check out the [Contributing Guidelines](CONTRIBUTING.md) for more details.
