import { useState } from 'react';
import { Hourglass } from 'react95';

import { RootContainer } from '@/components/layout';
import { Timing, TimingFrame } from '@/components/timing';
import { BootingConsole } from '@/features/auth/components/booting-console';
import { LogOnWindow } from '@/features/auth/components/log-on-window';
import { useAuthStore } from '@/global-state/auth-store';

import { CenterContainer, Dimmer, PageContainer } from './start.style';

export function StartPage() {
  const [booted, setBooted] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const authStore = useAuthStore();

  return (
    <RootContainer>
      <Dimmer active={booted} />
      <PageContainer booted={booted}>
        {!booted && (
          <BootingConsole onBootingConsoleEnd={() => setBooted(true)} />
        )}
        <TimingFrame display={booted} start={0}>
          {!loaded && (
            <Timing
              start={0}
              duration={1.2}
              onAnimationEnd={() => setLoaded(true)}
            >
              <CenterContainer>
                <Hourglass />
              </CenterContainer>
            </Timing>
          )}
          {loaded && (
            <Timing start={0.2} duration={0}>
              <CenterContainer>
                <LogOnWindow
                  onStart={() => {
                    authStore.setAccessToken('fake-token');
                  }}
                />
              </CenterContainer>
            </Timing>
          )}
        </TimingFrame>
      </PageContainer>
    </RootContainer>
  );
}
