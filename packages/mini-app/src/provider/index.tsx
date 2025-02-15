import { ReactNode } from 'react';

import { DisableDevtoolProvider } from './disable-devtool';
import { ErudaProvider } from './eruda';
import { React95Provider } from './react-95';
import { TanstackQueryProvider } from './tanstack-query';
import { TelegramAppProvider } from './telegram-app';
import { ToastProvider } from './toast';

export function Provider({ children }: { children: ReactNode }) {
  return (
    <ErudaProvider>
      <TanstackQueryProvider>
        <React95Provider>
          <ToastProvider>
            <DisableDevtoolProvider />
            <TelegramAppProvider>{children}</TelegramAppProvider>
          </ToastProvider>
        </React95Provider>
      </TanstackQueryProvider>
    </ErudaProvider>
  );
}
