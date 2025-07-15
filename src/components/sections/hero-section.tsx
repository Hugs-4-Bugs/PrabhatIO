"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const titles = ["Java Developer.", "AI Innovator.", "Trader.", "Author."];

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedTitle, setDisplayedTitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex];
      if (isDeleting) {
        setDisplayedTitle(currentTitle.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setDisplayedTitle(currentTitle.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 75 : 120);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentTitleIndex]);

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div className="container grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-20 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tighter">
            Prabhat Kumar
            <span className="block text-gradient mt-2 min-h-[4rem] md:min-h-[5rem] lg:min-h-[7rem]">
              {displayedTitle}
              <span className="opacity-50">|</span>
            </span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl">
            Merging Intelligence with Innovation.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" asChild>
              <Link href="#projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto animate-fade-in [animation-delay:200ms]">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-3xl animate-hero-glow"></div>
          <Image
            src="https://placehold.co/600x600.png"
            alt="Prabhat Kumar"
            width={600}
            height={600}
            priority
            className="rounded-full object-cover z-10 relative border-8 border-background/50 shadow-2xl"
            data-ai-hint="man portrait"
          />
        </div>
      </div>
    </section>
  );
}
