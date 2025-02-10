import React, {
  ComponentPropsWithRef,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled, { keyframes } from 'styled-components';

interface TypingProps extends ComponentPropsWithRef<'p'> {
  delayPerChar?: number;
  animationPlayState?: 'running' | 'paused';
  skipable?: boolean;
  onAnimationEnd?: () => void;
}

export function Typing({
  children,
  ref,
  delayPerChar = 0.02,
  animationPlayState = 'running',
  skipable = true,
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

  // animation skipped
  const [skipped, setSkipped] = useState(false);

  // ref to keep track of the animation end count
  const count = useRef(animationEndCount);

  const handleAnimationEnd = () => {
    count.current -= 1;

    if (count.current === 0 && onAnimationEnd) {
      onAnimationEnd();
    }
  };

  useEffect(() => {
    if (!skipable) {
      return;
    }

    const handleClick = () => {
      setSkipped(true);
      onAnimationEnd?.();
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <StyledParagraph
      ref={ref}
      $delayPerChar={delayPerChar}
      $animationPlayState={animationPlayState}
      $skipped={skipped}
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
  $skipped?: boolean;
}>`
  .char {
    display: inline;
    position: relative;
    opacity: ${(props) => (props.$skipped ? 1 : 0)};
    min-width: 0;
    animation-name: ${(props) => (props.$skipped ? 'none' : typing)};
    animation-duration: 0;
    animation-play-state: ${(props) => props.$animationPlayState};
    animation-fill-mode: forwards;
    animation-delay: calc(
      (var(--char-index) + 1) * ${(props) => props.$delayPerChar}s
    );
  }
`;
