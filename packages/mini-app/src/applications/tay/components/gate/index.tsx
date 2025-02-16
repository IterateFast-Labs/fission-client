import { useState } from 'react';

import { BaseContent } from '@/components/layout';
import { useUnlabelledDatasetsByCampaignId } from '@/requests/data-labeling';

import { TayTalkingFrame } from '../tay-talking-frame';
import { GateAction } from './gate-action';
import { StyledAction, StyledBody } from './index.styled';
import { Point } from './point';

export function Gate({
  appLoaded,
  onStart,
  campaignId,
  onClickStatus,
}: {
  appLoaded: boolean;
  onStart: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  campaignId: string;
  onClickStatus: () => void;
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
          This is where together meets you.
          <br />
          {Boolean(datasetList?.length) &&
            'Please teach me how you’d like me to respond.'}
          {!datasetList?.length && 'Thank you for training me >_<'}
          {!datasetList?.length && 'Let’s Keep in touch :3'}
        </TayTalkingFrame>
        <Point />
      </StyledBody>
      <StyledAction className={tayTalking ? 'talking' : ''}>
        <GateAction
          onStart={onStart}
          datasetList={datasetList?.map((dataset) => dataset.id) || []}
          onClickStatus={onClickStatus}
        />
      </StyledAction>
    </BaseContent>
  );
}
