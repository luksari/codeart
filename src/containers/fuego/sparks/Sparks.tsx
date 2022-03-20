import { extend, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import * as meshline from 'meshline';

extend(meshline);

type Spark = {
  color: string;
  width: number;
  speed: number;
  curve: number[];
};

type SparksProps = {
  count: number;
  colors: string[];
  radius: number;
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
        transparent
        depthTest={true}
        lineWidth={width}
        color={color}
        dashArray={0.1}
        dashRatio={0.9}
      />
    </mesh>
  );
};

const r = () => Math.max(0.01, Math.random());

export const Sparks = ({ count, colors, radius }: SparksProps) => {
  const lines = useMemo<Spark[]>(
    () =>
      Array.from({ length: count }).map((_, idx) => {
        const pos = new THREE.Vector3(
          Math.cos(idx) * radius * r(),
          Math.sin(idx) * radius * r(),
          r() * 2
        );
        const points = Array.from({ length: count }).map((_, index) => {
          const angle = (index / count) * Math.PI * 2;
          return pos
            .add(
              new THREE.Vector3(
                Math.cos(angle) * radius * r(),
                Math.sin(angle) * radius * r(),
                0
              )
            )
            .clone();
        });
        const curve = new THREE.CatmullRomCurve3(points)
          .getPoints(12)
          .flatMap((vec) => vec.toArray());

        return {
          color: colors[Math.floor(colors.length * Math.random())],
          width: Math.max(0.01, 0.03 / 100),
          speed: Math.max(0.001, 0.002 * Math.random()),
          curve,
        };
      }),
    [colors, count, radius]
  );

  const ref = useRef<Group>();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.x = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        mouse.y / aspect / 400,
        0.1
      );
      ref.current.rotation.y = THREE.MathUtils.lerp(
        ref.current.rotation.x,
        mouse.x / aspect / 200,
        0.1
      );
    }
  });

  return (
    <group ref={ref}>
      <group position={[-radius + 3.5, -radius + 1, 8]} scale={[0.15, 0.1, 1]}>
        {lines.map((props, index) => (
          <Fatline key={index} {...props} />
        ))}
      </group>
    </group>
  );
};
