import { Frame } from 'react95';
import styled from 'styled-components';

import tayTalkingImage from '@/applications/tay/assets/tay-talking.webp';
import { Typing } from '@/components/animation/typing';

export function TayTalkingFrame({
  startTalking,
  children,
  height,
  onAnimationEnd,
}: {
  startTalking: boolean;
  height?: number;
  children: React.ReactNode;
  onAnimationEnd?: () => void;
}) {
  return (
    <StyledFrame variant="field" height={height}>
      <Bubble className="bubble">
        <Typing
          animationPlayState={startTalking ? 'running' : 'paused'}
          className="message"
          style={{
            textWrap: 'balance',
          }}
          onAnimationEnd={onAnimationEnd}
        >
          {children}
        </Typing>
      </Bubble>
      <img
        className="tay"
        src={tayTalkingImage}
        alt="Tay talking"
        width={64}
        height={64}
      />
    </StyledFrame>
  );
}

const StyledFrame = styled(Frame)<{
  height?: number;
}>`
  width: 100%;
  height: ${({ height }) => height || 230}px;
  position: relative;

  .bubble {
    position: absolute;
    top: 20px;
    right: 64px;
    bottom: 32px;
    left: 20px;
  }

  .tay {
    position: absolute;
    bottom: 2px;
    right: 0;
    image-rendering: crisp-edges;
  }
`;

const Bubble = styled.div`
  border: 16px solid;
  border-image: url('/bubble-border.svg') 8;

  .message {
    position: absolute;
    inset: -16px;
    padding: 8px 12px;
    font-size: 16px;
    overflow-y: auto;
    border-radius: 16px;
  }
`;
