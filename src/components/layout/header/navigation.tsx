'use client';

import React, { JSX } from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { navigationItems } from '@/assets/data/navigationData';
import { useScroll } from '@/context/ScrollContext';

interface ListItemProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, onClick, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            href={href}
            onClick={onClick}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';

export function Navigation(): JSX.Element {
  const { scrollTo, activeSection } = useScroll();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    if (href.startsWith('#')) {
      scrollTo(href.substring(1));
    }
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationItems.map((item) => (
          <NavigationMenuItem key={item.title}>
            {item.items ? (
              <>
                <NavigationMenuTrigger
                  className={cn(
                    item.items.some(
                      (subItem) => subItem.href.substring(1) === activeSection
                    ) && 'text-primary'
                  )}
                >
                  {item.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {item.items.map((subItem) => (
                      <ListItem
                        key={subItem.title}
                        title={subItem.title}
                        href={subItem.href}
                        onClick={(e) => handleClick(e, subItem.href)}
                        className={cn(
                          subItem.href.substring(1) === activeSection &&
                            'bg-accent text-accent-foreground'
                        )}
                      >
                        {subItem.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  navigationMenuTriggerStyle(),
                  item.href.substring(1) === activeSection && 'text-primary'
                )}
              >
                {item.title}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
