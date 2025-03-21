'use client';

import { AsciiRenderer } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import { cn } from '@/lib/utils';

import Scene from './scene';

export interface Hero3DProps {
  className?: string;
}

export default function Hero3D({ className }: Hero3DProps) {
  return (
    <div className={cn('', className)}>
      <Canvas
        className="w-full h-full"
        camera={{ position: [4, 0, 10], fov: 50 }}
      >
        <Scene />
        <AsciiRenderer
          color={false}
          characters="░░▒█ "
          bgColor="transparent"
          resolution={0.2}
          fgColor="#ffffff"
        />
      </Canvas>
    </div>
  );
}
