import styled, { keyframes } from 'styled-components';

const blinkKeyFrame = keyframes`
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
`;

export const Blink = styled.span<{
  duration?: number;
  step?: number;
}>`
  animation: ${blinkKeyFrame} ${({ duration }) => duration ?? 1}s infinite;
  animation-timing-function: steps(${({ step }) => step ?? 1}, end);
`;
