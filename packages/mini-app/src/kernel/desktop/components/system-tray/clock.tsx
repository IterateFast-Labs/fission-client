import { memo, useEffect, useRef } from 'react';

export const Clock = memo(() => {
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
    <p ref={ref}>
      {new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
      })}
    </p>
  );
});
