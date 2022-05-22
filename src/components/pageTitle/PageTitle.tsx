import styles from './PageTitle.module.scss';
import { motion, Variants } from 'framer-motion';
import { forwardRef } from 'react';

type PageTitleProps = {
  title: string;
};

const decoratorVariant: Variants = {
  initial: {
    opacity: 0,
    x: '100%',
  },
  enter: {
    opacity: 0.3,
    x: '-50%',
    transition: {
      duration: 0.65,
      delay: 1.5,
    },
  },
};

export const PageTitle = forwardRef<HTMLHeadingElement, PageTitleProps>(
  ({ title }, ref) => {
    return (
      <h1 ref={ref} className={styles.title} data-title={title}>
        {title}
        <motion.span
          variants={decoratorVariant}
          initial="initial"
          animate="enter"
          className={styles.decorator}
        >
          {title}
        </motion.span>
      </h1>
    );
  }
);

PageTitle.displayName = 'PageTitle';

export const MotionPageTitle = motion(PageTitle);
