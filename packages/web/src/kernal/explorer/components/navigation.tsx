import { cn } from '@/lib/utils';

import Clock from './clock';

export interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  return (
    <nav
      className={cn(
        'container mx-auto bg-primary h-8 px-3 py-0 overflow-x-auto overflow-y-hidden',
        className,
      )}
    >
      <Clock className="w-fit leading-8 whitespace-nowrap" />
    </nav>
  );
}
