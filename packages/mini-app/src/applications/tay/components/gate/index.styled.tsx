import styled from 'styled-components';

import { BaseContent } from '@/components/layout';

export const StyledBody = styled(BaseContent.Body)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledAction = styled(BaseContent.Action)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  transition: opacity 2s;

  &.talking {
    opacity: 20%;
    pointer-events: none;
  }
`;
