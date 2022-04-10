import type { NextPage } from 'next';
import { Gallery } from '@src/components/gallery/Gallery';

export const HomeContainer: NextPage = () => {
  return (
    <div>
      <Gallery />
    </div>
  );
};
