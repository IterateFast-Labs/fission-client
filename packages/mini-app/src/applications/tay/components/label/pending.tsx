import React from 'react';
import { Hourglass } from 'react95';
import styled from 'styled-components';

import { BaseContent } from '@/components/layout';

function Pending() {
  return (
    <StyledBody>
      <Hourglass />
    </StyledBody>
  );
}

export default React.memo(Pending);

const StyledBody = styled(BaseContent.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
