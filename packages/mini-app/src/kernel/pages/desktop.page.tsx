import { AppBar, Toolbar } from 'react95';

import { RootContainer } from '@/components/layout';
import { Clock } from '@/kernel/desktop/components/clock';
import { DesktopApplications } from '@/kernel/desktop/components/desktop-applications';
import {
  DesktopBottom,
  DesktopLayout,
  DesktopMain,
} from '@/kernel/desktop/components/layout';
import { StartMenu } from '@/kernel/desktop/components/start-menu';

export function DesktopPage() {
  return (
    <RootContainer>
      <DesktopLayout>
        <DesktopMain>
          <DesktopApplications />
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
