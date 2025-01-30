import { useState } from 'react';
import { Button } from 'react95';
import styled from 'styled-components';

import { BaseContent } from '@/components/layout';
import { useUnlabelledDatasetsByCampaignId } from '@/requests/data-labeling';

import { TayTalkingFrame } from '../tay-talking-frame';

export function Gate({
  appLoaded,
  onStart,
  campaignId,
}: {
  appLoaded: boolean;
  onStart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  campaignId: string;
}) {
  const { data: datasetList } = useUnlabelledDatasetsByCampaignId({
    campaignId,
  });

  const [tayTalking, setTayTalking] = useState<boolean>(true);

  return (
    <BaseContent>
      <BaseContent.Header>
        <h2 className="title">TAY</h2>
        <p className="description">Together And You</p>
      </BaseContent.Header>
      <StyledBody>
        <TayTalkingFrame
          startTalking={appLoaded}
          onAnimationEnd={() => {
            setTayTalking(false);
          }}
        >
          Hi, My name is Tay.
          <br />
          This is a place between together and you.
          <br />
          {Boolean(datasetList?.length) &&
            'Please teach me instructions how to talk.'}
          {!datasetList?.length &&
            'you gave me a lot of instructions. Thank you! '}
          {!datasetList?.length && 'Keep in touch :3'}
        </TayTalkingFrame>
      </StyledBody>
      <StyledAction className={tayTalking ? 'talking' : ''}>
        <p>Please teach TAY how to talk</p>
        <Button
          fullWidth
          size="lg"
          onClick={onStart}
          disabled={!datasetList?.length}
        >
          {datasetList?.length ? 'Start' : 'I already collected enough data!'}
        </Button>
      </StyledAction>
    </BaseContent>
  );
}

const StyledBody = styled(BaseContent.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledAction = styled(BaseContent.Action)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  transition: opacity 2s;

  &.talking {
    opacity: 20%;
    pointer-events: none;
  }
`;
