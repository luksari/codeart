import styles from './Tekstowo.module.scss';

import dynamic from 'next/dynamic';
import nlpArr from '@src/assets/palette.json';
import { tekstowoDraw, tekstowoPreload, tekstowoSetup } from './Tekstowo.p5';

const palette = nlpArr[3];

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

export const TekstowoContainer = () => {
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
          preload={tekstowoPreload}
          draw={tekstowoDraw}
          setup={tekstowoSetup}
        />
      </div>
    </div>
  );
};
