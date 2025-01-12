import React from "react";

export interface Experience {
  title: string;
  company: string;
  date: string;
  achievements: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Test Engineer Intern (QA)",
    company: "TechSolutions Inc.(Remote)",
    date: "04/2023 – 06/2024",
    achievements: [
      "Designed and implemented automated test cases, increasing testing efficiency by 45% using Cypress and Selenium.",
      "Conducted API testing with Postman, ensuring seamless integration of backend services.",
      "Collaborated with development teams to integrate CI/CD pipelines, reducing deployment errors by 30%.",
      "Wrote detailed test plans and reports to track software quality metrics across multiple releases.",
    ],
  },
  {
    title: "Freelance Web & Android Developer | Content Creator",
    company: "Self-Employed",
    date: "2019 – Present",
    achievements: [
      "Built responsive websites using modern front-end technologies, delivering scalable solutions for clients.",
      "Designed and deployed Android applications with optimized performance for mobile platforms.",
      "Created tech-focused video tutorials and blog posts, growing an engaged online audience.",
    ],
  },
  {
    title: "IT and Product Manager",
    company: "Everything Beaded (Remote)",
    date: "10/2020 – 04/2022",
    achievements: [
      "Spearheaded product management, increasing e-commerce sales by 30% with UX/UI enhancements and backend optimization.",
      "Reduced operational downtime by 40% by implementing a remote IT support system.",
    ],
  },
  {
    title: "Software Test Engineer (QC)",
    company: "Ghana Food and Drugs Authority",
    date: "08/2019 – 10/2020",
    achievements: [
      "Streamlined data pipeline processes, achieving 98% data accuracy through automated data cleaning.",
      "Conducted performance testing and validated system reliability through rigorous end-to-end testing.",
      "Improved defect resolution rates by 30% using JIRA for defect tracking and sprint planning.",
    ],
  },
  {
    title: "Technical Support and Database Assistant",
    company: "CCML Microfinance",
    date: "12/2018 – 06/2019",
    achievements: [
      "Delivered database support, reducing query execution time by 40% and improving system reliability through regular optimization.",
      "Automated backup processes, cutting recovery time during incidents by 50%.",
      "Provided IT support, reducing response times by 30% with a ticketing system.",
    ],
  },
  {
    title: "Marketing Assistant & Content Creator",
    company: "RimberioFradel and Spies Co",
    date: "12/2017 – 02/2018",
    achievements: [
      "Boosted marketing campaign engagement by 15% through data-driven strategies and optimized workflows.",
      "Created targeted content for digital marketing campaigns, enhancing customer interaction rates.",
    ],
  },
];

const parseStartDate = (date: string): Date => {
  const startDate = date.split("–")[0].trim();
  const [month, year] = startDate.split("/").reverse();
  return new Date(`${year}/${month || "01"}`);
};

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

export const timelineData: TimelineItem[] = experiences
  .sort((a, b) => parseStartDate(b.date).getTime() - parseStartDate(a.date).getTime())
  .map((experience) => ({
    title: `${experience.title} at ${experience.company} (${experience.date})`,
    content: React.createElement('ul', { className: "list-disc pl-5" },
      experience.achievements.map((achievement, index) =>
        React.createElement('li', {
          key: index,
          className: "text-sm text-muted-foreground"
        }, achievement)
      )
    )
  }));