import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { defaultTransition } from '@src/utils/framer.utils';
import clsx from 'clsx';
import styles from './PageWrapper.module.scss';

type PageWrapperProps = {
  children?: ReactNode;
  renderDescription: () => ReactNode;
  renderTitle: () => ReactNode;
  renderContent: () => ReactNode;
  className?: string;
  classes?: {
    titleWrapper?: string;
    descriptionWrapper?: string;
    contentWrapper?: string;
  };
};

const variants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
};

export const PageWrapper = ({
  children,
  renderContent,
  renderDescription,
  renderTitle,
  className,
  classes,
}: PageWrapperProps) => {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="enter"
      transition={[defaultTransition]}
      className={clsx(styles.pageWrapper, [className])}
    >
      <motion.div
        className={clsx(styles.titleWrapper, [classes?.titleWrapper])}
      >
        {renderTitle()}
      </motion.div>
      <motion.div
        className={clsx(styles.descriptionWrapper, [
          classes?.descriptionWrapper,
        ])}
      >
        {renderDescription()}
      </motion.div>
      <motion.div
        className={clsx(styles.contentWrapper, [classes?.contentWrapper])}
      >
        {renderContent()}
      </motion.div>
      {children}
    </motion.div>
  );
};
