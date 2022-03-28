import {
  Euler,
  GroupProps,
  useFrame,
  useThree,
  Vector3,
} from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Instance, Instances } from '@react-three/drei';
import { InstancedMesh, Object3D, PointLight } from 'three';
import {
  generateParticles,
  moveParticle,
} from '@src/containers/fuego/particles/Particles.utils';
import { ParticleModel } from '@src/containers/fuego/particles/Particles.types';

type ParticlesProps = {
  count: number;
};

type ParticleProps = {
  particle: ParticleModel;
} & GroupProps;

const Particle = ({ particle, ...rest }: ParticleProps) => {
  const ref = useRef<Object3D | null>();
  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    moveParticle(particle)({ dummy: ref.current, mouse: state.mouse });
  });

  return (
    <group {...rest}>
      <Instance ref={ref} />
    </group>
  );
};

export const Particles = ({ count }: ParticlesProps) => {
  const mesh = useRef<InstancedMesh | null>(null);
  const light = useRef<PointLight | null>(null);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  // Generate some random positions, speed factors and timings
  const particles = useMemo<ParticleModel[]>(
    () => generateParticles(count),
    [count]
  );

  // The innards of this hook will run every frame
  useFrame(({ mouse }) => {
    if (!light.current || !mesh.current) {
      return;
    }

    light.current.position.set(mouse.x / aspect, -mouse.y / aspect, 0);
  });

  return (
    <group>
      <pointLight ref={light} distance={1} intensity={4} color="red" />
      <Instances
        range={particles.length}
        geometry={new THREE.TetrahedronGeometry(0.3, 1)}
        material={new THREE.MeshPhongMaterial({ color: '#fff' })}
      >
        {particles.map((particle, i) => (
          <Particle particle={particle} key={i} />
        ))}
      </Instances>
    </group>
  );
};
