import { useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { InstancedMesh, Object3D, PointLight } from 'three';
import {
  generateParticles,
  moveParticle,
} from '@src/containers/fuego/particles/Particles.utils';
import { Particle } from '@src/containers/fuego/particles/Particles.types';

type ParticlesProps = {
  count: number;
};

export const Particles = ({ count }: ParticlesProps) => {
  const mesh = useRef<InstancedMesh | null>(null);
  const light = useRef<PointLight | null>(null);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const dummyObj = useRef<Object3D>(new THREE.Object3D());
  // Generate some random positions, speed factors and timings
  const particles = useMemo<Particle[]>(
    () => generateParticles(count),
    [count]
  );

  // The innards of this hook will run every frame
  useFrame(({ mouse }) => {
    if (!light.current || !mesh.current || !dummyObj.current) {
      return;
    }
    // Makes the light follow the mouse
    light.current.position.set(mouse.x / aspect, -mouse.y / aspect, 0);

    particles.forEach((particle, index) =>
      moveParticle(
        particle,
        index
      )({ mouse, particles, mesh: mesh.current!, dummyObj: dummyObj.current })
    );

    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <group>
      <pointLight ref={light} distance={10} intensity={4} color="lightblue" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <dodecahedronGeometry args={[0.15, 0]} />
        <meshPhongMaterial color="#000" />
      </instancedMesh>
    </group>
  );
};
