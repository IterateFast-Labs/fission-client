import { MenuList, MenuListItem } from 'react95';
import styled from 'styled-components';

export const StyledMenuList = styled(MenuList)`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  height: 100%;
  min-height: 320px;

  .main {
    flex-grow: 1;
  }

  .bottom {
    flex-shrink: 0;
  }
`;

export const StyledMenuListItem = styled(MenuListItem).attrs({
  className: 'menu-list-item',
})`
  justify-content: flex-start;
  gap: 0.5rem;

  img {
    image-rendering: pixelated;
  }
`;
