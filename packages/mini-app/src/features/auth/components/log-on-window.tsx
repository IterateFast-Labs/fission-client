import { Button, Window, WindowContent, WindowHeader } from 'react95';
import styled from 'styled-components';

import { FissionMonitor } from '@/components/monitor';

export function LogOnWindow({ onStart }: { onStart: () => void }) {
  return (
    <WindowContainer>
      <StyledWindow>
        <WindowHeader>Log On</WindowHeader>
        <StyledWindowContent>
          <FissionMonitor />
          <ButtonContainer>
            <Button fullWidth size="lg" onClick={onStart}>
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
