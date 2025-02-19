import { useEffect, useState } from 'react';
import { Button, Frame } from 'react95';
import styled from 'styled-components';

import BackGround from '@/applications/tay/assets/background.png';
import Character from '@/applications/tay/assets/character.png';
import Shadow from '@/applications/tay/assets/shadow.png';
import { Typing } from '@/components/animation/typing';

export function VisualNovelInterface({
  sceneList,
  sceneId,
}: {
  sceneList: {
    sceneId: string;
    background: string;
    character: string;
    characterStyle?: React.CSSProperties;
    whoIsTalking: string;
    dialog: string | (() => Promise<string>);
    select: {
      text: string;
      onClick: () => void;
    }[];
    onNext: () => void;
  }[];
  sceneId: string;
}) {
  const [dialog, setDialog] = useState<string>('');

  const scene = sceneList.find((scene) => scene.sceneId === sceneId);

  console.log(scene?.select);

  useEffect(() => {
    if (typeof scene?.dialog === 'string') {
      setDialog(scene.dialog);
    }

    if (typeof scene?.dialog === 'function') {
      scene.dialog().then((response) => {
        setDialog(response);
      });
    }
  }, [sceneId]);

  return (
    <StyledFrame
      variant="field"
      onClick={() => {
        scene?.onNext();
      }}
    >
      <VisualContainer>
        {scene?.background === 'default' && <BackgroundImage />}
        {scene?.character === 'tay' && (
          <>
            <CharacterImage style={scene.characterStyle} />
            <ShadowImage
              style={{
                ...scene.characterStyle,
              }}
            />
          </>
        )}
      </VisualContainer>
      <SelectContainer>
        <SelectList>
          {scene?.select.map((item, index) => (
            <SelectItem key={index} onClick={item.onClick}>
              {item.text}
            </SelectItem>
          ))}
        </SelectList>
      </SelectContainer>
      <DialogContainer>
        <p className="who">{scene?.whoIsTalking} :</p>
        <Typing skipable={false} key={scene?.dialog + new Date().toUTCString()}>
          {dialog}
        </Typing>
      </DialogContainer>
    </StyledFrame>
  );
}

const StyledFrame = styled(Frame)`
  width: 100%;
  height: 100%;
  overflow: hidden;

  display: block;
  position: relative;
`;

const SelectContainer = styled.div`
  position: absolute;
  z-index: 3;
  width: calc(100% - 2rem);
  left: 1rem;
  top: calc(50% - 3rem);
  transform: translateY(-50%);
`;

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SelectItem = styled(Button).attrs({
  style: {
    textWrap: 'pretty',
  },
})``;

const DialogContainer = styled.div`
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

const VisualContainer = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.img.attrs({
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

const CharacterImage = styled.img.attrs({
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

const ShadowImage = styled.img.attrs({
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
