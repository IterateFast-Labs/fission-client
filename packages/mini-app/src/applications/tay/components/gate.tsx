import { Button, Frame } from 'react95';
import styled from 'styled-components';

import tayTalkingImage from '../assets/tay-talking.webp';

export function Gate({
  onStart,
}: {
  onStart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <GateContainer>
      <div className="content">
        <Poster variant="field">
          <Bubble className="bubble">
            <p
              className="message"
              style={{
                textWrap: 'balance',
              }}
            >
              Hi, My name is Tay.
              <br /> This is a place between me and you.
              <br /> I'm here to learn how to talk like you.
            </p>
          </Bubble>
          <img
            className="tay"
            src={tayTalkingImage}
            alt="Tay talking"
            width={64}
            height={64}
          />
        </Poster>
      </div>

      <div className="action">
        <p>Please teach TAY how to talk</p>
        <Button fullWidth size="lg" onClick={onStart}>
          Start
        </Button>
      </div>
    </GateContainer>
  );
}

const GateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;

  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    overflow-y: auto;
    gap: 1rem;
  }

  .action {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    background: ${({ theme }) => theme.material};
  }

  .action p {
    text-align: center;
  }
`;

const Poster = styled(Frame)`
  width: 100%;
  height: 100%;
  max-height: 200px;
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
