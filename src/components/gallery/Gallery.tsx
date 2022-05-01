import { useEffect, useState } from 'react';
import { galleryData } from '@src/components/gallery/Gallery.data';
import { MotionGalleryLink } from '@src/components/gallery/galleryLink/GalleryLink';
import styles from './Gallery.module.scss';
import { AnimationControls, useAnimation } from 'framer-motion';
import { Loader } from '@src/components/loader/Loader';
import { defaultSpringTransition } from '@src/utils/framer.utils';

const gridColMove = [600, 400, 600, 800, 600];

const galleryAnimationSequence = async (controls: AnimationControls) => {
  await controls.set((idx) => ({
    y: gridColMove[idx % 5],
    scale: 1.1,
    transition: defaultSpringTransition,
  }));

  await controls.start(() => ({
    y: 0,
  }));
};

export const Gallery = () => {
  const loaderControls = useAnimation();
  const columnsControls = useAnimation();
  const [isGridDisplay, setIsGridDisplay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      await loaderControls.start({
        opacity: 0,
        transition: defaultSpringTransition,
        display: 'none',
      });

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
                transition={defaultSpringTransition}
                layoutId={`container-${idx}`}
                key={elem.slug}
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
