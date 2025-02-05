import { WindowHeader as WindowHeaderOriginal } from 'react95';
import styled from 'styled-components';

export const StyledHeader = styled(WindowHeaderOriginal)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 1px 1px 1px 0.25rem;

  .header {
    display: flex;
    overflow: hidden;
    gap: 0.5rem;
    align-items: center;
  }

  .icon {
    width: 16px;
    height: 16px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .title {
    line-height: 1rem;
    margin-top: -0.25rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .button {
    height: 28px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    flex-shrink: 0;
  }
`;
