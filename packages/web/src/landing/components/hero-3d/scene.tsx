'use client';

import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Scene() {
  const rotateGroupRef = useRef<THREE.Group>(null);

  const pivotGroupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!pivotGroupRef.current) return;

    const box = new THREE.Box3().setFromObject(pivotGroupRef.current);
    const center = box.getCenter(new THREE.Vector3());

    pivotGroupRef.current.position.sub(center);
  }, []);

  useFrame(() => {
    if (rotateGroupRef.current) {
      rotateGroupRef.current.rotation.y += 0.01;
      rotateGroupRef.current.rotation.x -= 0.001;
    }
  });

  return (
    <>
      <group ref={rotateGroupRef}>
        <group ref={pivotGroupRef}>
          <mesh
            onUpdate={(self) => {
              self.geometry.center();
            }}
            position={[-1.4, 0.3, 0]}
          >
            <torusGeometry args={[1.6, 0.6, 16, 10]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>

          <mesh
            onUpdate={(self) => {
              self.geometry.center();
            }}
            position={[1, -1, 0]}
          >
            <torusGeometry args={[2.4, 0.6, 16, 10]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
        </group>
      </group>

      {/* 조명 */}
      <ambientLight intensity={0.8} color={new THREE.Color('#421fb8')} />
      <directionalLight position={[4, 4, 4]} />
    </>
  );
}
