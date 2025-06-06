import { Button, ButtonProps } from 'react95';
import styled from 'styled-components';

import { StyledHeader } from './window.style';

export function WindowHeader({
  icon,
  headerTitle,
  button,
}: {
  icon?: React.ReactNode;
  headerTitle: string;
  button?: React.ReactNode;
}) {
  const isIconExist = Boolean(icon);
  const isHeaderTitleExist = Boolean(headerTitle);
  const isButtonExist = Boolean(button);

  return (
    <StyledHeader>
      <div className="header">
        {isIconExist && <div className="icon">{icon}</div>}
        {isHeaderTitleExist && <div className="title">{headerTitle}</div>}
      </div>
      {isButtonExist && <div className="button">{button}</div>}
    </StyledHeader>
  );
}

export const WindowCloseButton = styled((props: ButtonProps) => {
  return (
    <Button {...props} square>
      <svg
        width={props.size === 'sm' ? '8' : '16'}
        height={props.size === 'sm' ? '7' : '14'}
        viewBox="0 0 8 7"
        fill={props.disabled ? 'gray' : 'black'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H2V1H3V2H5V1H6V0H8V1H7V2H6V3H5V4H6V5H7V6H8V7H6V6H5V5H3V6H2V7H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z"
        />
      </svg>
    </Button>
  );
})``;
