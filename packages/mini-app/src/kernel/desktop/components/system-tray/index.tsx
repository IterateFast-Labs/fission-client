import { Ulclient1002 } from '@react95/icons';
import { Button } from 'react95';
import { useNavigate } from 'react-router';

import { Clock } from './clock';
import { StyledFrame, TrayList } from './index.style';

export function SystemTray() {
  const navigation = useNavigate();

  return (
    <StyledFrame variant="status">
      <TrayList>
        <Button variant="thin" onClick={() => navigation('/account')}>
          <Ulclient1002 variant="16x16_4" />
        </Button>
      </TrayList>
      <Clock />
    </StyledFrame>
  );
}
