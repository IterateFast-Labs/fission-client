import { Monitor } from 'react95';
import styled from 'styled-components';

import { BaseContent } from '@/components/layout';

export const StyledBody = styled(BaseContent.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAction = styled(BaseContent.Action)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledMonitor = styled(Monitor)`
  .screen {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.desktopBackground};
  }
`;
