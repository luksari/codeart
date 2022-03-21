import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { Light } from './light/Light';
import { Particles } from './particles/Particles';
import { Sparks } from './sparks/Sparks';
import { InteractiveText } from './interactiveText/InteractiveText';
import { sparksPalette } from '@src/containers/fuego/FuegoContainer.utils';

import { Fire } from '@src/containers/fuego/fire/fire';
import { Effects } from '@src/containers/fuego/effects/Effects';

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
          powerPreference: 'high-performance',
          antialias: false,
          stencil: false,
          depth: false,
        }}
        camera={{ position: [0, 0, 30], fov: 45, far: 45 }}
      >
        <color attach="background" args={['#020202']} />
        <Suspense fallback={() => <p>Loading...</p>}>
          <Fire color="#ffffff" scale={[17, 12, 4]} position={[0.5, 4, -5]} />
          <Light />
          <Particles count={10} />
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
