import Link from 'next/link';
import Img from 'next/image';
import React, { FC } from 'react';
import styles from './GalleryLink.module.scss';
import { GalleryDataModel } from '@src/components/gallery/Gallery.data';

type Props = {
  elem: GalleryDataModel;
};

export const GalleryLink: FC<Props> = ({ elem }) => {
  return (
    <div className={styles.thumbnailWrapper}>
      <Link href={elem.slug} passHref={true}>
        <a className={styles.imageLink}>
          <Img src={elem.cover} objectFit="contain" width={400} height={600} />
        </a>
      </Link>
    </div>
  );
};
