import { useId, useState } from 'react';
import { galleryData } from '@src/components/gallery/Gallery.data';
import { GalleryLink } from '@src/components/gallery/galleryLink/GalleryLink';
import styles from './Gallery.module.scss';

export const Gallery = () => {
  const id = useId();
  const [isGridDisplay, setIsGridDisplay] = useState(true);

  return (
    <div className={styles.content}>
      <header className={styles.header}>
        <button
          className={styles.displayToggleButton}
          onClick={() => setIsGridDisplay((prev) => !prev)}
        >
          Toggle
        </button>
      </header>
      <div
        className={isGridDisplay ? styles.gridContainer : styles.listContainer}
      >
        <ul className={styles.elements}>
          {galleryData.map((elem, idx) => (
            <li className={styles.element} key={`${id}${idx}`}>
              <GalleryLink elem={elem} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
