import {
  ERR_RETRIEVE_LP_FAILED,
  LaunchParams,
  TypedError,
  User,
  retrieveLaunchParams,
} from '@telegram-apps/sdk';
import { useEffect, useRef, useState } from 'react';

export enum TelegramInitState {
  'Idle' = 'Idle',
  'Pending' = 'Pending',
  'Success' = 'Success',
  'Failed' = 'Failed',
}

export function useTelegram() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isTMA, setIsTMA] = useState<boolean>(true);
  const launchParams = useRef<LaunchParams>(undefined);
  const [user, setUser] = useState<User>();

  const [state, setState] = useState<TelegramInitState>(TelegramInitState.Idle);

  useEffect(() => {
    setState(TelegramInitState.Pending);
    setLoading(true);

    try {
      const params = retrieveLaunchParams();
      launchParams.current = params;
      setIsTMA(true);
      setState(TelegramInitState.Success);
      setUser(params.initData?.user);
    } catch (error: unknown) {
      if (error instanceof TypedError) {
        if (error.type === ERR_RETRIEVE_LP_FAILED) {
          setState(TelegramInitState.Failed);
          setIsTMA(false);
        }
      }
    }

    setLoading(false);

    return () => {
      launchParams.current = undefined;
    };
  }, []);

  return {
    state,
    isTMA,
    launchParams: launchParams.current,
    telegramUser: user,
    isChecking: loading,
  };
}
