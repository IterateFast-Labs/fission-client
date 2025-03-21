import { useEffect, useState } from 'react';

export default function MemoryCounter() {
  // 0MB -> 4000MB 숫자가 증가하는 애니메이션

  const [memory, setMemory] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (memory < 4000) {
        setMemory(memory + 100);
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [memory]);

  return (
    <span>
      {memory}MB {memory === 4000 && 'OK'}
    </span>
  );
}
