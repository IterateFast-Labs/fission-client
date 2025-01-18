import { ReactNode } from 'react';

import { React95Provider } from './react-95';
import { TanstackQueryProvider } from './tanstack-query';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <TanstackQueryProvider>
      <React95Provider>{children}</React95Provider>
    </TanstackQueryProvider>
  );
}
