import React from 'react';
import { Bloom, EffectComposer } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={1} luminanceSmoothing={0.3} height={300} />
    </EffectComposer>
  );
};
