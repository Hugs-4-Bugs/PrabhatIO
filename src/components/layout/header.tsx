
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks, socialLinks } from '@/lib/data';
import { ThemeToggle } from '../theme-toggle';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '../logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = (
    <>
      {navLinks.map((link) => (
        <Button key={link.name} variant="ghost" asChild>
          <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">{link.name}</Link>
        </Button>
      ))}
    </>
  );

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "border-b border-border/50 bg-background/80 backdrop-blur-lg" : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10">
            <Logo />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems}
        </nav>

        <div className="flex items-center gap-2">
            {isClient && (
                <div className="hidden md:flex items-center gap-1">
                {socialLinks.slice(0, 2).map((link) => (
                    <Button key={link.name} variant="ghost" size="icon" asChild>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <link.icon className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                    </a>
                    </Button>
                ))}
                </div>
            )}
            <ThemeToggle />
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="bg-background/90 backdrop-blur-lg">
                        <nav className="flex flex-col gap-4 mt-8">
                            {navItems}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
