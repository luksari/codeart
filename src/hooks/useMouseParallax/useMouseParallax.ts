import { MutableRefObject } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

type UseMouseParallaxParams = {
  invertXY: boolean;
  xFactor?: number;
  yFactor?: number;
  zFactor?: number;
};

export const useMouseParallax = <T extends THREE.Object3D>(
  ref: MutableRefObject<T | null>,
  params?: UseMouseParallaxParams
) => {
  const { viewport } = useThree();
  const aspect = viewport.width / viewport.height;

  useFrame(({ mouse }) => {
    if (!ref.current) {
      return;
    }

    const { x, y } = params?.invertXY
      ? { x: mouse.y, y: mouse.x }
      : { x: mouse.x, y: mouse.y };

    const lerpX = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      x / aspect,
      params?.xFactor || 0.07
    );

    const lerpY = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      y / aspect,
      params?.yFactor || 0.07
    );

    const lerpZ = THREE.MathUtils.lerp(
      ref.current.rotation.z,
      (x * y) / aspect,
      params?.zFactor || 0.07
    );

    ref.current.rotation.x = lerpX;
    ref.current.rotation.y = lerpY;
    ref.current.rotation.z = lerpZ;
  });
};
