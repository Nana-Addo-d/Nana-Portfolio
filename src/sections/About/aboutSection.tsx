"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OverviewTab } from "./Tab/OverviewTab";
import { SkillsTab } from "./Tab/SkillsTab";
import { ExperienceTab } from "./Tab/ExperienceTab";
import { EducationTab } from "./Tab/EducationTab";

export function AboutSection() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("overview");

  const tabItems = [
    { id: "overview", title: "Overview" },
    { id: "skills", title: "Skills" },
    { id: "experience", title: "Experience" },
    { id: "education", title: "Education" },
  ];

  // Handle tab changes from URL
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabItems.some(item => item.id === tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    // Update URL without page reload
    const url = new URL(window.location.href);
    url.searchParams.set("tab", value);
    window.history.pushState({}, "", url);
  };

  return (
    <section id="about" className="px-[2%] py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            {tabItems.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id}>
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="overview">
            <OverviewTab />
          </TabsContent>
          <TabsContent value="skills">
            <SkillsTab />
          </TabsContent>
          <TabsContent value="experience">
            <ExperienceTab />
          </TabsContent>
          <TabsContent value="education">
            <EducationTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}