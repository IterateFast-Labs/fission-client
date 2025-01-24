import { useState } from 'react';
import { useNavigate } from 'react-router';

import { withSplash } from '@/applications/splash';
import tayCharacter from '@/applications/tay/assets/tay.svg';
import { RootContainer } from '@/components/layout';
import { WindowCloseButton } from '@/components/window';

import { Gate } from '../components/gate';
import {
  PageContainer,
  StyledContent,
  StyledHeader,
  StyledWindow,
} from './index.style';

enum STEP {
  GATE = 'GATE',
  LABEL = 'LABEL',
  RESULT = 'RESULT',
}

function TayAppPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<STEP>(STEP.GATE);
  return (
    <RootContainer>
      <PageContainer>
        <StyledWindow>
          <StyledHeader>
            <span
              style={{
                display: 'flex',
                overflow: 'hidden',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              Tay
            </span>
            <WindowCloseButton onClick={() => navigate('/desktop')} />
          </StyledHeader>
          <StyledContent>
            {step === STEP.GATE && <Gate />}
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
