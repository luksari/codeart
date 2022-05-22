import { AnimationControls } from 'framer-motion';
import { defaultTweenTransition } from '@src/utils/framer.utils';

const gridColMove = [600, 400, 600, 800, 600];

export const galleryAnimationSequence = async (controls: AnimationControls) => {
  await controls.set((idx) => ({
    y: gridColMove[idx % 5],
    scale: 1.1,
    transition: defaultTweenTransition,
  }));

  await controls.start(() => ({
    y: 0,
  }));
};

export const startLoaderSequence = async (controls: AnimationControls) => {
  await controls.start({
    opacity: 0,
    transition: defaultTweenTransition,
    display: 'none',
  });
};
