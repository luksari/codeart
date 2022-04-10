import { useLoader, GroupProps, extend } from '@react-three/fiber';
import React, { FC, useMemo } from 'react';
import { a, AnimatedProps } from '@react-spring/three';

import { FontLoader, TextGeometry } from 'three-stdlib';
import { MeshWobbleMaterial } from '@react-three/drei';

type TextMeshProps = AnimatedProps<GroupProps & { color: string }> & {
  children: string;
  size?: number;
  fontSize?: number;
  height?: number;
  font: 'vogue';
};

extend({ TextGeometry });

export const WobblyText: FC<TextMeshProps> = ({
  children,
  size = 1.5,
  fontSize = 8,
  height = 6,
  color,
  scale,
  font,
  ...groupProps
}) => {
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
      <a.mesh castShadow receiveShadow scale={scale} material-color={color}>
        <textGeometry args={[children, config]} />
        <MeshWobbleMaterial
          attach="material"
          metalness={0.6}
          roughness={0.25}
          speed={1.4}
          factor={0.2}
        />
      </a.mesh>
    </a.group>
  );
};
