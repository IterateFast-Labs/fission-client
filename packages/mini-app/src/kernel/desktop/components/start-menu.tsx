import { Computer3 } from '@react95/icons';
import { useRef, useState } from 'react';
import { Button, MenuList, MenuListItem, Separator } from 'react95';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import tayCharacter from '@/applications/tay/assets/tay.svg';
import { LogoImage } from '@/components/logo';
import { useAuthStore } from '@/global-state/auth-store';
import { useClickOutside } from '@/lib/hook/use-click-outside';

export function StartMenu() {
  const listRef = useRef<HTMLDivElement>(null);
  useClickOutside(listRef, () => setStartMenuOpen(false));
  const [isStartMenuOpen, setStartMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const authStore = useAuthStore();

  const handleShutDown = () => {
    authStore.resetAccessToken();
    navigate('/');
  };

  const handleClickMenu = (callback: () => void) => {
    setStartMenuOpen(false);
    callback();
  };

  return (
    <div ref={listRef}>
      <StyledStartMenu onClick={() => setStartMenuOpen((prev) => !prev)}>
        <LogoImage width={20} height={20} />
        <span>Start</span>
      </StyledStartMenu>
      {isStartMenuOpen && (
        <StyledMenuList>
          <div className="main">
            <StyledMenuListItem
              onClick={() =>
                handleClickMenu(() => navigate('/application/we-label'))
              }
            >
              <img src={tayCharacter} width={32} height={32} />
              <span>Tay</span>
            </StyledMenuListItem>
          </div>
          <div className="bottom">
            <Separator />
            <StyledMenuListItem onClick={handleShutDown}>
              <Computer3 width={32} height={32} />
              <span>Shut Down</span>
            </StyledMenuListItem>
          </div>
        </StyledMenuList>
      )}
    </div>
  );
}

const StyledStartMenu = styled(Button)`
  gap: 0.5rem;
  font-weight: bold;
`;

const StyledMenuList = styled(MenuList)`
  position: absolute;
  bottom: calc(100% - 4px);
  left: 2px;
  width: 200px;
  min-height: 300px;
  display: flex;
  flex-direction: column;

  .main {
    flex-grow: 1;
  }
`;

const StyledMenuListItem = styled(MenuListItem)`
  justify-content: flex-start;
  gap: 0.5rem;
`;
