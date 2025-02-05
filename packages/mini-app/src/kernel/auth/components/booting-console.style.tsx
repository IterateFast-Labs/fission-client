import styled, { keyframes } from 'styled-components';

const cursorRoll = keyframes`
  0% {
    content: '┓';
  }
  25% {
    content: '┛';
  }
  50% {
    content: '┗';
  }
  75% {
    content: '┏';
  }
`;

export const CursorWaiting = styled.span`
  &::after {
    color: #2fff00;
    content: '┓';
    animation: ${cursorRoll} 1s infinite;
    font-size: 0.8rem;
  }
`;

export const ConsoleContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Text = styled.p`
  color: #2fff00;
`;

export const ConsoleTable = styled.table`
  & th,
  & td {
    border: 1px solid #2fff00;
    padding: 0.5rem 0.8rem;
  }

  border-collapse: collapse;
`;
