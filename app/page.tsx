import { Header, Footer } from "@/components/layout"
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "@/components/sections"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
