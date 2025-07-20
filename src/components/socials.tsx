
"use client";

import { useState } from 'react';
import { socialLinks } from '@/lib/data';
import { Button } from './ui/button';
import { Plus, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

export function Socials() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const dialRadius = 80; // distance of icons from center
    const angleIncrement = 360 / socialLinks.length;

    return (
        <TooltipProvider>
            <div className="relative">
                <Button 
                    variant="outline" 
                    size="icon" 
                    className="rounded-full w-10 h-10 z-10 relative transition-transform duration-300 transform hover:scale-110" 
                    onClick={toggleMenu}
                    aria-label="Open social links"
                    aria-expanded={isOpen}
                >
                    <Plus className={cn("h-5 w-5 transition-transform duration-300", isOpen && "rotate-45 scale-0")} />
                    <X className={cn("h-5 w-5 absolute transition-transform duration-300", !isOpen && "rotate-45 scale-0")} />
                </Button>
                
                {socialLinks.map((link, index) => {
                    const angle = angleIncrement * index - 90; // Start from top
                    const x = dialRadius * Math.cos(angle * Math.PI / 180);
                    const y = dialRadius * Math.sin(angle * Math.PI / 180);

                    return (
                        <Tooltip key={link.name}>
                            <TooltipTrigger asChild>
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={link.name}
                                    className={cn(
                                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-all duration-300 ease-out",
                                        isOpen ? "opacity-100" : "opacity-0 scale-50"
                                    )}
                                    style={{
                                        transform: isOpen 
                                            ? `translate(-50%, -50%) translate(${x}px, ${y}px) scale(1)` 
                                            : `translate(-50%, -50%) translate(0, 0) scale(0.5)`,
                                        transitionDelay: isOpen ? `${index * 30}ms` : '0ms'
                                    }}
                                >
                                    <link.icon className="h-5 w-5" />
                                </a>
                            </TooltipTrigger>
                            <TooltipContent side="bottom" className="bg-primary text-primary-foreground">
                                <p>{link.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    );
                })}
            </div>
        </TooltipProvider>
    );
}
