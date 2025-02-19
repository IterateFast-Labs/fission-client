import { useEffect, useState } from 'react';

import {
  BackgroundImage,
  CharacterImage,
  DialogContainer,
  SelectContainer,
  SelectItem,
  SelectList,
  ShadowImage,
  StyledFrame,
  VisualContainer,
} from '@/applications/tay/components/status/visual-novel-interface.style';
import { Scene } from '@/applications/tay/type';
import { Typing } from '@/components/animation/typing';

export function VisualNovelInterface({
  sceneList,
  sceneId,
}: {
  sceneList: Scene[];
  sceneId: string;
}) {
  const [dialog, setDialog] = useState<string>('');

  const scene = sceneList.find((scene) => scene.sceneId === sceneId);

  useEffect(() => {
    let mounted = true;

    if (typeof scene?.dialog === 'string') {
      setDialog(scene.dialog);
    }

    if (typeof scene?.dialog === 'function') {
      scene
        .dialog()
        .then((response) => {
          if (mounted) {
            setDialog(response);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return () => {
      mounted = false;
    };
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
