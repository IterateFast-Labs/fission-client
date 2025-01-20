import { AppBar, Toolbar } from 'react95';

import { RootContainer } from '@/components/layout';
import { Clock } from '@/features/desktop/components/clock';
import { DesktopPrograms } from '@/features/desktop/components/desktop-programs';
import {
  DesktopBottom,
  DesktopLayout,
  DesktopMain,
} from '@/features/desktop/components/layout';
import { StartMenu } from '@/features/desktop/components/start-menu';

export function DesktopPage() {
  return (
    <RootContainer>
      <DesktopLayout>
        <DesktopMain>
          <DesktopPrograms />
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
