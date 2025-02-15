import { init, viewport } from '@telegram-apps/sdk';
import React from 'react';

export function TelegramAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  React.useEffect(() => {
    try {
      init();
      viewport.expand();
    } catch (error) {
      console.error('Failed to initialize Telegram App SDK', error);
    }
  }, []);

  return <>{children}</>;
}
