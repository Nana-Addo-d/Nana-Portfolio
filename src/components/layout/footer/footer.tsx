'use client';

import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import SocialLinks from './socialLinks';
import { Separator } from '@/components/ui/separator';
import { navigationItems } from '@/assets/data/navigationData';
import { contactData } from '@/assets/data/contactData';

export default function Footer(): JSX.Element {
  const [currentYear, setCurrentYear] = useState<string>('');

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  // Filter top-level navigation items for Quick Links
  const quickLinks = navigationItems.filter((item) => item.href);

  return (
    <footer className="w-full bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Nana Addo Dankwa Bampoe Addo</h3>
            <p className="text-sm text-muted-foreground">
              Software Test Engineer | Web & Android Developer | Content Creator
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{contactData.contactInfo.location.value}</p>
              <a
                href={`mailto:${contactData.contactInfo.email.value}`}
                className="hover:text-primary transition-colors"
              >
                {contactData.contactInfo.email.value}
              </a>
              <p>{contactData.contactInfo.phone.value}</p>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <SocialLinks />
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-muted-foreground">
          <p>© {currentYear} Nana Bampoe. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
