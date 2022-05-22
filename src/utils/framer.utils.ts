import { Transition } from 'framer-motion';
import { config } from '@react-spring/core';

export const defaultTweenTransition: Transition = {
  type: 'tween',
  duration: 1,
};

export const defaultSpringTransition: Transition = {
  type: 'spring',
  ...config.molasses,
};
