import Link from 'next/link';
import Img from 'next/image';
import React, { forwardRef } from 'react';
import styles from './GalleryLink.module.scss';
import { GalleryDataModel } from '@src/components/gallery/Gallery.data';
import clsx from 'clsx';
import { defaultTweenTransition } from '@src/utils/framer.utils';
import { motion } from 'framer-motion';

type GalleryLinkProps = {
  elem: GalleryDataModel;
  className?: string;
  layoutId: string;
};

export const GalleryLink = forwardRef<HTMLLIElement, GalleryLinkProps>(
  ({ elem, className, layoutId }, ref) => {
    return (
      <motion.li
        className={clsx([styles.thumbnailWrapper, className])}
        layoutId={layoutId}
        transition={defaultTweenTransition}
        ref={ref}
        layout
      >
        <Link href={elem.slug} passHref={true}>
          <a className={styles.imageLink}>
            <Img src={elem.cover} objectFit="cover" layout="fill" />
          </a>
        </Link>
      </motion.li>
    );
  }
);

GalleryLink.displayName = 'GalleryLink';

export const MotionGalleryLink = motion(GalleryLink);
