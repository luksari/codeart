import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { defaultTweenTransition } from '@src/utils/framer.utils';
import clsx from 'clsx';
import styles from './PageWrapper.module.scss';
import { BackButton } from '@src/components/backButton/BackButton';
import {
  MotionPageTitle,
  PageTitle,
} from '@src/components/pageTitle/PageTitle';

type PageWrapperProps = {
  children?: ReactNode;
  title: string;
  renderDescription: () => ReactNode;
  renderContent: () => ReactNode;
  className?: string;
  classes?: {
    titleWrapper?: string;
    descriptionWrapper?: string;
    contentWrapper?: string;
  };
};

const wrapperVariants: Variants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  enter: {
    opacity: 1,
    y: 0,
  },
};

const titleVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      delay: 0.8,
    },
  },
};

export const PageWrapper = ({
  children,
  title,
  renderContent,
  renderDescription,
  className,
  classes,
}: PageWrapperProps) => {
  return (
    <div>
      <BackButton className={styles.backBtn} />
      <motion.div
        variants={wrapperVariants}
        initial="initial"
        animate="enter"
        transition={defaultTweenTransition}
        className={clsx(styles.pageWrapper, [className])}
      >
        <motion.div
          className={clsx(styles.contentWrapper, [classes?.contentWrapper])}
        >
          {renderContent()}
        </motion.div>
        <div className={clsx(styles.titleWrapper, [classes?.titleWrapper])}>
          <MotionPageTitle
            title={title}
            variants={titleVariants}
            initial="initial"
            animate="enter"
          />
        </div>
        <motion.div
          className={clsx(styles.descriptionWrapper, [
            classes?.descriptionWrapper,
          ])}
        >
          {renderDescription()}
        </motion.div>

        {children}
      </motion.div>
    </div>
  );
};
