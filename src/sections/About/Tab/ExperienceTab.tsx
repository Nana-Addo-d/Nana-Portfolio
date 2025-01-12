"use client";

import { Card } from "@/components/ui/card";
import {timelineData} from "@/assets/data/workExperienceData";
import { Timeline } from "@/components/ui/timeline";

export function ExperienceTab() {
  return (
    <Card className="p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <Timeline data={timelineData} />
      </div>
    </Card>
  );
}
