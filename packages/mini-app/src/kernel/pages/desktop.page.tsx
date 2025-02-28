import { AppBar, Toolbar } from 'react95';

import { RootContainer } from '@/components/layout';
import { DesktopApplications } from '@/kernel/desktop/components/desktop-applications';
import {
  DesktopBottom,
  DesktopLayout,
  DesktopMain,
} from '@/kernel/desktop/components/layout';
import { StartMenu } from '@/kernel/desktop/components/start-menu';
import { SystemTray } from '@/kernel/desktop/components/system-tray';

export function DesktopPage() {
  return (
    <RootContainer>
      <DesktopLayout>
        <DesktopMain>
          <DesktopApplications />
        </DesktopMain>
        <DesktopBottom>
          <AppBar position="relative">
            <Toolbar
              style={{
                justifyContent: 'space-between',
                paddingBottom: '0.5rem',
              }}
            >
              <StartMenu />
              <SystemTray />
            </Toolbar>
          </AppBar>
        </DesktopBottom>
      </DesktopLayout>
    </RootContainer>
  );
}
