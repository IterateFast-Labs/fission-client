import { Frame } from 'react95';
import styled from 'styled-components';

export const StyledFrame = styled(Frame)`
  height: 36px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  p {
    font-size: 1.125rem;
  }
`;

export const TrayList = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% - 2px);
  padding-top: 1px;
  gap: 2px;
  & button {
    padding: 1px;
    height: 100%;
    aspect-ratio: 1;
  }

  & button svg {
    width: 100%;
    height: 100%;
  }
`;
