import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import css from './timing.module.css';

export interface TimingFrameProps {
  start?: number;
  display: boolean;
  children: React.ReactNode;
  onDisplay?: () => void;
}
export function TimingFrame({
  start = 0,
  display,
  children,
  onDisplay,
}: TimingFrameProps) {
  const [_displayed, setDisplayed] = useState<boolean>(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (display) {
      timeout = setTimeout(() => {
        setDisplayed(true);
        onDisplay?.();
      }, start * 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [display, start]);

  return _displayed ? <>{children}</> : null;
}

export interface TimingProps {
  start: number;
  duration: number;
  children: React.ReactNode;
  className?: string;
  onAnimationEnd?: (event: React.AnimationEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

export function Timing({
  start,
  duration = 1,
  children,
  className,
  onAnimationEnd,
  style,
}: TimingProps) {
  return (
    <div
      className={cn(css.timing, className)}
      onAnimationEnd={onAnimationEnd}
      style={
        {
          ...style,
          '--timing-start': `${start}s`,
          '--timing-duration': `${duration}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
