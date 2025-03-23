import { Window, WindowContent } from 'react95';
import styled from 'styled-components';

export const AlertContainer = styled.div<{
  $display: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.$display ? 'flex' : 'none')};
  z-index: 1000;
  overflow-y: auto;
  padding: 1rem;
  justify-content: center;
  align-items: safe center;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
    pointer-events: none;
  }
`;

export const StyledWindow = styled(Window)`
  display: block;
  width: 100%;
  max-width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledWindowContent = styled(WindowContent)`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1rem;
  column-gap: 0.5rem;
  align-items: start;

  .icon {
    width: 2.5rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  .body {
    flex-grow: 1;
    width: calc(100% - 2.5rem - 0.5rem);
    font-size: 1rem;
    line-height: 1.25;
  }

  .actions {
    width: 100%;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    button {
      flex-grow: 1;
    }
  }
`;
