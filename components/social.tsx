"use client";
import { useState } from "react";
import {
  Linkedin,
  ExternalLink,
  Copy,
  Check,
  MessageCircle,
  Users,
  Globe,
} from "lucide-react";
import { SiGmail, SiGithub, SiX } from "@icons-pack/react-simple-icons";
import { LucideIcon } from "lucide-react";
import { IconType } from "@icons-pack/react-simple-icons";

// Define interface for contact items
interface ContactItem {
  icon: LucideIcon | IconType;
  platform: string;
  contact: string;
  href: string;
  color: string;
  description: string;
  stats: string;
  action: "copy" | "visit" | "connect" | "follow";
}

// Define interface for stats
interface Stats {
  connections: number;
  followers: number;
  projects: number;
}

export default function Social() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [stats] = useState<Stats>({
    connections: 847,
    followers: 234,
    projects: 42,
  });

  const contact: ContactItem[] = [
    {
      icon: SiGmail,
      platform: "Email",
      contact: "hello@joeshimbi.tech",
      href: "mailto:joeshimbi@gmail.com",
      color: "from-red-500 to-pink-500",
      description: "Drop me a line",
      stats: "Quick replies",
      action: "copy",
    },
    {
      icon: SiGithub,
      platform: "GitHub",
      contact: "@tzniceguy",
      href: "https://github.com/tzniceguy",
      color: "from-gray-700 to-gray-900",
      description: "Check out my code",
      stats: `${stats.projects} repositories`,
      action: "visit",
    },
    {
      icon: Linkedin,
      platform: "LinkedIn",
      contact: "Connect with me",
      href: "https://linkedin.com/in/joe-shimbi",
      color: "from-blue-500 to-blue-700",
      description: "Let's network",
      stats: `${stats.connections}+ connections`,
      action: "connect",
    },
    {
      icon: SiX,
      platform: "Twitter",
      contact: "@tzniceguy",
      href: "https://x.com/tzniceguy",
      color: "from-sky-400 to-blue-500",
      description: "Follow my thoughts",
      stats: `${stats.followers} followers`,
      action: "follow",
    },
  ];

  const handleEmailCopy = () => {
    navigator.clipboard.writeText("joeshimbi@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const getActionIcon = (action: ContactItem["action"]): LucideIcon => {
    switch (action) {
      case "copy":
        return copiedEmail ? Check : Copy;
      case "visit":
        return ExternalLink;
      case "connect":
        return Users;
      case "follow":
        return MessageCircle;
      default:
        return ExternalLink;
    }
  };

  const handleCardClick = (item: ContactItem) => {
    if (item.action === "copy") {
      handleEmailCopy();
    } else {
      window.open(item.href, "_blank");
    }
  };

  return (
    <div className="min-h-screen mt-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/10">
            <Globe className="w-4 h-4 text-cyan-400" />
            <span className="text-sm">Available worldwide</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h1>

          <p className="text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Have a project in mind? Need a custom solution? I am here to help
            bring your ideas to life.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contact.map((item, index) => {
            const IconComponent = item.icon;
            const ActionIcon = getActionIcon(item.action);

            return (
              <div
                key={item.platform}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(item)}
              >
                {/* Glow effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(135deg, ${item.color.split(" ")[1]}, ${item.color.split(" ")[3]})`,
                  }}
                ></div>
                {/* Card */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                        >
                          <IconComponent className="w-7 h-7" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold mb-1">
                            {item.platform}
                          </h4>
                          <p className="text-sm mb-2">{item.description}</p>
                          <div className="text-xs text-gray-500 bg-white/5 rounded-full px-2 py-1 inline-block">
                            {item.stats}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}
                      >
                        <ActionIcon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium">
                        {item.contact}
                      </span>

                      {/* Hover indicator */}
                      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                        <span className="text-xs capitalize">
                          {item.action === "copy"
                            ? copiedEmail
                              ? "Copied!"
                              : "Click to copy"
                            : `Click to ${item.action}`}
                        </span>
                      </div>
                    </div>

                    {/* Progress bar animation */}
                    <div className="mt-3 h-0.5 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${item.color} transform transition-transform duration-500 ease-out ${hoveredIndex === index ? "translate-x-0" : "-translate-x-full"}`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
