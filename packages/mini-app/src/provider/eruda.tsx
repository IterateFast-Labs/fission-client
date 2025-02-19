'use client';

import { useEffect } from 'react';

export const ErudaProvider = ({ children }: { children: React.ReactNode }) => {
  const isDev = import.meta.env.VITE_ENVIRONMENT === 'development';
  const isDisabled = import.meta.env.VITE_PROVIDER_DISABLE_ERUDA === 'true';

  useEffect(() => {
    if (isDev && !isDisabled) {
      import('eruda').then((lib) => lib.default.init());
    }
  }, []);

  return children;
};
