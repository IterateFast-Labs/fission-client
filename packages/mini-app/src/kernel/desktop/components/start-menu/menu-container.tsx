import React, { useRef, useState } from 'react';
import { Button } from 'react95';
import styled from 'styled-components';

import { LogoImage, LogoTypo } from '@/components/logo';
import { useClickOutside } from '@/lib/hook/use-click-outside';

function MenuContainer({
  children,
}: {
  // Function as Children
  children: (onMenuClick: (callback: () => void) => () => void) => JSX.Element;
}) {
  const listRef = useRef<HTMLDivElement>(null);
  const [isStartMenuOpen, setStartMenuOpen] = useState<boolean>(false);
  useClickOutside(listRef, () => setStartMenuOpen(false));

  const onMenuClick = (callback: () => void) => () => {
    callback();
    setStartMenuOpen(false);
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
          {children(onMenuClick)}
        </StyledMenu>
      )}
    </div>
  );
}

export default React.memo(MenuContainer);

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
