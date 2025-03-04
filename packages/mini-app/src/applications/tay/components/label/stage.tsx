import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Button } from 'react95';

import {
  InputOption,
  useDatasetDetail,
  useDetermineDatasetOption,
} from '@/applications/tay/request';
import { useAuthStore } from '@/global-state/auth-store';
import { useToastStore } from '@/global-state/toast-store';

import { TayTalkingFrame } from '../tay-talking-frame';
import Error from './error';
import { OptionList } from './option-list';
import { StyledAction, StyledBody } from './result.style';
import { Loading } from './stage.style';

export function Stage({
  datasetId,
  onDetermineOption,
  onErrorBackClick,
}: {
  datasetId: string;
  onDetermineOption: () => void;
  onErrorBackClick: () => void;
}) {
  const queryClient = useQueryClient();
  const { data: datasetDetail, status } = useDatasetDetail({
    datasetId,
  });

  const { pushToast } = useToastStore();
  const { accessToken } = useAuthStore();

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

    await queryClient.invalidateQueries({
      exact: true,
      queryKey: ['user', 'myPoint', accessToken],
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
