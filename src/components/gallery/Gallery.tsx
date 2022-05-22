import { useEffect, useState } from 'react';
import { galleryData } from '@src/components/gallery/Gallery.data';
import { MotionGalleryLink } from '@src/components/gallery/galleryLink/GalleryLink';
import styles from './Gallery.module.scss';
import { useAnimation } from 'framer-motion';
import { Loader } from '@src/components/loader/Loader';
import { galleryAnimationSequence, startLoaderSequence } from './Gallery.utils';
import { defaultTweenTransition } from '@src/utils/framer.utils';

export const Gallery = () => {
  const loaderControls = useAnimation();
  const columnsControls = useAnimation();
  const [isGridDisplay, setIsGridDisplay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      console.log('run');
      await startLoaderSequence(loaderControls);
      await galleryAnimationSequence(columnsControls);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [columnsControls, loaderControls]);

  return (
    <>
      <Loader title="Codeart" controls={loaderControls} />
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
          className={
            isGridDisplay ? styles.gridContainer : styles.listContainer
          }
        >
          <ul className={styles.elements}>
            {galleryData.map((elem, idx) => (
              <MotionGalleryLink
                elem={elem}
                className={styles.element}
                transition={defaultTweenTransition}
                layoutId={`container-${idx}`}
                key={elem.id}
                custom={idx}
                animate={columnsControls}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
