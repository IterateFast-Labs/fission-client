import { Button, Monitor } from 'react95';
import styled from 'styled-components';

import tayLearning from '@/applications/tay/assets/tay-learning.webp';
import { BaseContent } from '@/components/layout';

export function Result({ onConfirm }: { onConfirm: () => void }) {
  return (
    <BaseContent>
      <BaseContent.Header>
        <h2 className="title">Thank you for your response!</h2>
        <p className="description">
          Tay is collecting more data to learn. Please check our 𝕏
        </p>
      </BaseContent.Header>
      <StyledBody>
        <StyledMonitor>
          <div className="screen">
            <img src={tayLearning} alt="Tay learning" width={64} height={64} />
          </div>
        </StyledMonitor>
      </StyledBody>
      <StyledAction>
        <Button size="lg" fullWidth>
          Tay 𝕏 (@lorem_ipsum)
        </Button>
        <Button size="lg" fullWidth onClick={onConfirm}>
          Confirm
        </Button>
      </StyledAction>
    </BaseContent>
  );
}

const StyledBody = styled(BaseContent.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledAction = styled(BaseContent.Action)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledMonitor = styled(Monitor)`
  .screen {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.desktopBackground};
  }
`;
