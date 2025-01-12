'use client';

import React, { JSX, useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { navigationItems } from '@/assets/data/navigationData';
import Link from 'next/link';

export default function MobileMenu(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        {/* Accessibility Title */}
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
        </SheetHeader>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4">
          {navigationItems.map((item) => (
            <div key={item.title}>
              {item.items ? (
                <>
                  <div className="text-lg font-medium mb-2">{item.title}</div>
                  <div className="pl-4 flex flex-col gap-2">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-muted-foreground hover:text-primary"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium hover:text-primary"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
