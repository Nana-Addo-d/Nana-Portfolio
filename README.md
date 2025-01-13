This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


# Portfolio Website

## Overview
This repository hosts the source code for a cutting-edge personal portfolio website. It leverages **React**, **Next.js 13+**, **TypeScript**, and **Tailwind CSS** to provide a dynamic and interactive user experience. The project is optimized for both performance and scalability, with features like responsive design, accessibility compliance, and modular architecture.

## Key Features

- **Hero Section**: A visually appealing introduction with animations and a call-to-action.
- **Tabbed About Section**: Showcases Professional Summary, Skills, Work Experience, and Education.
- **Projects Section**: Includes a 3D interactive card design using `framer-motion` and Three.js.
- **Contact Section**: Functional contact form with field validation using Zod and React Hook Form.
- **Dark Mode Support**: Fully implemented dark/light theme toggling with `next-themes`.
- **SEO Optimized**: Configured with `next-seo` for search engine visibility.
- **Testing Setup**: Includes both unit and end-to-end tests using Jest and Cypress.

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) and `@tailwindcss/typography`
- **State Management**: `react-hook-form`, `zod`, and `@tanstack/react-query`
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Testing Tools**: [Cypress](https://www.cypress.io/), [Jest](https://jestjs.io/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Nana-Addo-d/nanaPortfolio.git
cd nanaPortfolio
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Deployment

Deploy using platforms like Vercel:

```bash
npm install -g vercel
vercel
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/           # Reusable UI components
│   ├── sections/             # Website sections (Hero, About, Projects, etc.)
│   ├── pages/                # Next.js pages
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Utility functions
│   ├── styles/               # CSS and Tailwind configurations
│   └── assets/               # Static data and images
├── public/                   # Static assets
├── tests/                    # Unit and E2E tests
├── tailwind.config.ts        # TailwindCSS configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
└── package.json              # Project metadata
```

## Key Configurations

### TailwindCSS

Custom theme extensions and animations are configured in `tailwind.config.ts` to provide a modern and vibrant look.

### TypeScript

Strict TypeScript rules are enforced via `tsconfig.json`, ensuring type safety and code reliability.

### Testing

- **Jest**: Configured for unit testing.
- **Cypress**: Configured for end-to-end testing.

### ESLint and Prettier

Integrated for code quality and consistent formatting.

## Features

### Hero Section
- Dynamic introduction with animations.
- Call-to-action buttons for user engagement.

### About Section
- Professional Summary, Skills, Experience, and Education.
- Tabs for organized content navigation.

### Projects Section
- Interactive 3D card effects using `framer-motion` and Three.js.
- Links to live demos and GitHub repositories.

### Contact Section
- Integrated form with validation for name, email, and message.
- Social media links and other contact methods.

## Testing

Run unit tests with Jest:

```bash
npm run test
```

Run end-to-end tests with Cypress:

```bash
npm run cypress
```

## Author
Nana Addo Dankwa Bampoe Addo  
📍 Dr. Hans Kapfinger Straße 13, Passau  
📞 +49 176 74909252  
✉️ [andybampoe.ad@gmail.com](mailto:andybampoe.ad@gmail.com)

## License
This project is licensed under the MIT License. See the LICENSE file for details.
