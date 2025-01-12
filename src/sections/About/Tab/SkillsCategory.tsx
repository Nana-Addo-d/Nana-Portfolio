// src/sections/About/Tab/SkillsCategory.tsx
"use client";

import { SkillCategory, LanguageSkill } from "@/assets/data/skillsData";

interface SkillsCategoryProps {
  readonly categories: SkillCategory[] | LanguageSkill[] | string[];
}

export function SkillsCategory({ categories }: SkillsCategoryProps) {
  // Handle different types of skill categories
  const renderSkills = () => {
    // If it's an array of strings (soft skills)
    if (typeof categories[0] === 'string') {
      return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {(categories as string[]).map((skill) => (
            <li
              key={skill}
              className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 p-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {skill}
            </li>
          ))}
        </ul>
      );
    }

    // If it's language skills
    if ('level' in (categories[0] as any)) {
      return (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {(categories as LanguageSkill[]).map((skill) => (
            <li
              key={skill.name}
              className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 p-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              {`${skill.name} (${skill.level})`}
            </li>
          ))}
        </ul>
      );
    }

    // If it's categorized skills
    return (
      <div className="space-y-8">
        {(categories as SkillCategory[]).map((category) => (
          <div key={category.category} className="space-y-4">
            <h4 className="text-lg font-semibold">{category.category}</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.items.map((item) => (
                <li
                  key={item.slug}
                  className="flex items-center justify-center text-sm text-gray-600 dark:text-gray-300 p-2 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {renderSkills()}
    </div>
  );
}