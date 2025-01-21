import { Window } from 'react95';
import styled from 'styled-components';

export const Dimmer = styled.div<{
  active?: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: ${({ active }) => (active ? 0 : 1)};
  transition: opacity 0.5s;
  z-index: 0;
`;

export const PageContainer = styled.div<{
  booted?: boolean;
}>`
  height: 100svh;
  z-index: 2;
  background-color: ${({ booted }) => (!booted ? '#000' : 'transparent')};
`;

export const StyledWindow = styled(Window)`
  width: 100%;
  max-width: 420px;
`;

export const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
