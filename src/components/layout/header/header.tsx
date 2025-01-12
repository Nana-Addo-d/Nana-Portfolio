'use client';

import React, { useState, useEffect, JSX} from 'react';
import { Navigation } from './navigation';
import ThemeToggle from './themeToggle';
import MobileMenu from './mobileMenu';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';


export default function Header(): JSX.Element {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-sm border-b shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              NB
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Navigation />
          </div>

          {/* Right Side Items */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>

      {/* Separator Below Header */}
      <Separator orientation="horizontal" />
    </header>
  );
}
