import skate from 'src/assets/skate.png';
import sombrero from 'src/assets/sombrero.png';
import { StaticImageData } from 'next/image';

export type GalleryDataModel = {
  title: string;
  slug: `/${string}`;
  cover: StaticImageData | string;
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const size = (idx: number) =>
  idx % 2
    ? `${getRandomInt(300, 500)}/${getRandomInt(600, 700)}`
    : `${getRandomInt(600, 700)}/${getRandomInt(400, 500)}`;

export const galleryData = [
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
  { title: 'Sombrero', slug: '/sombrero' },
].map((elem, idx) => ({
  ...elem,
  cover: `https://picsum.photos/${size(idx)}?random=${idx}`,
})) as GalleryDataModel[];
