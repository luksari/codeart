import type { NextPage } from 'next';
import styles from './HomeContainer.module.scss';
import { Gallery } from '@src/components/gallery/Gallery';

export const HomeContainer: NextPage = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};
