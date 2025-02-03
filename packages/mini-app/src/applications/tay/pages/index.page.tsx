import { Chatshow3000 } from '@react95/icons';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { withSplash } from '@/applications/splash';
import tayCharacter from '@/applications/tay/assets/tay.svg';
import { RootContainer } from '@/components/layout';
import { WindowCloseButton, WindowHeader } from '@/components/react95/window';
import { useToastStore } from '@/global-state/toast-store';
import {
  useAgentCampainId,
  useUnlabelledDatasetsByCampaignId,
} from '@/requests/data-labeling';

import { Gate } from '../components/gate';
import { Label } from '../components/label';
import { Result } from '../components/label/result';
import { PageContainer, StyledContent, StyledWindow } from './index.style';

enum STEP {
  GATE = 'GATE',
  LABEL = 'LABEL',
  RESULT = 'RESULT',
}

function TayAppPage({ appLoaded }: { appLoaded: boolean }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [step, setStep] = useState<STEP>(STEP.GATE);
  const { data: campaignId } = useAgentCampainId({
    agentType: 'TAY',
  });
  const { pushToast } = useToastStore();

  const { data: dataSetIdList } = useUnlabelledDatasetsByCampaignId({
    campaignId: campaignId!,
  });

  const handleStart = () => {
    if (!campaignId) {
      pushToast({
        id: 'tay-campaign-fetch-failed',
        message: 'Failed to get campaign, \nplease try again later.',
      });
      return;
    }

    if (!dataSetIdList) {
      pushToast({
        id: 'tay-dataset-fetch-failed',
        message: 'Failed to get dataset, \nplease try again later.',
      });
      return;
    }

    setStep(STEP.LABEL);
  };

  const handleClear = async () => {
    await queryClient.invalidateQueries({
      queryKey: ['dataset', 'campaign', campaignId],
    });

    setStep(STEP.RESULT);
  };

  return (
    <RootContainer>
      <PageContainer>
        <StyledWindow>
          <WindowHeader
            icon={<Chatshow3000 variant="16x16_4" width={16} height={16} />}
            headerTitle="Tay"
            button={
              <WindowCloseButton
                onClick={() => navigate('/desktop')}
                disabled={step === STEP.LABEL}
              />
            }
          />

          <StyledContent>
            {step === STEP.GATE && (
              <Gate
                onStart={handleStart}
                appLoaded={appLoaded}
                campaignId={campaignId!}
              />
            )}
            {step === STEP.LABEL && (
              <Label
                onBackClick={() => setStep(STEP.GATE)}
                onClear={handleClear}
                campaignId={campaignId!}
              />
            )}
            {step === STEP.RESULT && (
              <Result onConfirm={() => setStep(STEP.GATE)} />
            )}
          </StyledContent>
        </StyledWindow>
      </PageContainer>
    </RootContainer>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default withSplash(TayAppPage, {
  logo: <img src={tayCharacter} width={64} height={64} />,
  title: 'Tay',
  backgroundColor: 'white',
  titleColor: 'black',
});
