import React from 'react';
import { Bloom, EffectComposer, SSAO } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <EffectComposer>
      <SSAO radius={0.4} intensity={50} luminanceInfluence={0.4} color="red" />
      <Bloom
        intensity={1.25}
        kernelSize={2}
        luminanceThreshold={0.85}
        luminanceSmoothing={0.0}
      />
    </EffectComposer>
  );
};
