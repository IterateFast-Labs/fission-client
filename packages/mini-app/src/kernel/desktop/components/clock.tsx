import { useEffect, useRef } from 'react';
import { Frame } from 'react95';
import styled from 'styled-components';

export function Clock() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        const date = new Date();
        ref.current.innerText = date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <StyledFrame variant="status">
      <p ref={ref}>0:00 PM</p>
    </StyledFrame>
  );
}

const StyledFrame = styled(Frame)`
  height: 36px;
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 1.125rem;
  }
`;
