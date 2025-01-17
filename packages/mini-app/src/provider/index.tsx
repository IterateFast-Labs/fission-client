import { ReactNode } from 'react';

import { React95Provider } from './react-95';

export function Provider({ children }: { children: ReactNode }) {
  return <React95Provider>{children}</React95Provider>;
}
