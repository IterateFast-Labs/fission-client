import { Ulclient1002 } from '@react95/icons';
import { AppBar, Toolbar } from 'react95';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { RootContainer } from '@/components/layout';
import { WindowCloseButton, WindowHeader } from '@/components/react95/window';
import {
  DesktopBottom,
  DesktopLayout,
  DesktopMain,
} from '@/kernel/desktop/components/layout';
import { StartMenu } from '@/kernel/desktop/components/start-menu';
import { SystemTray } from '@/kernel/desktop/components/system-tray';

import { InfoTabs } from '../account/components/info-tabs';
import { MyInfo } from '../account/components/my-info';
import { StyledContent, StyledWindow } from './account.style';

export function AccountPage() {
  const navigate = useNavigate();
  return (
    <RootContainer>
      <DesktopLayout>
        <DesktopMain style={{ padding: '1.5rem' }}>
          <StyledWindow>
            <WindowHeader
              icon={<Ulclient1002 variant="16x16_4" />}
              headerTitle="Account"
              button={
                <WindowCloseButton onClick={() => navigate('/desktop')} />
              }
            />

            <StyledContent>
              <ProfileContainer>
                <MyInfo />
                <InfoTabs />
              </ProfileContainer>
            </StyledContent>
          </StyledWindow>
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

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: calc(100% - 2rem);
`;
