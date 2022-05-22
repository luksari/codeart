import { StaticImageData } from 'next/image';
import { generateUUID } from 'three/src/math/MathUtils';

export type GalleryDataModel = {
  title: string;
  slug: `/${string}`;
  cover: StaticImageData | string;
  id: string;
};

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
  cover: `/images/gallery/sombrero.png`,
  id: generateUUID(),
})) as GalleryDataModel[];
