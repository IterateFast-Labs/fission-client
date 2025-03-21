'use client';

import { Canvas } from '@react-three/fiber';

import { Scene } from './scene';

export default function Background3D() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}
