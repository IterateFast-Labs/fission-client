import { useState } from 'react';
import { Button, Hourglass } from 'react95';
import styled from 'styled-components';

import { BaseContent } from '@/components/layout';
import { useToastStore } from '@/global-state/toast-store';
import {
  InputOption,
  useDatasetDetail,
  useDetermineDatasetOption,
} from '@/requests/data-labeling';

import { TayTalkingFrame } from '../tay-talking-frame';
import Error from './error';
import { OptionList } from './option-list';

export function Stage({
  datasetId,
  onDetermineOption,
  onErrorBackClick,
}: {
  datasetId: string;
  onDetermineOption: () => void;
  onErrorBackClick: () => void;
}) {
  const { data: datasetDetail, status } = useDatasetDetail({
    datasetId,
  });

  const { pushToast } = useToastStore();

  const { mutateAsync } = useDetermineDatasetOption({
    datasetId,
  });

  const [tayTalking, setTayTalking] = useState<boolean>(true);

  const handleOptionClick = async (option: InputOption) => {
    if (!datasetDetail) {
      pushToast({
        id: 'tay-dataset-fetch-failed',
        message: 'Failed to get dataset, \nplease try again later.',
      });

      return;
    }

    await mutateAsync({
      datasetId,
      option,
      campaignId: datasetDetail?.campaignId,
    });

    onDetermineOption();
  };

  return (
    <>
      <StyledBody>
        {status === 'success' && (
          <>
            <TayTalkingFrame
              height={230}
              startTalking={status === 'success'}
              onAnimationEnd={() => {
                setTayTalking(false);
              }}
            >
              {datasetDetail?.text}
            </TayTalkingFrame>
          </>
        )}

        {status === 'error' && (
          <Error
            message={'Failed to get dataset\nPlease try again later.'}
            button={
              <Button onClick={onErrorBackClick} size="sm">
                Back
              </Button>
            }
          />
        )}
        {status === 'pending' && <Loading />}
      </StyledBody>
      <StyledAction className={tayTalking ? 'talking' : ''}>
        {status === 'success' && (
          <OptionList
            option={datasetDetail!.dataSetOption}
            onOptionClick={handleOptionClick}
          />
        )}
      </StyledAction>
    </>
  );
}

const Loading = styled(({ className }: { className?: string }) => (
  <div className={className}>
    <Hourglass />
    <p>Loading</p>
  </div>
))`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

const StyledBody = styled(BaseContent.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledAction = styled(BaseContent.Action)`
  transition: opacity 2s;
  &.talking {
    opacity: 0.2;
    pointer-events: none;
  }
`;
