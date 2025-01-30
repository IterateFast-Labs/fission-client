import { ReactNode } from 'react';

import { React95Provider } from './react-95';
import { TanstackQueryProvider } from './tanstack-query';
import { ToastProvider } from './toast';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <TanstackQueryProvider>
      <React95Provider>
        <ToastProvider>{children}</ToastProvider>
      </React95Provider>
    </TanstackQueryProvider>
  );
}
