import React, { memo, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

export const TimingFrame = memo(function TimingFrame({
  start = 0,
  display,
  children,
}: {
  start?: number; // second
  display: boolean;
  children: React.ReactNode;
}) {
  const [_displayed, setDisplayed] = useState<boolean>(display);

  useEffect(() => {
    if (display) {
      setTimeout(() => {
        setDisplayed(true);
      }, start * 1000);
    }
  }, [display, start]);

  return _displayed ? <>{children}</> : null;
});

const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
  
}
`;

export const Timing = styled(
  ({
    start,
    duration,
    className,
    onAnimationEnd,
    children,
  }: {
    className?: string;
    onAnimationEnd?: (event: React.AnimationEvent<HTMLDivElement>) => void;
    children?: React.ReactNode;
    start: number; // second
    duration: number; // second
    blank?: boolean;
    fullWidth?: boolean;
  }) => {
    const wrappedOnAnimationEnd = (
      event: React.AnimationEvent<HTMLDivElement>,
    ) => {
      setTimeout(
        () => {
          onAnimationEnd?.(event);
        },
        (start + duration) * 1000,
      );
    };

    return (
      <div className={className} onAnimationEnd={wrappedOnAnimationEnd}>
        {children}
      </div>
    );
  },
)<{
  start: number; // second
  duration: number; // second
  blank?: boolean;
  fullWidth?: boolean;
}>`
  opacity: 0;
  animation-name: ${fadeIn};
  animation-duration: ${(props) => props.duration}s;
  animation-delay: ${(props) => props.start}s;
  animation-timing-function: steps(1, end);
  animation-fill-mode: forwards;
  ${(props) => props.blank && 'height: 1rem;'}
  ${(props) => props.fullWidth && 'width: 100%;'}
`;
