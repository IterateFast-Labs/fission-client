import { Button } from 'react95';

import tayLearning from '@/applications/tay/assets/tay-learning.webp';
import { BaseContent } from '@/components/layout';

import { StyledAction, StyledBody, StyledMonitor } from './result.style';

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
        <Button
          size="lg"
          fullWidth
          onClick={() => window.open('https://x.com/Tay_n_You', '_blank')}
        >
          Tay 𝕏 (@Tay_n_You)
        </Button>
        <Button size="lg" fullWidth onClick={onConfirm}>
          Confirm
        </Button>
      </StyledAction>
    </BaseContent>
  );
}
