/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils';

import css from './cut-scene.module.css';

export default function CutScene({ onEnd }: { onEnd: () => void }) {
  return (
    <div className="flex justify-center items-center h-svh">
      <div
        style={{
          maxWidth: 1024,
          aspectRatio: '16 / 9',
        }}
        className="overflow-hidden"
      >
        <div
          className={cn(css.roll)}
          style={
            {
              height: '100%',
              aspectRatio: `${1024 * 15} / 574`,
              '--frame-count': 15,
              '--duration': '2s',
            } as React.CSSProperties
          }
          onAnimationEnd={onEnd}
        >
          <img
            src={'/booting/sprite.png'}
            alt="cut-scene"
            className="w-full h-full"
            width={1024 * 15}
            height={574}
            style={{
              imageRendering: 'pixelated',
            }}
          />
        </div>
      </div>
    </div>
  );
}
