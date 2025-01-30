import { Chatshow3000 } from '@react95/icons';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import { withSplash } from '@/applications/splash';
import tayCharacter from '@/applications/tay/assets/tay.svg';
import { RootContainer } from '@/components/layout';
import { WindowCloseButton, WindowHeader } from '@/components/react95/window';

import { Gate } from '../components/gate';
import { PageContainer, StyledContent, StyledWindow } from './index.style';

enum STEP {
  GATE = 'GATE',
  LABEL = 'LABEL',
  RESULT = 'RESULT',
}

function TayAppPage({ appLoaded }: { appLoaded: boolean }) {
  const navigate = useNavigate();
  const [step, setStep] = useState<STEP>(STEP.GATE);

  const handleStart = () => {};

  return (
    <RootContainer>
      <PageContainer>
        <StyledWindow>
          <WindowHeader
            icon={<Chatshow3000 variant="16x16_4" width={16} height={16} />}
            headerTitle="Tay"
            button={<WindowCloseButton onClick={() => navigate('/desktop')} />}
          />

          <StyledContent>
            {step === STEP.GATE && (
              <Gate onStart={handleStart} appLoaded={appLoaded} />
            )}
            {step === STEP.LABEL && (
              <div>
                <button onClick={() => setStep(STEP.RESULT)}>Result</button>
              </div>
            )}
            {step === STEP.RESULT && (
              <div>
                <button onClick={() => setStep(STEP.GATE)}>Back</button>
              </div>
            )}
          </StyledContent>
        </StyledWindow>
      </PageContainer>
    </RootContainer>
  );
}

const WeLabelAppWithSplash = withSplash(TayAppPage, {
  logo: <img src={tayCharacter} width={64} height={64} />,
  title: 'Tay',
  backgroundColor: 'white',
  titleColor: 'black',
});

export default WeLabelAppWithSplash;
