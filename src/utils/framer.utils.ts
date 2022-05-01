import { Transition } from 'framer-motion';
import { config } from '@react-spring/core';

export const defaultTransition: Transition = {
  type: 'tween',
  duration: 0.15,
};

export const defaultSpringTransition: Transition = {
  type: 'spring',
  ...config.molasses,
};
