"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { projects } from '@/lib/data';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { projectExplanation } from '@/ai/flows/project-explanation';
import { Skeleton } from '../ui/skeleton';
import { Bot, Code, Link as LinkIcon, Loader2 } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';

function ProjectExplanation({ projectName, projectDescription }: { projectName: string; projectDescription: string; }) {
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleExplanation = async () => {
    setIsLoading(true);
    try {
      const result = await projectExplanation({ projectName, projectDescription });
      setExplanation(result.explanation);
    } catch (error) {
      console.error('Failed to explain project:', error);
      setExplanation('Could not load explanation at this time.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog onOpenChange={(open) => { if(open && !explanation) { handleExplanation(); }}}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm"><Bot className="mr-2 h-4 w-4" /> Explain This Project</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>AI Explanation: {projectName}</DialogTitle>
          <DialogDescription>
            An AI-generated overview of the project's technology and challenges.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          {isLoading ? (
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          ) : (
            <ScrollArea className="h-[200px] pr-4">
               <p className="text-sm text-muted-foreground whitespace-pre-wrap">{explanation}</p>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-secondary/50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">My Projects</h2>
          <p className="text-lg text-muted-foreground mt-2">A selection of my work. Hover for details.</p>
        </div>
        
        <Carousel opts={{ align: "start", loop: true, }} className="w-full">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full overflow-hidden group">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="relative h-52">
                        <Image
                          src={project.image}
                          alt={project.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          data-ai-hint={project.imageAiHint}
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold font-headline">{project.name}</h3>
                        <p className="text-muted-foreground mt-2 flex-grow">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2 my-4">
                            {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>

                        <div className="flex flex-wrap gap-2 items-center mt-auto">
                            <Button asChild size="sm">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Code className="mr-2 h-4 w-4" /> View Code
                                </a>
                            </Button>
                           <ProjectExplanation projectName={project.name} projectDescription={project.description} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
