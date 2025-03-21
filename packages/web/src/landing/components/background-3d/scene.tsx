import { Line, PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Scene() {
  const gridRef = useRef<THREE.Group>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  // Cursor's x-axis position from the center point
  // |----|-N|-----|0|----|+N|------|

  const xRef = useRef(0);

  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      xRef.current = event.clientX - window.innerWidth / 2;
    });
  }, []);

  useFrame(() => {
    if (!gridRef.current) return;
    if (!cameraRef.current) return;

    gridRef.current.position.z += 0.02;

    if (gridRef.current.position.z > 30) {
      gridRef.current.position.z = -30;
    }

    cameraRef.current.lookAt(xRef.current / 40, -54, 100);
  });

  return (
    <>
      <group ref={gridRef}>
        <GridLines />
      </group>

      <PerspectiveCamera makeDefault position={[0, 3, 0]} ref={cameraRef} />
    </>
  );
}

function GridLines() {
  const size = 60;
  const lines = [];

  for (let i = -size; i <= size; i++) {
    lines.push(
      <Line
        key={`horizontal-${i}`}
        points={[
          [-size, 0, i],
          [size, 0, i],
        ]}
        color="#525883"
        lineWidth={1}
      />,
    );

    lines.push(
      <Line
        key={`vertical-${i}`}
        points={[
          [i, 0, -size],
          [i, 0, size],
        ]}
        color="#525883"
        lineWidth={1}
      />,
    );
  }

  return <>{lines}</>;
}
