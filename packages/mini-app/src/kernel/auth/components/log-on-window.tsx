import { Inetcpl1305 } from '@react95/icons';
import { useCallback } from 'react';
import { Button, Checkbox, Window, WindowContent } from 'react95';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { FissionMonitor } from '@/components/monitor';
import { WindowHeader } from '@/components/react95/window';
import { useAuthStore } from '@/global-state/auth-store';
import { useSettingStore } from '@/global-state/setting-store';
import { useToastStore } from '@/global-state/toast-store';
import { TelegramInitStatus, useTelegram } from '@/lib/hook/use-telegram';
import { useLoginWithTelegram } from '@/requests/auth-telegram';

export function LogOnWindow() {
  const { setAccessToken } = useAuthStore();
  const { setSkipBootConsole, skipBootConsole } = useSettingStore();
  const navigate = useNavigate();
  const { mutateAsync } = useLoginWithTelegram();
  const { telegramUser, status: telegramInitStatus } = useTelegram();
  const { pushToast } = useToastStore();

  const handleStart = async () => {
    if (telegramInitStatus !== TelegramInitStatus.Success) {
      alert('Please login with Telegram first');
      return;
    }

    const { accessToken } = await mutateAsync({
      telegramId: telegramUser!.id,
      telegramName:
        (telegramUser?.firstName || '') + (telegramUser?.lastName || ''),
      referralCode: '',
      telegramHandle: telegramUser?.username,
    });

    setAccessToken(accessToken);

    navigate('/desktop');
  };

  const handleSkipBootConsole = useCallback(() => {
    const prev = skipBootConsole;
    setSkipBootConsole(!prev);

    pushToast({
      id: `skip-boot-console-${prev ? 'off' : 'on'}`,
      message: (
        <>
          Next time, <br />
          the boot screen will {prev ? '' : <u>NOT</u>} be displayed.
        </>
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
}

const WindowContainer = styled.div`
  width: calc(100% - 3rem);
`;

const StyledWindow = styled(Window)`
  display: block;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const StyledWindowContent = styled(WindowContent)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding-top: 3rem;
`;

const ButtonContainer = styled.div`
  & > button {
    width: 230px;
  }
`;

const SubAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;
