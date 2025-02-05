import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import tayCharacter from '@/applications/tay/assets/tay.svg';
import { useClickOutside } from '@/lib/hook/use-click-outside';
import { sleep } from '@/lib/utils/sleep';

import { StyledList, StyledListItem } from './index.styles';

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
