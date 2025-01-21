import { AppBar, Toolbar } from 'react95';

import { RootContainer } from '@/components/layout';
import { Clock } from '@/kernel/desktop/components/clock';
import {
  DesktopBottom,
  DesktopLayout,
  DesktopMain,
} from '@/kernel/desktop/components/layout';
import { StartMenu } from '@/kernel/desktop/components/start-menu';

export function WeLabelAppPage() {
  return (
    <RootContainer>
      <DesktopLayout>
        <DesktopMain>
          <></>
        </DesktopMain>
        <DesktopBottom>
          <AppBar position="relative">
            <Toolbar style={{ justifyContent: 'space-between' }}>
              <StartMenu />
              <Clock />
            </Toolbar>
          </AppBar>
        </DesktopBottom>
      </DesktopLayout>
    </RootContainer>
  );
}
