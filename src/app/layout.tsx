import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from "@vercel/analytics/react"
import AIChat from '@/components/ai-chat';

export const metadata: Metadata = {
  title: 'Prabhat Kumar: AI-Powered Portfolio',
  description: 'Prabhat Kumar - Software Engineer, AI Enthusiast, Trader, and Author. Merging Intelligence with Innovation.',
  keywords: ['Prabhat Kumar', 'Software Engineer', 'AI', 'Java Developer', 'Trader', 'Author', 'Portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider>
          <div className="relative">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <main className="relative z-10">
              {children}
            </main>
          </div>
          <Toaster />
          <AIChat />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
