"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, Loader2, Mic, Send, Sparkles, X, Code, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { tradingExplanation } from '@/ai/flows/trading-explanation';
import { projectExplanation } from '@/ai/flows/project-explanation';
import { projects } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

type Message = {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  audio?: string;
};

type InteractionMode = 'idle' | 'trading' | 'projects';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<InteractionMode>('idle');
  const [projectSelection, setProjectSelection] = useState('');
  const [isListening, setIsListening] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
    }
  }, [messages]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new (window as any).webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        toast({ title: 'Voice Error', description: `Speech recognition error: ${event.error}`, variant: 'destructive'});
        setIsListening(false);
      };
      
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, [toast]);
  
  const handleVoiceInput = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      if(!recognitionRef.current) {
        toast({ title: 'Unsupported', description: 'Voice input is not supported in your browser.', variant: 'destructive' });
        return;
      }
      recognitionRef.current?.start();
    }
    setIsListening(prev => !prev);
  };


  const addMessage = (role: Message['role'], content: string, audio?: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), role, content, audio }]);
  };

  const handleModeSelection = (newMode: InteractionMode) => {
    setMode(newMode);
    setInput('');
    if (newMode === 'trading') {
      addMessage('system', 'You can ask me to explain a trading concept (e.g., "What are Order Blocks?").');
    } else if (newMode === 'projects') {
      addMessage('system', 'Please select a project from the dropdown to get an AI-powered explanation.');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input && mode !== 'projects') return;

    let userMessage = input;
    if (mode === 'projects') {
        const selectedProject = projects.find(p => p.name === projectSelection);
        if (!selectedProject) {
            addMessage('system', 'Please select a project first.');
            return;
        }
        userMessage = `Explain the project: ${selectedProject.name}`;
    }

    addMessage('user', userMessage);
    setInput('');
    setIsLoading(true);

    try {
      if (mode === 'trading') {
        const res = await tradingExplanation({ concept: input });
        addMessage('assistant', res.explanation, res.audio);
      } else if (mode === 'projects') {
        const selectedProject = projects.find(p => p.name === projectSelection);
        const res = await projectExplanation({ projectName: selectedProject!.name, projectDescription: selectedProject!.description });
        addMessage('assistant', res.explanation);
      }
    } catch (error) {
      console.error('AI Chat Error:', error);
      addMessage('assistant', 'Sorry, I encountered an error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetChat = () => {
    setMessages([]);
    setMode('idle');
    setInput('');
    setProjectSelection('');
  }

  return (
    <>
    <audio ref={audioRef} />
    <Sheet open={isOpen} onOpenChange={(open) => {
      setIsOpen(open);
      if(!open) resetChat();
    }}>
      <SheetTrigger asChild>
        <Button className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg" size="icon">
          <Bot className="h-8 w-8" />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:w-[500px] sm:max-w-none flex flex-col p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" /> AI Assistant
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={cn("flex items-start gap-3", msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                {msg.role === 'assistant' && (
                  <Avatar className="h-8 w-8 border">
                    <AvatarFallback><Bot /></AvatarFallback>
                  </Avatar>
                )}
                 <div className={cn(
                    "rounded-lg p-3 max-w-sm text-sm", 
                    msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-secondary',
                    msg.role === 'system' && 'w-full bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 text-center italic'
                  )}>
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                  {msg.audio && (
                    <Button variant="outline" size="sm" className="mt-2" onClick={() => audioRef.current?.play()}>
                      Play Audio
                    </Button>
                  )}
                 </div>
              </div>
            ))}
             {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                <Avatar className="h-8 w-8 border"><AvatarFallback><Bot /></AvatarFallback></Avatar>
                <div className="rounded-lg p-3 max-w-sm text-sm bg-secondary flex items-center">
                    <Loader2 className="h-5 w-5 animate-spin"/>
                </div>
              </div>
            )}
            {messages.length === 0 && (
                <div className="text-center p-4">
                    <p className="text-muted-foreground mb-4">What would you like to discuss?</p>
                    <div className="flex gap-2 justify-center">
                        <Button variant="outline" onClick={() => handleModeSelection('trading')}><TrendingUp className="mr-2 h-4 w-4"/>Trading</Button>
                        <Button variant="outline" onClick={() => handleModeSelection('projects')}><Code className="mr-2 h-4 w-4"/>Projects</Button>
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
        {mode !== 'idle' && (
            <div className="p-4 border-t bg-background">
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              {mode === 'projects' ? (
                <Select value={projectSelection} onValueChange={setProjectSelection}>
                  <SelectTrigger className="flex-1"><SelectValue placeholder="Select a project" /></SelectTrigger>
                  <SelectContent>
                    {projects.map(p => <SelectItem key={p.name} value={p.name}>{p.name}</SelectItem>)}
                  </SelectContent>
                </Select>
              ) : (
                <Input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask about a trading concept..." className="flex-1" disabled={isLoading} />
              )}
               {mode === 'trading' && (
                <Button size="icon" variant="ghost" type="button" onClick={handleVoiceInput} disabled={isLoading} className={cn(isListening && 'text-red-500')}>
                    <Mic className="h-5 w-5" />
                </Button>
               )}
              <Button type="submit" size="icon" disabled={isLoading}>
                <Send className="h-5 w-5" />
              </Button>
            </form>
            <Button variant="link" size="sm" className="w-full mt-2 text-muted-foreground" onClick={resetChat}>Start Over</Button>
            </div>
        )}
      </SheetContent>
    </Sheet>
    </>
  );
}
