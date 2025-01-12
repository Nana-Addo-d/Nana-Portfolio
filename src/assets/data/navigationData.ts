interface NavigationItem {
  title: string;
  href: string;
  items?: SubNavigationItem[];
}

interface SubNavigationItem {
  title: string;
  href: string;
  description: string;
  tab?: string;
}

export const navigationItems: NavigationItem[] = [
  {
    title: "Home",
    href: "#hero",
  },
  {
    title: "About",
    href: "#about",
    items: [
      {
        title: "Overview",
        href: "#about",
        tab: "overview",
        description: "Professional summary and key areas of expertise.",
      },
      {
        title: "Skills",
        href: "#about",
        tab: "skills",
        description: "Technical, programming, and language proficiencies.",
      },
      {
        title: "Experience",
        href: "#about",
        tab: "experience",
        description: "Professional work history and achievements.",
      },
      {
        title: "Education",
        href: "#about",
        tab: "education",
        description: "Academic background and additional qualifications.",
      }
    ],
  },
  {
    title: "Projects",
    href: "#projects",
    items: [
      {
        title: "Featured Projects",
        href: "#projects",
        description: "Showcase of my best work and key developments.",
      }
    ],
  },
  {
    title: "Contact",
    href: "#contact",
  },
];