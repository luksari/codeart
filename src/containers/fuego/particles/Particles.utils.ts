import { Particle } from '@src/containers/fuego/particles/Particles.types';
import { InstancedMesh, Object3D, Vector2 } from 'three';
import { MutableRefObject } from 'react';

export const generateParticles = (count: number) => {
  const temp = [];
  for (let i = 0; i < count; i++) {
    const t = Math.random() * 100;
    const factor = 20 + Math.random() * 100;
    const speed = 0.005 + Math.random() / 200;
    const xFactor = -50 + Math.random() * 100;
    const yFactor = -50 + Math.random() * 100;
    const zFactor = -50 + Math.random() * 100;
    temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
  }
  return temp;
};

type MoveParticlesParams = {
  dummy: Object3D;
  mouse: Vector2;
};

export const moveParticle =
  (particle: Particle) =>
  ({ dummy, mouse }: MoveParticlesParams): Object3D => {
    // Run through the randomized data to calculate some movement
    let { t } = particle;
    const { factor, speed, xFactor, yFactor, zFactor } = particle;
    // There is no sense or reason to any of this, just messing around with trigonometric functions
    t = particle.t += speed / 2.5;
    const a = Math.cos(t) + Math.sin(t) / 10;
    const b = Math.sin(t) + Math.cos(t * 2) / 10;
    const s = Math.cos(t);
    particle.mx += (mouse.x - particle.mx) * 0.01;
    particle.my += (mouse.y * -1 - particle.my) * 0.01;
    // Update the dummy object
    dummy.position.set(
      (particle.mx / 10) * a +
        xFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t) * factor) / 10,
      (particle.my / 10) * b +
        yFactor +
        Math.sin((t / 10) * factor) +
        (Math.cos(t * 2) * factor) / 10,
      (particle.my / 10) * b +
        zFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 3) * factor) / 10
    );
    dummy.scale.setScalar(s);
    dummy.rotation.set(s * 2, s * 2, s * 2);
    dummy.updateMatrix();

    return dummy;
  };
