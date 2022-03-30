import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Light } from './light/Light';
import { Particles } from './particles/Particles';
import { Sparks } from './sparks/Sparks';
import { InteractiveText } from './interactiveText/InteractiveText';
import { sparksPalette } from '@src/containers/fuego/FuegoContainer.utils';

import { Fire } from '@src/containers/fuego/fire/fire';
import { Effects } from '@src/containers/fuego/effects/Effects';
import * as THREE from 'three';

export const FuegoContainer = () => {
  return (
    <div>
      <Canvas
        shadows
        style={{
          position: 'absolute',
          top: 0,
        }}
        gl={{
          toneMapping: THREE.ReinhardToneMapping,
          powerPreference: 'high-performance',
          antialias: true,
          depth: true,
        }}
        camera={{ position: [0, 0, 27], fov: 40, far: 50 }}
      >
        <Suspense fallback={() => <p>Loading...</p>}>
          <color attach="background" args={['#020202']} />
          <fog attach="fog" args={[sparksPalette[3], 45, 60]} />
          <Fire color="#ffffff" scale={[17, 12, 4]} position={[0.5, 4, -5]} />
          <Light />
          <Particles count={100} />
          <InteractiveText position={[0, 0, 0]} scale={1.4} />
          <Sparks
            count={100}
            colors={sparksPalette}
            radius={5}
            position={[0.5, -3.5, 0]}
          />
          <Effects />
        </Suspense>
      </Canvas>
    </div>
  );
};
