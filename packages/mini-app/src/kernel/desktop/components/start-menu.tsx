import { Computer3 } from '@react95/icons';
import { useRef, useState } from 'react';
import { Button, MenuList, MenuListItem, Separator } from 'react95';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import tayCharacter from '@/applications/tay/assets/tay.svg';
import { LogoImage, LogoTypo } from '@/components/logo';
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
      <StyledStartMenuButton onClick={() => setStartMenuOpen((prev) => !prev)}>
        <LogoImage width={20} height={20} />
        <span>Start</span>
      </StyledStartMenuButton>
      {isStartMenuOpen && (
        <StyledMenu>
          <LogoTypo
            className="logo"
            width={274 / 2}
            height={38 / 2}
            fill="white"
          />
          <StyledMenuList>
            <div className="main">
              <StyledMenuListItem
                onClick={() =>
                  handleClickMenu(() => navigate('/application/tay'))
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
        </StyledMenu>
      )}
    </div>
  );
}

const StyledStartMenuButton = styled(Button)`
  gap: 0.5rem;
`;

const StyledMenu = styled.div`
  position: absolute;
  bottom: calc(100% + 2px);
  left: 2px;
  width: 220px;
  height: auto;
  z-index: 1000;

  .logo {
    position: absolute;
    z-index: 1;
    transform: rotate(-90deg) translateY(100%);
    transform-origin: top left;
    left: -10px;
    bottom: -8px;
    opacity: 0.6;
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    z-index: 1;
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 28px;
    background: linear-gradient(180deg, blue, black);
  }
`;

const StyledMenuList = styled(MenuList)`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  height: 100%;
  min-height: 320px;

  .main {
    flex-grow: 1;
  }
`;

const StyledMenuListItem = styled(MenuListItem)`
  justify-content: flex-start;
  gap: 0.5rem;

  img {
    image-rendering: pixelated;
  }
`;
