import type { Metadata } from 'next';

import { font } from '@/app/font';
import { Navigation } from '@/kernal/explorer/components/navigation';
import { cn } from '@/lib/utils';

import './globals.css';

export const metadata: Metadata = {
  title: 'Fission',
  description: 'Web3-powered, decentralized AI data ecosystem',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('bg-black', font.className)}>
        <div className="container min-h-svh mx-auto flex flex-col gap-0">
          <Navigation className="order-1 sm:-order-1 sticky bottom-0 sm:top-0" />
          {children}
        </div>
      </body>
    </html>
  );
}
