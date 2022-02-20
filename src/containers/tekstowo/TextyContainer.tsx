import styles from './Texty.module.scss';

import dynamic from 'next/dynamic';
import nlpArr from '@src/assets/palette.json';
import { textyDraw, textyPreload, textySetup } from './Texty.p5';

const palette = nlpArr[3];

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

export const TextyContainer = () => {
  return (
    <div
      className={styles.container}
      style={{ background: palette[2], [`--accentColor`]: palette[1] }}
    >
      <div className={styles.wrapper}>
        <div className={styles['title-wrapper']}>
          <h1 className={styles.title}>Texty</h1>
        </div>
        <p className={styles.paragraph}>AAAAAAAA</p>
        <Sketch
          className={styles.canvas}
          preload={textyPreload}
          draw={textyDraw}
          setup={textySetup}
        />
      </div>
    </div>
  );
};
