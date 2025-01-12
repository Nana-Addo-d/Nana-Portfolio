'use client';

import { motion } from 'framer-motion';
import { socialLinks } from '@/assets/data/socialLinks';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { JSX } from 'react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  ariaLabel: string;
}

export default function SocialLinks(): JSX.Element {
  return (
    <div className="flex items-center space-x-4">
      <TooltipProvider>
        {socialLinks.map((social: SocialLink, index: number) => {
          const Icon = social.icon;
          return (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 hover:text-primary"
                    asChild
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.ariaLabel}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{social.name}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          );
        })}
      </TooltipProvider>
    </div>
  );
}
