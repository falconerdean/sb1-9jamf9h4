'use client';

import './globals.css';
import type { Metadata } from 'next';
import { usePathname } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

// Metadata needs to be in a separate file when using client components
const metadata = {
  title: 'Kind Consciousness Counseling Services',
  description: 'Professional counseling services for mental health, substance abuse, and men\'s mental health.',
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className={isHomePage ? '' : 'main-with-bg'}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}