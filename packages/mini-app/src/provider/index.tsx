import { ReactNode } from 'react';

import { AlertProvider } from './alert';
import { DisableDevtoolProvider } from './disable-devtool';
import { ErudaProvider } from './eruda';
import { GoogleAnalytics4Provider } from './ga4';
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
            <AlertProvider>
              <DisableDevtoolProvider />
              <TelegramAppProvider>
                <GoogleAnalytics4Provider>{children}</GoogleAnalytics4Provider>
              </TelegramAppProvider>
            </AlertProvider>
          </ToastProvider>
        </React95Provider>
      </TanstackQueryProvider>
    </ErudaProvider>
  );
}
