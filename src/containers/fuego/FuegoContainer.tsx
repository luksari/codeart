import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Light } from './light/Light';
import { Particles } from './particles/Particles';
import { Sparks } from './sparks/Sparks';
import { InteractiveText } from './interactiveText/InteractiveText';
import {
  fuegoPalette,
  sparksPalette,
} from '@src/containers/fuego/FuegoContainer.utils';
import {
  Bloom,
  EffectComposer,
  Outline,
  Selection,
  Select,
  DepthOfField,
  Vignette,
} from '@react-three/postprocessing';
import { Fire } from '@src/containers/fuego/fire/fire';
import { Effects } from './effects/Effects';

export const FuegoContainer = () => {
  return (
    <Canvas
      shadows
      style={{
        position: 'absolute',
        top: 0,
      }}
      gl={{
        powerPreference: 'high-performance',
        antialias: false,
        stencil: false,
        depth: false,
      }}
      camera={{ position: [0, 0, 30], fov: 45, far: 45 }}
    >
      <color attach="background" args={['#020202']} />
      <Suspense fallback={null}>
        <Fire color="#000000" scale={[17, 12, 2]} position={[0, 4, 4]} />
        <Light />
        <Particles count={10} />
        <InteractiveText />
        <Sparks count={100} colors={sparksPalette} radius={4} />
        <Effects />
      </Suspense>
    </Canvas>
  );
};
