import {
  ERR_UNKNOWN_ENV,
  TypedError,
  init,
  viewport,
} from '@telegram-apps/sdk';
import React from 'react';

export function TelegramAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = window.location;
  const isBluescreen = location.pathname.includes('/bluescreen');
  const isProd = import.meta.env.VITE_ENVIRONMENT === 'production';

  React.useEffect(() => {
    try {
      init();
      viewport.expand();
    } catch (error) {
      let errorType = '';

      if (error instanceof TypedError) {
        errorType = error.type;
      }

      if (errorType === ERR_UNKNOWN_ENV && !isBluescreen && isProd) {
        location.href = '/bluescreen';
      }
    }
  }, [location]);

  return <>{children}</>;
}
