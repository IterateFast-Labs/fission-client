'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';

import { cn } from '@/lib/utils';

export interface ClockProps {
  className?: string;
}

function formatDateTime(date: Date) {
  return date
    .toLocaleDateString('en-US', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    .replace(/,/g, '');
}

function Clock({ className }: ClockProps) {
  const timeRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (typeof window !== 'undefined') {
      interval = setInterval(() => {
        if (timeRef.current) {
          timeRef.current.textContent = formatDateTime(new Date());
        }
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p
      role="button"
      className={cn('font-bold text-white tracking-tight', className)}
      ref={timeRef}
    >
      {formatDateTime(new Date())}
    </p>
  );
}

export default dynamic(() => Promise.resolve(Clock), {
  ssr: false,
});
