import { useLoader, GroupProps, extend } from '@react-three/fiber';
import React, { FC, useMemo, useRef } from 'react';
import { a, AnimatedProps } from '@react-spring/three';

import { FontLoader, TextGeometry } from 'three-stdlib';
import { Mesh } from 'three';
import { MeshWobbleMaterial } from '@react-three/drei';

type TextMeshProps = AnimatedProps<GroupProps & { color: string }> & {
  children: string;
  size?: number;
  fontSize?: number;
  height?: number;
  font: 'vogue';
};

extend({ TextGeometry });

export const TextMesh: FC<TextMeshProps> = ({
  children,
  size = 1.5,
  fontSize = 8,
  height = 6,
  color,
  scale,
  font,
  ...groupProps
}) => {
  const mesh = useRef<Mesh | null>(null);

  // parse JSON file with Three
  const loadedFont = useLoader(FontLoader, `/fonts/${font}.json`);

  const config = useMemo(
    () => ({
      font: loadedFont,
      size: fontSize,
      height: height,
    }),
    [loadedFont, fontSize, height]
  );

  return (
    <a.group scale={[0.1 * size, 0.1 * size, 0.1]} {...groupProps}>
      <a.mesh
        ref={mesh}
        castShadow
        receiveShadow
        scale={scale}
        material-color={color}
      >
        <textGeometry args={[children, config]} />
        <MeshWobbleMaterial
          attach="material"
          metalness={0.2}
          roughness={0}
          speed={1.7}
          factor={0.1}
        />
      </a.mesh>
    </a.group>
  );
};
