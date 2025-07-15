"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { userDetails, education } from '@/lib/data';
import { generateAboutMe } from '@/ai/flows/dynamic-about-me';
import { Book, GraduationCap, Loader2, Sparkles, User, AudioWaveform } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

export function AboutSection() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentTone, setCurrentTone] = useState<'professional' | 'casual'>('professional');

  useEffect(() => {
    async function fetchSummary() {
      setIsLoading(true);
      try {
        const result = await generateAboutMe({ 
          length: isExpanded ? 'long' : 'short', 
          tone: currentTone, 
          userDetails 
        });
        setSummary(result.summary);
      } catch (error) {
        console.error('Failed to generate about me summary:', error);
        setSummary(isExpanded ? userDetails : userDetails.substring(0, 200) + '...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchSummary();
  }, [isExpanded, currentTone]);

  const toggleExpansion = () => setIsExpanded(!isExpanded);
  
  const toggleTone = () => setCurrentTone(prev => prev === 'professional' ? 'casual' : 'professional');

  return (
    <section id="about" className="bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground mt-2">A glimpse into my journey and passions.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <Card className="glassmorphism">
              <CardHeader>
                <div className="flex justify-between items-center">
                   <CardTitle className="flex items-center gap-2"><User /> Biography</CardTitle>
                   <div className="flex items-center gap-2">
                     <Button size="sm" variant="outline" onClick={toggleTone} disabled={isLoading}>
                       <Sparkles className="mr-2 h-4 w-4" />
                       {currentTone === 'professional' ? 'Make it Casual' : 'Make it Pro'}
                     </Button>
                   </div>
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">{summary}</p>
                )}
                <Button variant="link" onClick={toggleExpansion} className="px-0 mt-2">
                  {isExpanded ? 'Show Less' : 'Read More...'}
                </Button>
              </CardContent>
            </Card>

            <Card className="mt-8 glassmorphism">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><GraduationCap /> Education</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-full">
                        <edu.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{edu.institution}</h3>
                        <p className="text-sm text-muted-foreground">{edu.degree}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
             <Card className="glassmorphism">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Book /> Author of The Inner Battle</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <Image 
                        src="https://placehold.co/400x600.png"
                        alt="The Inner Battle Book Cover"
                        width={400}
                        height={600}
                        className="rounded-lg shadow-lg mx-auto mb-4 w-2/3"
                        data-ai-hint="book cover"
                    />
                    <p className="text-muted-foreground text-sm mb-4">A book about personal growth, resilience, and navigating life's challenges.</p>
                    <Button asChild>
                        <a href="https://github.com/PRABHAT-72/The-Inner-Battle" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </Button>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
