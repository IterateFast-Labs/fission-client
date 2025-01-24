import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import tayCharacter from '@/applications/tay/assets/tay.svg';
import { useClickOutside } from '@/lib/hook/use-click-outside';
import { sleep } from '@/lib/utils/sleep';

export function DesktopApplications() {
  const navigate = useNavigate();

  return (
    <StyledList>
      <Program
        icon={<img src={tayCharacter} width={64} height={64} />}
        label={'Tay'}
        onClick={() => navigate('/application/tay')}
      />
    </StyledList>
  );
}

function Program({
  icon,
  label,
  onClick,
  disabled,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [clicked, setClicked] = useState<boolean>(false);

  useClickOutside(ref, () => setClicked(false));

  const handleClick = async () => {
    setClicked(true);
    await sleep(0.5);
    onClick();
  };

  return (
    <StyledListItem
      role="button"
      onClick={handleClick}
      ref={ref}
      className={clicked ? 'clicked' : ''}
      disabled={disabled}
    >
      <div className="icon">{icon}</div>
      <p className="label">{label}</p>
    </StyledListItem>
  );
}

const StyledList = styled.div`
  padding: 1rem;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const StyledListItem = styled.button`
  position: relative;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-direction: column;
  cursor: pointer;
  width: fit-content;
  height: fit-content;

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 64px;
    height: 64px;
  }

  .label {
    font-size: 1rem;
    color: white;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    z-index: 2;
    padding: 1px 4px;
    border: 2px dotted transparent;
    text-align: center;
  }

  &.clicked .label {
    color: yellow;
    background-color: ${({ theme }) => theme.hoverBackground};
    border: 2px dotted yellow;
  }
`;
