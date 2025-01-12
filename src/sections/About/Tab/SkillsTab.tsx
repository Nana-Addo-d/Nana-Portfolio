// src/sections/About/Tab/SkillsTab.tsx
"use client";
import { useRef } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import Ripple from "@/components/ui/ripple";
import { SkillsCategory } from "./SkillsCategory";
import { skillsData, SkillsData, SkillCategory } from "@/assets/data/skillsData";


const IconCloud = dynamic<{ images: string[] }>(
  () => import("@/components/ui/icon-cloud").then(mod => ({ default: mod.IconCloud })),
  { ssr: false }
);

// Sections that should have icon visualizations
const ICON_SECTIONS = ["testing", "programming", "productivity"] as const;

export function SkillsTab() {
  const containerRef = useRef<HTMLDivElement>(null);

  const generateImageUrls = (categories: SkillCategory[]) =>
    categories.flatMap((category) =>
      category.items.map((item) => `https://cdn.simpleicons.org/${item.slug}/${item.slug}`)
    );

  const renderVisualization = (key: keyof SkillsData, categories: any) => {
    if (ICON_SECTIONS.includes(key as typeof ICON_SECTIONS[number])) {
      return (
        <div className="lg:col-span-1 flex justify-center">
          <IconCloud images={generateImageUrls(categories as SkillCategory[])} />
        </div>
      );
    }
    return null;
  };

  const renderSection = (key: keyof SkillsData, categories: any) => {
    const sectionTitle = key.charAt(0).toUpperCase() + key.slice(1)
      .replace(/([A-Z])/g, ' $1') // Add space before capital letters
      .trim(); // Remove any extra spaces
    const hasVisualization = ICON_SECTIONS.includes(key as typeof ICON_SECTIONS[number]);

    return (
      <section key={key}>
      <div className={`grid ${hasVisualization ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-8 min-h-[24rem]`}>
        <div className="space-y-6">
          <h3 className="text-2xl font-bold">{sectionTitle}</h3>
          <SkillsCategory categories={categories} />
        </div>
        {hasVisualization && (
          <div className="relative flex items-center justify-center h-full rounded-lg">
            <div className="absolute inset-0">
              <Ripple />
            </div>
            <div className="z-10">
              {renderVisualization(key, categories)}
            </div>
          </div>
        )}
      </div>
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent my-12" />
      </section>
    );
  };

  return (
    <Card className="p-6 space-y-8">
      {(Object.entries(skillsData) as [keyof SkillsData, any][]).map(([key, categories]) =>
        renderSection(key, categories)
      )}
    </Card>
  );
}