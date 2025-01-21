import { Dialmon200 } from '@react95/icons';
import { Button, Window, WindowContent, WindowHeader } from 'react95';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { FissionMonitor } from '@/components/monitor';
import { useAuthStore } from '@/global-state/auth-store';
import { TelegramInitStatus, useTelegram } from '@/lib/hook/use-telegram';
import { useLoginWithTelegram } from '@/requests/auth-telegram';

export function LogOnWindow() {
  const { setAccessToken } = useAuthStore();
  const navigate = useNavigate();
  const { mutateAsync } = useLoginWithTelegram();
  const { telegramUser, status: telegramInitStatus } = useTelegram();
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
  return (
    <WindowContainer>
      <StyledWindow>
        <StyledWindowHeader>
          <Dialmon200 width={24} />
          Log On
        </StyledWindowHeader>
        <StyledWindowContent>
          <FissionMonitor />
          <ButtonContainer>
            <Button fullWidth size="lg" onClick={handleStart}>
              Start
            </Button>
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

const StyledWindowHeader = styled(WindowHeader)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
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
    width: 200px;
  }
`;
