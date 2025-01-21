import { Inetcpl1318 } from '@react95/icons';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { useClickOutside } from '@/lib/hook/use-click-outside';
import { sleep } from '@/lib/utils/sleep';

export function DesktopPrograms() {
  const navigate = useNavigate();

  return (
    <StyledList>
      <Program
        icon={<Inetcpl1318 width={48} height={48} />}
        label={'WeLabel'}
        onClick={() => navigate('/application/we-label')}
      />
    </StyledList>
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
    await sleep(1);
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
      <img className="active" src="/blue-active.svg" />
    </StyledListItem>
  );
}

const StyledListItem = styled.button`
  position: relative;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  flex-direction: column;
  cursor: pointer;
  border: 2px dotted transparent;
  width: 100px;
  height: fit-content;

  &:disabled {
    cursor: not-allowed;
    filter: grayscale(1);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
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

  & .active {
    display: none;
    z-index: 2;
  }

  &.clicked .active {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 48px;
    mix-blend-mode: invert;

    opacity: 1;
  }

  &.clicked .label {
    color: yellow;
    background-color: ${({ theme }) => theme.hoverBackground};
    border: 2px dotted yellow;
  }
`;
