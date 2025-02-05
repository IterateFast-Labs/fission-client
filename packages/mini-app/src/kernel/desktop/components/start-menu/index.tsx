import { Computer3 } from '@react95/icons';
import { Separator } from 'react95';
import { useNavigate } from 'react-router';

import tayCharacter from '@/applications/tay/assets/tay.svg';
import { useAuthStore } from '@/global-state/auth-store';
import { useToastStore } from '@/global-state/toast-store';

import { StyledMenuList, StyledMenuListItem } from './index.style';
import MenuContainer from './menu-container';

export function StartMenu() {
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const { pushToast } = useToastStore();

  const handleShutDown = () => {
    authStore.resetAccessToken();
    pushToast({
      id: 'shut-down',
      message: 'Shutting down...',
    });
    navigate('/');
  };

  return (
    <MenuContainer>
      {(onClickMenu) => (
        <StyledMenuList>
          <div className="main">
            <StyledMenuListItem
              onClick={onClickMenu(() => navigate('/application/tay'))}
            >
              <img src={tayCharacter} width={32} height={32} />
              <span>Tay</span>
            </StyledMenuListItem>
          </div>
          <div className="bottom">
            <Separator />
            <StyledMenuListItem onClick={onClickMenu(handleShutDown)}>
              <Computer3 width={32} height={32} />
              <span>Shut Down</span>
            </StyledMenuListItem>
          </div>
        </StyledMenuList>
      )}
    </MenuContainer>
  );
}
