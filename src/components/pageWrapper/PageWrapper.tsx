import { ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';
import { defaultTransition } from '@src/utils/framer.utils';
import clsx from 'clsx';
import styles from './PageWrapper.module.scss';
import { BackButton } from '@src/components/backButton/BackButton';
import { PageTitle } from '@src/components/pageTitle/PageTitle';

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
        transition={[defaultTransition]}
        className={clsx(styles.pageWrapper, [className])}
      >
        <motion.div
          className={clsx(styles.contentWrapper, [classes?.contentWrapper])}
        >
          {renderContent()}
        </motion.div>
        <motion.div
          className={clsx(styles.titleWrapper, [classes?.titleWrapper])}
          variants={titleVariants}
          transition={[defaultTransition]}
          initial="initial"
          animate="enter"
        >
          <PageTitle title={title} />
        </motion.div>
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
