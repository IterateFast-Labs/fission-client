import { Button, Monitor, Window, WindowContent, WindowHeader } from 'react95';
import styled from 'styled-components';

import { useTelegram } from '@/lib/hook/use-telegram';

export function LogOnWindow() {
  const { telegramUser } = useTelegram();
  return (
    <WindowContainer>
      <StyledWindow>
        <WindowHeader>Log On</WindowHeader>
        <StyledWindowContent>
          <StyledMonitor>
            <div className="console">
              <p className="console-text">
                GM <br />@{telegramUser?.username}
              </p>
            </div>
          </StyledMonitor>
          <Button fullWidth size="lg" disabled>
            Start(Coming Soon)
          </Button>
        </StyledWindowContent>
      </StyledWindow>
    </WindowContainer>
  );
}

const WindowContainer = styled.div`
  width: calc(100% - 2rem);
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

const StyledMonitor = styled(Monitor)`
  & .console {
    text-align: center;
    height: 100%;
    background-color: black;
    padding: 8px;
  }

  & .console-text {
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    word-break: break-all;
  }
`;
