import Link from 'next/link';
import Img from 'next/image';
import React, { FC } from 'react';
import styles from './GalleryLink.module.scss';
import { GalleryDataModel } from '@src/components/gallery/Gallery.data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { defaultTransition } from '@src/utils/framer.utils';

type Props = {
  elem: GalleryDataModel;
  className?: string;
  layoutId: string;
};

export const GalleryLink: FC<Props> = ({ elem, className, layoutId }) => {
  return (
    <motion.li
      className={clsx([styles.thumbnailWrapper, className])}
      layoutId={layoutId}
      transition={defaultTransition}
      layout
    >
      <Link href={elem.slug} passHref={true}>
        <a className={styles.imageLink}>
          <Img src={elem.cover} objectFit="contain" layout="fill" />
        </a>
      </Link>
    </motion.li>
  );
};
