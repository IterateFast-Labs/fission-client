import { Window, WindowContent, WindowHeader } from 'react95';
import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100%;
`;

export const StyledWindow = styled(Window)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled(WindowHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledContent = styled(WindowContent)`
  height: 100%;
  overflow-y: auto;

  & > * {
    min-height: 420px;
  }
`;
