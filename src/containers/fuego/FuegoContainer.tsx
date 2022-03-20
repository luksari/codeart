import { Canvas } from '@react-three/fiber';
import React, { useRef } from 'react';
import * as THREE from 'three';
import { Effects } from './effects/Effects';
import { Light } from './light/Light';
import { Particles } from './particles/Particles';
import { Sparks } from './sparks/Sparks';
import { InteractiveText } from './interactiveText/InteractiveText';

const palette = ['#271e2c', '#613c51', '#844343', '#d37338', '#ffe279'];
const sparksPalette = [
  '#ea7434',
  '#f6a50b',
  '#A63923',
  '#BA2622',
  '#E38E35',
  '#F3D046',
];

export const FuegoContainer = () => {
  return (
    <Canvas
      shadows
      gl={{ stencil: false, antialias: false }}
      style={{
        position: 'absolute',
        top: 0,
      }}
      camera={{ position: [0, 0, 30], fov: 45 }}
    >
      <Light />
      <Particles count={10} />
      <Sparks count={100} colors={sparksPalette} radius={4} />
      <InteractiveText />
      <Effects />
    </Canvas>
  );
};
