import styles from './Loader.module.scss';
import { AnimationControls, motion, Variants } from 'framer-motion';
import { defaultTweenTransition } from '@src/utils/framer.utils';

type LoaderProps = {
  title: string;
  controls: AnimationControls;
  bgColor?: string;
  textColor?: string;
};

const variants: Variants = {
  initial: {
    y: 50,
    scale: 0.7,
    opacity: 0,
  },
  enter: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
};

export const Loader = ({
  title,
  controls,
  textColor = '#ffffff',
  bgColor = '#222222',
}: LoaderProps) => {
  return (
    <motion.div
      animate={controls}
      className={styles.wrapper}
      style={{ background: bgColor, color: textColor }}
    >
      <motion.h1
        variants={variants}
        initial={'initial'}
        animate={'enter'}
        transition={defaultTweenTransition}
        className={styles.loaderText}
      >
        {title}
      </motion.h1>
    </motion.div>
  );
};
