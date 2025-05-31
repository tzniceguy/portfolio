import React from "react";
import { Laptop, Code, Cloud, Coffee, Settings } from "lucide-react";
import { usesData } from "@/lib/uses";
import ItemCard from "@/components/uses/item-card";
import StatsCard from "@/components/uses/stats-card";
import { Item } from "@/components/uses/item-card";

interface HeaderProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface ItemGridProps {
  items: Item[];
  showSpecs?: boolean;
}

function SectionHeader({ title, description, icon: Icon }: HeaderProps) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="p-2  rounded-lg">
          <Icon size={24} className="text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <p className="opacity-75 leading-relaxed">{description}</p>
    </div>
  );
}

function ItemGrid({ items, showSpecs = false }: ItemGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} showSpecs={showSpecs} />
      ))}
    </div>
  );
}

export default function Page() {
  const totalItems =
    usesData.hardware.length +
    usesData.software.length +
    usesData.systems.length +
    usesData.cloud.length;

  return (
    <main className="max-w-4xl mx-auto ">
      <section className="mb-16 mt-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2  rounded-full mb-6">
            <Coffee size={16} className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              My Digital Toolkit
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">What I Use</h1>
          <p className="text-xl leading-relaxed opacity-75">
            A comprehensive look at the hardware, software, and tools that power
            my development workflow and help me build amazing projects.
          </p>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard
            title="Hardware Items"
            count={usesData.hardware.length}
            icon={Laptop}
            color="#3B82F6"
          />
          <StatsCard
            title="Software Tools"
            count={usesData.software.length}
            icon={Code}
            color="#10B981"
          />
          <StatsCard
            title="Operating Systems"
            count={usesData.systems.length}
            icon={Settings}
            color="#8B5CF6"
          />
          <StatsCard
            title="Cloud Providers"
            count={usesData.cloud.length}
            icon={Cloud}
            color="#F59E0B"
          />
        </div>
      </section>

      {/* Hardware Section */}
      <section className="mb-16">
        <SectionHeader
          title="Hardware & Devices"
          description="The physical tools that form the foundation of my development setup"
          icon={Laptop}
        />
        <ItemGrid items={usesData.hardware} showSpecs={true} />
      </section>

      {/* Software Section */}
      <section className="mb-16">
        <SectionHeader
          title="Software & Development Tools"
          description="Essential applications and tools for coding, debugging, and productivity"
          icon={Code}
        />
        <ItemGrid items={usesData.software} />
      </section>

      {/* Operating Systems Section */}
      <section className="mb-16">
        <SectionHeader
          title="Operating Systems"
          description="Linux distributions that provide the perfect development environment"
          icon={Settings}
        />
        <ItemGrid items={usesData.systems} />
      </section>

      {/* Cloud Infrastructure Section */}
      <section className="mb-16">
        <SectionHeader
          title="Cloud Infrastructure"
          description="Reliable cloud platforms for hosting, deployment, and scaling applications"
          icon={Cloud}
        />
        <ItemGrid items={usesData.cloud} />
      </section>

      {/* Footer Note */}
      <section className="text-center">
        <div className="rounded-xl p-8 border">
          <h3 className="text-xl font-semibold mb-3">Always Evolving</h3>
          <p className="leading-relaxed opacity-75 max-w-2xl mx-auto">
            This setup is constantly evolving as I discover new tools and
            technologies. I believe in using the right tool for the job and
            staying up-to-date with the latest developments in the tech
            ecosystem.
          </p>
        </div>
      </section>
    </main>
  );
}
