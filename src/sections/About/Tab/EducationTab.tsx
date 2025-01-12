// src/sections/About/Tab/EducationTab.tsx
"use client";

import { Card } from "@/components/ui/card";
import { educationData } from "@/assets/data/educationData";
import { BookOpen, Award } from "lucide-react";

export function EducationTab() {
  const renderEducationItem = (edu: typeof educationData.degrees[0], index: number, arrayLength: number) => (
    <div key={edu.degree} className="relative">
      {/* Timeline connector */}
      {index !== arrayLength - 1 && (
        <div className="absolute left-4 top-12 h-full w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
      )}
      
      <div className="flex gap-6">
        {/* Icon */}
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/20">
          {edu.type === 'degree' ? (
            <BookOpen className="h-4 w-4 text-primary" />
          ) : (
            <Award className="h-4 w-4 text-primary" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          {/* Header */}
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <h3 className="font-semibold text-lg">{edu.degree}</h3>
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              {edu.date}
            </span>
          </div>

          {/* School Info */}
          <div className="space-y-1">
            <p className="text-base font-medium">{edu.school}</p>
            {edu.location && (
              <p className="text-sm text-muted-foreground">{edu.location}</p>
            )}
          </div>

          {/* Description */}
          {edu.description && (
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              {edu.description.map((desc, i) => (
                <li key={i} className="pl-2">{desc}</li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Separator for all but last item */}
      {index !== arrayLength - 1 && (
        <div className="h-8" />
      )}
    </div>
  );

  return (
    <Card className="p-6">
      <div className="space-y-12">
        {/* Degrees Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Degrees</h2>
          <div className="space-y-8">
            {educationData.degrees.map((edu, index) => 
              renderEducationItem(edu, index, educationData.degrees.length)
            )}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Additional Qualifications</h2>
          <div className="space-y-8">
            {educationData.certifications.map((cert, index) => 
              renderEducationItem(cert, index, educationData.certifications.length)
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}