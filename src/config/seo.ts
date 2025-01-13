// src/config/seo.ts
import { socialLinks } from '@/assets/data/socialLinks';
import { heroDetails } from '@/assets/data/heroData';

interface SocialLinks {
  name: string;
  href: string;
}

export const siteConfig = {
  name: heroDetails.name,
  shortName: "Nana Addo Bampoe",
  title: `${heroDetails.name} - Portfolio`,
  description: heroDetails.title,
  url: 'https://nanaadd.dev', // Update with your actual domain
  ogImage: '/images/og-image.jpg',
  links: {
    github: socialLinks.find((link: SocialLinks) => link.name === 'GitHub')?.href || '',
    linkedin: socialLinks.find((link: SocialLinks) => link.name === 'LinkedIn')?.href || '',
    twitter: socialLinks.find((link: SocialLinks) => link.name === 'Twitter')?.href || '',
    email: socialLinks.find((link: SocialLinks) => link.name === 'Email')?.href || '',
  },
  contact: heroDetails.contactInfo,
};

export function constructMetadata() {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.shortName}`,
    },
    description: siteConfig.description,
    keywords: [
      'Software Test Engineer',
      'Web Development',
      'Android Development',
      'Quality Assurance',
      'Content Creation',
      'Portfolio',
      'Test Automation',
      heroDetails.name,
    ],
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: siteConfig.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.links.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
  };
}
