'use client';

import { useEffect } from 'react';

export const ErudaProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (import.meta.env.VITE_ENVIRONMENT === 'development') {
      import('eruda').then((lib) => lib.default.init());
    }
  }, []);

  return children;
};
