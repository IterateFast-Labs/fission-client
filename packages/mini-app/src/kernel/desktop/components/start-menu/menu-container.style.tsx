import { Button } from 'react95';
import styled from 'styled-components';

export const StyledStartMenuButton = styled(Button)`
  gap: 0.5rem;
`;

export const StyledMenu = styled.div`
  position: absolute;
  bottom: calc(100% + 2px);
  left: 2px;
  width: 220px;
  height: auto;
  z-index: 1000;

  .logo {
    position: absolute;
    z-index: 1;
    transform: rotate(-90deg) translateY(100%);
    transform-origin: top left;
    left: -10px;
    bottom: -8px;
    opacity: 0.6;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 28px;
    background: linear-gradient(180deg, blue, black);
  }
`;
