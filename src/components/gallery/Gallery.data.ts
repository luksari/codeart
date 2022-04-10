import skate from 'src/assets/skate.png';
import sombrero from 'src/assets/sombrero.png';
import { StaticImageData } from 'next/image';

export type GalleryDataModel = {
  title: string;
  slug: `/${string}`;
  cover: StaticImageData | string;
};

const size = (idx: number) => (idx % 2 ? '400/600' : '600/400');

export const galleryData = [
  {
    title: 'Sombrero',
    slug: '/sombrero',
    cover: 'https://picsum.photos/200/300',
  },
  { title: 'Sombrero', slug: '/sombrero', cover: sombrero },
  { title: 'Sombrero', slug: '/sombrero', cover: sombrero },
  { title: 'Sombrero', slug: '/sombrero', cover: sombrero },
  { title: 'Skate', slug: '/skate', cover: skate },
  { title: 'Sombrero', slug: '/sombrero', cover: sombrero },
  { title: 'Skate', slug: '/skate', cover: skate },
  { title: 'Skate', slug: '/skate', cover: skate },
  { title: 'Skate', slug: '/skate', cover: skate },
  { title: 'Skate', slug: '/skate', cover: skate },
].map((elem, idx) => ({
  ...elem,
  cover: `https://picsum.photos/${size(idx)}?random=${idx}`,
})) as GalleryDataModel[];
