import React from 'react';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <EffectComposer>
      <Bloom intensity={0.1} luminanceThreshold={0.2} />
      <Vignette eskil={false} offset={0.1} darkness={0.7} />
    </EffectComposer>
  );
};
