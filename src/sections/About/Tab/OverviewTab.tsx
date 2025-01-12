// src/sections/About/Tab/OverviewTab.tsx
"use client";

import { Card } from "@/components/ui/card";
import { Bug, Code, Database, Laptop, Newspaper, TestTube2 } from "lucide-react";

interface ExperienceArea {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const experienceAreas: ExperienceArea[] = [
  {
    icon: <TestTube2 className="h-6 w-6" />,
    title: "QA & Testing",
    description: "Specialized in automated and manual testing, ensuring robust software quality through comprehensive test strategies and process optimization."
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Web Development",
    description: "Proficient in creating responsive web applications using modern frameworks and best practices in front-end development."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database Management",
    description: "Experienced in designing and managing databases, with expertise in optimization and data integrity maintenance."
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: "Programming",
    description: "Strong foundation in multiple programming languages including Python, Java, and JavaScript, with a focus on clean, efficient code."
  },
  {
    icon: <Bug className="h-6 w-6" />,
    title: "Quality Control",
    description: "Dedicated to maintaining high quality standards through systematic testing and continuous improvement processes."
  },
  {
    icon: <Newspaper className="h-6 w-6" />,
    title: "Content Creation",
    description: "Skilled in creating technical content and documentation, with experience in various digital marketing platforms."
  }
];

export function OverviewTab() {
  return (
    <Card className="p-6">
      <div className="space-y-8">
        {/* Professional Summary Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Experienced Software Test Engineer specializing in QA & QC with additional skills in web
            development, front-end development, database management, Android development, and content
            creation. Known for a detail-oriented approach in testing automation, process optimization,
            and cross-functional collaboration. Proficient in creating robust applications and
            content-driven projects, with a broad technical skill set including Python, Java,
            JavaScript, and Cypress.
          </p>
        </div>

        {/* Separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />

        {/* Key Areas Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-center">Key Areas of Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceAreas.map((area) => (
              <div
                key={area.title}
                className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-card hover:shadow-md transition-shadow space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {area.icon}
                  </div>
                  <h4 className="font-semibold">{area.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="rounded-lg bg-muted/50 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            Always eager to learn and adapt to new technologies while maintaining a strong focus on code quality and user experience.
          </p>
        </div>
      </div>
    </Card>
  );
}