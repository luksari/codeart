import { extend, GroupProps, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import * as meshline from 'meshline';
import { generateSparks } from '@src/containers/fuego/sparks/Sparks.utils';
import { useMouseParallax } from '@src/hooks/useMouseParallax/useMouseParallax';

extend(meshline);

type Spark = {
  color: string;
  width: number;
  speed: number;
  curve: number[];
};

type FatlineProps = {
  curve: number[];
  width: number;
  color: string;
  speed: number;
};

const Fatline = ({ curve, width, color, speed }: FatlineProps) => {
  const material = useRef<meshline.MeshLineMaterial>();

  useFrame(() => {
    if (!material.current?.uniforms) {
      return;
    }

    material.current.uniforms.dashOffset.value -= speed;
  });
  return (
    <mesh>
      <meshLine attach="geometry" points={curve} />
      <meshLineMaterial
        attach="material"
        ref={material}
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

  const ref = useRef<Group | null>(null);
  useMouseParallax(ref, { invertXY: false });

  return (
    <group ref={ref} scale={[0.16, 0.1, 1]} {...groupProps}>
      {linesRef.map((props, index) => (
        <Fatline key={index} {...props} />
      ))}
    </group>
  );
};
