import { type VariantProps, cva } from 'class-variance-authority';
import { RefObject } from 'react';

export const buttonVariants = cva('cursor-pointer', {
  variants: {
    size: {
      base: 'px-2.5 py-2',
    },
    variant: {
      solid: 'bg-primary text-white hover:bg-white hover:text-primary',
      outline:
        'bg-primary text-white border-4 border-double border-white hover:bg-white hover:text-primary',
    },
  },
  defaultVariants: {
    variant: 'outline',
    size: 'base',
  },
});

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  ref?: RefObject<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({
  ref,
  children,
  className,
  variant,
}: ButtonProps) {
  return (
    <button
      ref={ref}
      className={buttonVariants({
        variant,
        className,
      })}
    >
      {children}
    </button>
  );
}
