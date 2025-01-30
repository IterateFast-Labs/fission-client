import React, { ComponentPropsWithRef, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

interface TypingProps extends ComponentPropsWithRef<'p'> {
  delayPerChar?: number;
  animationPlayState?: 'running' | 'paused';
}

export function Typing({
  children,
  ref,
  delayPerChar = 0.01,
  animationPlayState = 'running',
  onAnimationEnd,
  ...props
}: TypingProps) {
  let chunks: React.ReactNode[] = [];
  let animationEndCount: number = 0;

  if (typeof children === 'string') {
    chunks = children.split('').map((chunk, index) => {
      animationEndCount += 1;
      return (
        <span
          className="char"
          key={index}
          style={
            {
              '--char-index': index,
            } as React.CSSProperties
          }
        >
          {chunk}
        </span>
      );
    });
  }

  if (Array.isArray(children)) {
    let index = 0;

    for (let i = 0; i < children.length; i++) {
      const chunk = children[i];

      if (typeof chunk === 'string') {
        chunks = [
          ...chunks,
          ...chunk.split('').map((char) => {
            animationEndCount += 1;
            return (
              <span
                className="char"
                key={index++}
                style={
                  {
                    '--char-index': index,
                  } as React.CSSProperties
                }
              >
                {char}
              </span>
            );
          }),
        ];
      } else {
        chunks.push(chunk);
      }
    }
  }

  // ref to keep track of the animation end count
  const count = useRef(animationEndCount);

  const handleAnimationEnd = (
    event: React.AnimationEvent<HTMLParagraphElement>,
  ) => {
    count.current -= 1;

    if (count.current === 0 && onAnimationEnd) {
      onAnimationEnd(event);
    }
  };

  return (
    <StyledParagraph
      ref={ref}
      $delayPerChar={delayPerChar}
      $animationPlayState={animationPlayState}
      onAnimationEnd={handleAnimationEnd}
      {...props}
    >
      {chunks}
    </StyledParagraph>
  );
}

const typing = keyframes`
    from { 
        opacity: 0;
        min-width: 0;
    }
    to {        
        opacity: 1;
        min-width: 1ch;
    }
`;

const StyledParagraph = styled.p<{
  $delayPerChar?: number;
  $animationPlayState?: 'running' | 'paused';
}>`
  .char {
    display: inline;
    position: relative;

    opacity: 0;
    min-width: 0;

    animation-name: ${typing};

    animation-duration: 0;
    animation-play-state: ${(props) => props.$animationPlayState};

    animation-fill-mode: forwards;
    animation-delay: calc(
      (var(--char-index) + 1) * ${(props) => props.$delayPerChar}s
    );
  }
`;
