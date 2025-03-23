import { Inetcpl1305 } from '@react95/icons';
import axios from 'axios';
import { useCallback } from 'react';
import React from 'react';
import { Button, Checkbox } from 'react95';
import { useNavigate } from 'react-router';

import { FissionMonitor } from '@/components/monitor';
import { WindowHeader } from '@/components/react95/window';
import { useAuthStore } from '@/global-state/auth-store';
import { useSettingStore } from '@/global-state/setting-store';
import { useToastStore } from '@/global-state/toast-store';
import { TelegramInitStatus, useTelegram } from '@/lib/hook/use-telegram';
import { useLoginWithTelegram } from '@/requests/auth';

import {
  ButtonContainer,
  StyledWindow,
  StyledWindowContent,
  SubAction,
  WindowContainer,
} from './log-on-window.style';

export const LogOnWindow = React.memo(function LogOnWindow() {
  const { setAccessToken } = useAuthStore();
  const { setSkipBootConsole, skipBootConsole } = useSettingStore();
  const navigate = useNavigate();
  const { mutateAsync } = useLoginWithTelegram();
  const {
    telegramUser,
    status: telegramInitStatus,
    startParams,
  } = useTelegram();
  const { pushToast } = useToastStore();

  const handleStart = async () => {
    if (telegramInitStatus !== TelegramInitStatus.Success) {
      alert('Please login with Telegram first');
      return;
    }

    try {
      const { accessToken } = await mutateAsync({
        telegramId: telegramUser!.id,
        telegramName:
          (telegramUser?.firstName || '') +
          ' ' +
          (telegramUser?.lastName || ''),
        referralCode: startParams?.referralCode || '',
        telegramHandle: telegramUser?.username,
      });

      setAccessToken(accessToken);

      // Navigate to desktop or deep link
      navigate(startParams?.deepLink || '/desktop');
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        pushToast({
          id: `login-error-${error.response?.status}`,
          message: error.response?.data?.message,
        });

        return;
      }

      pushToast({
        id: 'login-failed',
        message: 'Login failed',
      });
    }
  };

  const handleSkipBootConsole = useCallback(() => {
    const prev = skipBootConsole;
    setSkipBootConsole(!prev);

    pushToast({
      id: `skip-boot-console-${prev ? 'off' : 'on'}`,
      message: (
        <>The boot screen will {prev ? '' : <u>NOT</u>} appear on restart</>
      ),
    });
  }, [skipBootConsole]);

  return (
    <WindowContainer>
      <StyledWindow>
        <WindowHeader
          icon={<Inetcpl1305 variant="16x16_4" width={16} />}
          headerTitle="Log On"
          button={null}
        />
        <StyledWindowContent>
          <FissionMonitor />
          <ButtonContainer>
            <Button
              fullWidth
              size="lg"
              onClick={handleStart}
              disabled={telegramInitStatus !== TelegramInitStatus.Success}
            >
              {telegramInitStatus === TelegramInitStatus.Success
                ? 'Start'
                : 'Please open at Telegram'}
            </Button>
            <SubAction>
              <Checkbox
                checked={skipBootConsole}
                onChange={handleSkipBootConsole}
                label={'Fast boot'}
              ></Checkbox>
            </SubAction>
          </ButtonContainer>
        </StyledWindowContent>
      </StyledWindow>
    </WindowContainer>
  );
});
