import { Hourglass } from 'react95';
import styled from 'styled-components';

import { BaseContent } from '@/components/layout';

export const Loading = styled(({ className }: { className?: string }) => (
  <div className={className}>
    <Hourglass />
    <p>Loading</p>
  </div>
))`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
`;

export const StyledBody = styled(BaseContent.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledAction = styled(BaseContent.Action)`
  transition: opacity 2s;
  &.talking {
    opacity: 0.2;
    pointer-events: none;
  }
`;
