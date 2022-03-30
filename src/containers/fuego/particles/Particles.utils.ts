import { Object3D, Vector2 } from 'three';
import { ParticleModel } from '@src/containers/fuego/particles/Particles.types';

export const generateParticles = (count: number): ParticleModel[] => {
  const temp = [];
  for (let i = 0; i < count; i++) {
    const t = Math.random() * 100;
    const factor = 20 + Math.random() * 100;
    const speed = (0.005 + Math.random()) / 200;
    const xFactor = -25 + Math.random() * 50;
    const yFactor = -25 + Math.random() * 50;
    const zFactor = -5 + Math.random() * 10;
    temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
  }
  return temp;
};

type MoveParticlesParams = {
  dummy: Object3D;
  mouse: Vector2;
};

export const moveParticle =
  (particle: ParticleModel) =>
  ({ dummy, mouse }: MoveParticlesParams): Object3D => {
    let t = particle.t;
    const { factor, speed, xFactor, yFactor, zFactor } = particle;
    // There is no sense or reason to any of this, just messing around with trigonometric functions
    t = particle.t += speed / 2;
    const a = Math.cos(t) + Math.sin(t * 1) / 10;
    const b = Math.sin(t) + Math.cos(t * 2) / 10;
    const s = Math.cos(t);
    particle.mx += (mouse.x - particle.mx) * 0.01;
    particle.my += (mouse.y * -1 - particle.my) * 0.01;
    // Update the dummy object
    dummy.position.set(
      (particle.mx / 10) * a +
        xFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 1) * factor) / 10,
      (particle.my / 10) * b +
        yFactor +
        Math.sin((t / 10) * factor) +
        (Math.cos(t * 2) * factor) / 10,
      (particle.my / 10) * b +
        zFactor +
        Math.cos((t / 10) * factor) +
        (Math.sin(t * 3) * factor) / 10
    );
    dummy.scale.set(s, s, s);
    dummy.rotation.set(s * 5, s * 5, s * 5);
    dummy.updateMatrix();

    return dummy;
  };
