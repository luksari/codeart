import React from 'react';
import {
  DepthOfField,
  EffectComposer,
  Vignette,
} from '@react-three/postprocessing';

export const Effects = () => {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0.45}
        focalLength={0.2}
        bokehScale={3}
        height={480}
      />
      <Vignette eskil={false} offset={0.1} darkness={0.7} />
    </EffectComposer>
  );
};
