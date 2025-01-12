//src/app/page.tsx

"use client";

import React from "react";
import "@/app/globals.css";
import { ScrollProvider } from "@/context/ScrollContext";
import ScrollProgress from "@/components/ui/scroll-progress";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ContactSection } from "@/sections/Contact/contact";
import { heroProducts } from "@/assets/data/heroProducts";
import { AboutSection } from "@/sections/About/aboutSection";
import ProjectsSection from "@/sections/Project/projectSection";

export default function HomePage() {
  return (
    <ScrollProvider>
      <ScrollProgress />
      
      {/* Main Content with responsive container */}
      <main className="flex flex-col w-full mx-auto items-center justify-center bg-background">
        {/* Hero Section - Full width container */}
        <section className="w-full ">
          <div className="container mx-auto">
            <HeroParallax products={heroProducts} />
          </div>
        </section>

        {/* About Section - Full width container */}
        <section className="w-full">
          <div className="container mx-auto">
            <AboutSection />
          </div>
        </section>

        {/* Projects Section - Full width container */}
        <section className="w-full">
          <div className="container mx-auto">
            <ProjectsSection />
          </div>
        </section>

        {/* Contact Section - Full width container */}
        <section className="w-full">
          <div className="container mx-auto">
            <ContactSection />
          </div>
        </section>
      </main>
    </ScrollProvider>
  );
}