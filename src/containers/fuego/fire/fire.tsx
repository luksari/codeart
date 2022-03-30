import * as THREE from 'three';
import { useLayoutEffect, useRef } from 'react';
import { extend, MeshProps, useFrame, useLoader } from '@react-three/fiber';
import { BoxGeometry, Mesh, ShaderMaterial } from 'three';
import { FireMaterial } from '@src/containers/fuego/fire/fireMaterial';

extend({ FireMaterial });

type FireProps = {
  color: string;
} & MeshProps;

/** @src https://codesandbox.io/s/shader-fire-3878x */
export const Fire = ({ color, ...props }: FireProps) => {
  const ref = useRef<Mesh<BoxGeometry, ShaderMaterial> | null>(null);
  const texture = useLoader(THREE.TextureLoader, 'images/fire-2.png');

  useFrame(({ clock }) => {
    if (!ref.current?.material) {
      return;
    }
    const invModelMatrix = ref.current.material.uniforms.invModelMatrix.value;
    ref.current.updateMatrixWorld();
    invModelMatrix.copy(ref.current.matrixWorld).invert();
    ref.current.material.uniforms.time.value = clock.elapsedTime;
    ref.current.material.uniforms.invModelMatrix.value = invModelMatrix;
    ref.current.material.uniforms.scale.value = ref.current.scale;
  });

  useLayoutEffect(() => {
    if (!ref.current?.material) {
      return;
    }

    texture.magFilter = texture.minFilter = THREE.LinearFilter;
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;
    ref.current.material.uniforms.fireTex.value = texture;
    ref.current.material.uniforms.color.value =
      color || new THREE.Color('#000000');
    ref.current.material.uniforms.invModelMatrix.value = new THREE.Matrix4();
    ref.current.material.uniforms.scale.value = new THREE.Vector3(1, 1, 1);
    ref.current.material.uniforms.seed.value = Math.random() * 21.37;
  }, [color, texture]);

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry />
      <fireMaterial transparent depthTest={false} alphaWrite={false} />
    </mesh>
  );
};
