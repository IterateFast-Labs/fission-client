import { Window, WindowContent } from 'react95';
import styled from 'styled-components';

export const WindowContainer = styled.div`
  width: calc(100% - 3rem);
`;

export const StyledWindow = styled(Window)`
  display: block;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledWindowContent = styled(WindowContent)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding-top: 3rem;
`;

export const ButtonContainer = styled.div`
  & > button {
    width: 230px;
  }
`;

export const SubAction = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
`;
