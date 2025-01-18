import { Monitor } from 'react95';
import styled from 'styled-components';

import { LogoImage, LogoTypo } from '@/components/logo';

export function FissionMonitor() {
  return (
    <StyledMonitor>
      <div className="console">
        <LogoImage variant="dark" fill="#2fff00" width={40} />
        <GlitchyContainer>
          <GlitchyLogoTypo
            duration={1}
            fill="#fffb00"
            delay={0.4}
            width={100}
          />
          <GlitchyLogoTypo
            duration={0.4}
            fill="#e600c0"
            delay={0.2}
            width={100}
          />
          <GlitchyLogoTypo duration={0.8} fill="#2fff00" width={100} />
        </GlitchyContainer>
      </div>
    </StyledMonitor>
  );
}

const StyledMonitor = styled(Monitor)`
  & .console {
    height: 100%;
    background-color: black;
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }
`;

const GlitchyContainer = styled.div`
  position: relative;
  width: 100%;
`;

const GlitchyLogoTypo = styled(LogoTypo)<{
  delay?: number; // seconds
  duration?: number; // seconds
}>`
  position: absolute;
  left: calc(50% - 50px);
  animation-name: glitch;
  animation-duration: ${({ duration = 1 }) => duration}s;
  animation-iteration-count: infinite;
  animation-delay: ${({ delay = 0 }) => delay}s;
  animation-timing-function: steps(1, end);
  @keyframes glitch {
    0% {
      transform: translate(0, 0px) skewX(0);
    }

    20% {
      transform: translate(-2px, 1px) skewX(0);
    }

    40% {
      transform: translate(1px, ${Math.random() > 0.5 ? 1 : -1}px) skewX(1);
    }

    60% {
      transform: translate(-2px, 1px) skewX(0);
    }

    80% {
      transform: translate(2px, ${Math.random() > 0.5 ? 2 : -2}) skewX(-1);
    }

    100% {
      transform: translate(0, 0) skewX(0);
    }
  }
`;
