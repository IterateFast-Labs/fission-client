import { Issue } from '@react95/icons';
import React from 'react';
import { Button } from 'react95';
import styled from 'styled-components';

import { BaseContent } from '@/components/layout';

function Empty({ onBackClick }: { onBackClick: () => void }) {
  return (
    <BaseContent>
      <BaseContent.Header>
        <h2 className="title">
          Cannot find the dataset <br />
          you are looking for
        </h2>
        <p className="description">
          Please return to the previous page and start again. If you think this
          is an error, please report this issue.
        </p>
      </BaseContent.Header>
      <StyledBody>
        <Issue variant="32x32_4" width={64} height={64} />
      </StyledBody>
      <BaseContent.Action>
        <Button fullWidth size="lg" onClick={onBackClick}>
          Back
        </Button>
      </BaseContent.Action>
    </BaseContent>
  );
}

const StyledBody = styled(BaseContent.Body)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default React.memo(Empty);
