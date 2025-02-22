import { memo, useEffect, useRef } from 'react';
import { Counter, GroupBox } from 'react95';
import styled, { keyframes } from 'styled-components';

import { useMyPoint } from '@/requests/user';

export const Point = memo(function Point() {
  const { data: point } = useMyPoint();
  const pointRef = useRef(point);

  useEffect(() => {
    if (point) {
      // store previous point value
      pointRef.current = point;
    }
  }, []);

  if (!point) return null;

  const pointDiff = point - (pointRef.current || point);

  return (
    <StyledGroupBox label="Your Point" $sparkle={pointDiff > 0}>
      <StyledCounter size="sm" value={point} />
    </StyledGroupBox>
  );
});

const sparkle = keyframes`
    0% {
        border-color: white;
    }
    50% {
        border-color: blue;
    }
    100% {
        border-color: white;
    }
`;

const StyledGroupBox = styled(GroupBox)<{
  $sparkle: boolean;
}>`
  width: 100%;
  padding: 12px;
  animation-name: ${(props) => (props.$sparkle ? sparkle : 'none')};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;

const StyledCounter = styled(Counter)`
  width: 100%;
  justify-content: end;
`;
