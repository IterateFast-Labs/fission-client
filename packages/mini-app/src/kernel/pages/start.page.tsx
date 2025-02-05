import { useMemo, useState } from 'react';
import { Hourglass } from 'react95';

import { Timing, TimingFrame } from '@/components/animation/timing';
import { RootContainer } from '@/components/layout';
import { useSettingStore } from '@/global-state/setting-store';
import { BootingConsole } from '@/kernel/auth/components/booting-console';
import { LogOnWindow } from '@/kernel/auth/components/log-on-window';

import { CenterContainer, Dimmer, PageContainer } from './start.style';

export function StartPage() {
  const { skipBootConsole } = useSettingStore();

  const [booted, setBooted] = useState<boolean>(skipBootConsole);
  const [loaded, setLoaded] = useState<boolean>(skipBootConsole);

  const memoizedTiming = useMemo(
    () => (
      <Timing start={0} duration={1.2} onAnimationEnd={() => setLoaded(true)}>
        <CenterContainer>
          <Hourglass />
        </CenterContainer>
      </Timing>
    ),
    [setLoaded],
  );

  return (
    <RootContainer>
      <Dimmer active={booted} />
      <PageContainer booted={booted}>
        {!booted && (
          <BootingConsole onBootingConsoleEnd={() => setBooted(true)} />
        )}
        <TimingFrame display={booted} start={0}>
          {!loaded && memoizedTiming}
          {loaded && (
            <Timing start={0.2} duration={0}>
              <CenterContainer>
                <LogOnWindow />
              </CenterContainer>
            </Timing>
          )}
        </TimingFrame>
      </PageContainer>
    </RootContainer>
  );
}
