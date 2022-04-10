import { extend, GroupProps, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import * as meshline from 'meshline';
import { generateSparks } from '@src/containers/fuego/sparks/Sparks.utils';
import { useMouseParallax } from '@src/hooks/useMouseParallax/useMouseParallax';

extend(meshline);

type FatlineProps = {
  curve: number[];
  width: number;
  color: string;
  speed: number;
};

const Fatline = ({ curve, width, color, speed }: FatlineProps) => {
  const materialRef = useRef<meshline.MeshLineMaterial | null>(null!);

  useFrame(() => {
    if (!materialRef.current?.uniforms) {
      return;
    }

    materialRef.current.uniforms.dashOffset.value -= speed;
  });

  return (
    <mesh>
      <meshLine attach="geometry" points={curve} />
      <meshLineMaterial
        attach="material"
        ref={(val) => (materialRef.current = val)}
        depthTest={true}
        lineWidth={width}
        color={color}
        transparent
        dashArray={0.1}
        dashRatio={0.96}
      />
    </mesh>
  );
};

type SparksProps = GroupProps & {
  count: number;
  colors: string[];
  radius: number;
};

export const Sparks = ({
  count,
  colors,
  radius,
  ...groupProps
}: SparksProps) => {
  const linesRef = generateSparks({ count, colors, radius });

  const ref = useRef<Group | null>(null!);
  useMouseParallax(ref, { invertXY: false });

  return (
    <group
      ref={(val) => (ref.current = val)}
      scale={[0.16, 0.1, 1]}
      {...groupProps}
    >
      {linesRef.map((props, index) => (
        <Fatline key={index} {...props} />
      ))}
    </group>
  );
};
