import {
  Button,
  ButtonProps,
  WindowHeader as WindowHeaderOriginal,
} from 'react95';
import styled from 'styled-components';

export function WindowHeader({
  icon,
  headerTitle,
  button,
}: {
  icon: React.ReactNode;
  headerTitle: string;
  button: React.ReactNode;
}) {
  return (
    <StyledHeader>
      <div
        style={{
          display: 'flex',
          overflow: 'hidden',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        {icon}
        {headerTitle}
      </div>
      <div>{button}</div>
    </StyledHeader>
  );
}

const StyledHeader = styled(WindowHeaderOriginal)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const WindowCloseButton = styled((props: ButtonProps) => {
  return (
    <Button {...props} square variant="default">
      <svg
        width="16"
        height="14"
        viewBox="0 0 8 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 0H2V1H3V2H5V1H6V0H8V1H7V2H6V3H5V4H6V5H7V6H8V7H6V6H5V5H3V6H2V7H0V6H1V5H2V4H3V3H2V2H1V1H0V0Z"
          fill="black"
        />
      </svg>
    </Button>
  );
})``;
