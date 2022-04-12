import styles from './SombreroContainer.module.scss';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import {
  drawSombrero,
  setupSombrero,
} from '@src/containers/sombrero/SombreroContainer.p5';

import nlpArr from '@src/assets/palette.json';
import { SketchProps } from 'react-p5';

const palette = nlpArr[37];

const Sketch = dynamic<SketchProps>(
  () => import('react-p5').then((mod) => mod.default),
  { ssr: false }
);

export const SombreroContainer = () => {
  return (
    <div
      className={styles.container}
      style={{ background: palette[2], [`--accentColor`]: palette[3] }}
    >
      <div className={styles.wrapper}>
        <div className={styles['title-wrapper']}>
          <h1 className={styles.title}>Sombrero</h1>
          <div className={styles['image-wrapper']}>
            <Image
              src={'/images/pepe-sombrero.gif'}
              alt="Funny from with sombrero and shac-shacs"
              layout="fill"
            />
          </div>
        </div>
        <p className={styles.paragraph}>
          <span className={styles.decor}>I</span> have created this{' '}
          <strong>Sombrero</strong> with <code>p5.js</code> algorithm, by
          experimenting with <strong>sinus and cosinus</strong> functions in
          order to create sombrero-like shape, basing on <code>x,y,z</code>{' '}
          coordinates system. <br />
          There were few motivations that inspired me to do that. Firstly, I
          have felt little bit devoid of energy during the winter, so I have
          been trying to think about positive things, like{' '}
          <b>Mexican culture</b>. <br />
          Also my inspiration was <code>:pepemexicano:</code> custom emoji in
          company that I work with,
          <a href="https://tsh.io/">The Software House</a>. I have found it
          really powerful during casual conversations.
        </p>
        <Sketch
          className={styles.canvas}
          setup={setupSombrero}
          draw={drawSombrero(palette)}
        />
      </div>
    </div>
  );
};
