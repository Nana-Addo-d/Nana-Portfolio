//src\assets\data\heroData.ts
import { Download, FolderOpen, Mail, Calendar, ChevronDown, LucideIcon } from "lucide-react";


interface HeroDetails {
  name: string;
  shortName: string;
  title: string;
  tagline: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
  };
  introduction: {
    main: string;
    roles: string[];
    description: string;
  };
  ctas: CTA[];
  typewriterText: TypewriterText[];
  stats: Stat[];
  availability: Availability;
  scrollPrompt: ScrollPrompt;
}

interface CTA {
  label: string;
  href: string;
  variant: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  icon: LucideIcon;
}

interface TypewriterText {
  text: string;
  className: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Availability {
  status: string;
  message: string;
  calendarLink: string;
  icon: React.ComponentType;
}

interface ScrollPrompt {
  text: string;
  icon: React.ComponentType;
}

export const heroDetails: HeroDetails = {
  name: "Nana Addo Dankwa Bampoe Addo",
  shortName: "Nana Bampoe",
  title: "Software Test Engineer | Web & Android Developer | Content Creator",
  tagline: "Building reliable software through comprehensive testing and development",
  contactInfo: {
    address: "📍 Dr. Hans Kapfinger Straße 13, Passau",
    phone: "📞 +49 176 74909252",
    email: "✉️ andybampoe.ad@gmail.com",
  },
  introduction: {
    main: "Building digital experiences through quality engineering",
    roles: [
      "Software Test Engineer",
      "Web Developer",
      "Android Developer",
      "Content Creator",
    ],
    description: "Specializing in automated testing, web development, and creating engaging technical content.",
  },
  ctas: [
    {
      label: "View Projects",
      href: "#projects",
      variant: "default",
      icon: FolderOpen,
    },
    {
      label: "Contact Me",
      href: "#contact",
      variant: "outline",
      icon: Mail,
    },
    {
      label: "Download CV",
      href: "/resume.pdf",
      variant: "ghost",
      icon: Download,
    },
  ],
  typewriterText: [
    { text: "Software", className: "text-primary" },
    { text: "Test", className: "text-primary/80" },
    { text: "Engineer", className: "text-primary/60" },
    { text: "&", className: "text-muted-foreground" },
    { text: "Developer", className: "text-accent" },
  ] as TypewriterText[],
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Code Coverage", value: "95%" },
    { label: "Happy Clients", value: "30+" },
  ],
  availability: {
    status: "available",
    message: "Open to new opportunities",
    calendarLink: "https://calendly.com/your-link",
    icon: Calendar,
  },
  scrollPrompt: {
    text: "Scroll to explore",
    icon: ChevronDown,
  },
};
