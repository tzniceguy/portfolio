import {
  Code,
  HardDrive,
  Laptop,
  Monitor,
  Smartphone,
  Terminal,
} from "lucide-react";
import {
  SiArchlinux,
  SiBruno,
  SiDigitalocean,
  SiHetzner,
  SiManjaro,
  SiObsidian,
  SiPycharm,
  SiWebstorm,
  SiZedindustries, SiZenn,
} from "@icons-pack/react-simple-icons";

export const usesData = {
  hardware: [
    {
      id: "laptop",
      name: "HP Pavilion x360 Convertible 14m-dw1xxx",
      category: "Laptop",
      description:
        "My primary development machine. The convertible design is perfect for both coding and design work.",
      icon: Laptop,
      specs: [
        "Intel Core processor",
        "Convertible touchscreen",
        "All-day battery life",
      ],
      color: "#3B82F6",
    },
    {
      id: "monitor",
      name: "Dell P2419H",
      category: "Monitor",
      description:
        "24-inch Full HD monitor that provides excellent color accuracy and plenty of screen real estate.",
      icon: Monitor,
      specs: ["24-inch Full HD", "IPS panel", "Adjustable stand"],
      color: "#10B981",
    },
    {
      id: "storage",
      name: "WARLAM SSD",
      category: "Storage",
      description:
        "Fast and reliable SSD storage for quick boot times and efficient file operations.",
      icon: HardDrive,
      specs: ["High-speed storage", "Reliable performance", "Large capacity"],
      color: "#8B5CF6",
    },
    {
      id: "phone",
      name: "iPhone 12",
      category: "Mobile",
      description:
        "My daily driver for testing mobile apps, communication, and staying connected on the go.",
      icon: Smartphone,
      specs: ["iOS ecosystem", "Great camera", "App testing"],
      color: "#F59E0B",
    },
  ],
  software: [
    {
      id: "zed",
      name: "Zed",
      category: "Code Editor",
      description:
        "Lightning-fast code editor with excellent performance and modern features.",
      icon: SiZedindustries,
      usage: "Primary editor for quick edits and lightweight projects",
      color: "#084CCF",
    },
    {
      id: "cursor",
      name: "Cursor",
      category: "AI Code Editor",
      description:
        "AI-powered code editor that enhances productivity with intelligent suggestions.",
      icon: Code,
      usage: "AI-assisted development and complex refactoring",
      color: "#6366F1",
    },
    {
      id: "webstorm",
      name: "JetBrains WebStorm",
      category: "IDE",
      description:
        "Powerful IDE for JavaScript and web development with advanced debugging tools.",
      icon: SiWebstorm,
      usage: "Full-stack web development projects",
      color: "#06B6D4",
    },
    {
      id: "pycharm",
      name: "JetBrains PyCharm",
      category: "IDE",
      description:
        "Professional Python IDE with comprehensive tools for Django and data science.",
      icon: SiPycharm,
      usage: "Python development and Django projects",
      color: "#22C55E",
    },
    {
      id: "bruno",
      name: "Bruno",
      category: "API Client",
      description:
        "Modern API client for testing and documenting REST APIs and GraphQL endpoints.",
      icon: SiBruno,
      usage: "API development and testing",
      color: "#F4AA41",
    },
    {
      id: "ghostty",
      name: "Ghostty",
      category: "Terminal",
      description:
        "Fast and feature-rich terminal emulator with excellent performance.",
      icon: Terminal,
      usage: "Command line operations and system administration",
      color: "#64748B",
    },
    {
      id: "obsidian",
      name: "Obsidian",
      category: "Note Taking",
      description:
        "Knowledge management tool for organizing thoughts, ideas, and project documentation.",
      icon: SiObsidian,
      usage: "Documentation, note-taking, and knowledge management",
      color: "#7C3AED",
    },
    {
      id: "zen",
      name: "Zen Browser",
      category: "Browser",
      description: "Minimalist browser focused on productivity and distraction-free browsing",
      icon: SiZenn,
      usage: "Primary web browser for development and research",
      color: "#3B82F6",
    }
  ],
  systems: [
    {
      id: "arch",
      name: "Arch Linux",
      category: "Operating System",
      description:
        "Minimalist, rolling-release Linux distribution that gives me complete control over my system.",
      icon: SiArchlinux,
      usage: "Primary development environment",
      color: "#1E40AF",
    },
    {
      id: "manjaro",
      name: "Manjaro Linux",
      category: "Operating System",
      description:
        "User-friendly Arch-based distribution with excellent hardware support and stability.",
      icon: SiManjaro,
      usage: "Alternative setup for specific projects",
      color: "#059669",
    },
  ],
  cloud: [
    {
      id: "digitalocean",
      name: "DigitalOcean",
      category: "Cloud Platform",
      description:
        "Reliable cloud infrastructure for hosting applications, databases, and development environments.",
      icon: SiDigitalocean,
      usage: "Web application hosting and databases",
      color: "#0080FF",
    },
    {
      id: "hetzner",
      name: "Hetzner",
      category: "Cloud Platform",
      description:
        "Cost-effective European cloud provider with excellent performance and competitive pricing.",
      icon: SiHetzner,
      usage: "Large-scale deployments and storage solutions",
      color: "#D50000",
    },
  ],
};
