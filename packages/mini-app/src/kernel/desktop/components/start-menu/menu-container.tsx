import React, { useRef, useState } from 'react';

import { LogoImage } from '@/components/logo';
import { useClickOutside } from '@/lib/hook/use-click-outside';

import { StyledMenu, StyledStartMenuButton } from './menu-container.style';

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
      {isStartMenuOpen && <StyledMenu>{children(onMenuClick)}</StyledMenu>}
    </div>
  );
}

export default React.memo(MenuContainer);
