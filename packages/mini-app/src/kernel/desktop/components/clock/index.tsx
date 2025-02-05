import { useEffect, useRef } from 'react';

import { StyledFrame } from './index.style';

export function Clock() {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        ref.current.innerText = new Date().toLocaleTimeString('en-US', {
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
      <p ref={ref}>
        {new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
        })}
      </p>
    </StyledFrame>
  );
}
