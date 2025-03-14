import {
  ERR_RETRIEVE_LP_FAILED,
  LaunchParams,
  TypedError,
  User,
  retrieveLaunchParams,
} from '@telegram-apps/sdk';
import { useEffect, useRef, useState } from 'react';

interface StartParams {
  deepLink: string;
  referralCode: string;
  [key: string]: string;
}

export enum TelegramInitStatus {
  'Idle' = 'Idle',
  'Pending' = 'Pending',
  'Success' = 'Success',
  'Failed' = 'Failed',
}

export function useTelegram() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isTMA, setIsTMA] = useState<boolean>(true);
  const [user, setUser] = useState<User>();

  const launchParams = useRef<LaunchParams>(undefined);
  const startParams = useRef<StartParams>(undefined);

  const [status, setStatus] = useState<TelegramInitStatus>(
    TelegramInitStatus.Idle,
  );

  useEffect(() => {
    setStatus(TelegramInitStatus.Pending);
    setLoading(true);

    // Retrieve launch params
    try {
      const params = retrieveLaunchParams();
      launchParams.current = params;
      setIsTMA(true);
      setStatus(TelegramInitStatus.Success);
      setUser(params.initData?.user);
    } catch (error: unknown) {
      if (error instanceof TypedError) {
        if (error.type === ERR_RETRIEVE_LP_FAILED) {
          setStatus(TelegramInitStatus.Failed);
          setIsTMA(false);
        }
      }
    }

    // Parse and store start params (for deep linking, etc.)
    try {
      const startParam = launchParams.current?.initData?.startParam;

      if (startParam) {
        const parsed = JSON.parse(atob(startParam));
        startParams.current = parsed;
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        console.error('Failed to parse');
      }

      startParams.current = undefined;
    }

    setLoading(false);

    return () => {
      launchParams.current = undefined;
    };
  }, []);

  return {
    status,
    isTMA,
    launchParams: launchParams.current,
    telegramUser: user,
    isChecking: loading,
    startParams: startParams.current,
  };
}
