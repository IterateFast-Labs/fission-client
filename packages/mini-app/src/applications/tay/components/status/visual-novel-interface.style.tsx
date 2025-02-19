import { Button, Frame } from 'react95';
import styled from 'styled-components';

import BackGround from '@/applications/tay/assets/background.png';
import Character from '@/applications/tay/assets/character.png';
import Shadow from '@/applications/tay/assets/shadow.png';

export const StyledFrame = styled(Frame)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: block;
  position: relative;
`;

export const SelectContainer = styled.div`
  position: absolute;
  z-index: 3;
  width: calc(100% - 2rem);
  left: 1rem;
  top: calc(50% - 3rem);
  transform: translateY(-50%);
`;

export const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SelectItem = styled(Button).attrs({
  style: {
    textWrap: 'pretty',
  },
})``;

export const DialogContainer = styled.div`
  width: 100%;
  min-height: 90px;
  padding: 0.75rem 1rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.6) 0%,
    rgba(0, 0, 0, 1) 70%,
    rgba(0, 0, 0, 1) 100%
  );
  position: absolute;
  bottom: 0;
  z-index: 3;
  color: white;
  overflow-y: auto;

  & p {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .who {
    font-weight: bold;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
  }
`;

export const VisualContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

export const BackgroundImage = styled.img.attrs({
  src: BackGround,
  alt: 'Background',
})`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const CharacterImage = styled.img.attrs({
  src: Character,
  alt: 'Character',
})`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 100%;
  max-height: 100%;
  z-index: 2;
`;

export const ShadowImage = styled.img.attrs({
  src: Shadow,
  alt: 'Shadow',
})`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  max-width: 100%;
  max-height: 100%;
  z-index: 1;
`;
