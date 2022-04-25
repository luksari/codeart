import styles from './SombreroContainer.module.scss';
import Image from 'next/image';

import dynamic from 'next/dynamic';
import {
  drawSombrero,
  setupSombrero,
} from '@src/containers/sombrero/SombreroContainer.p5';

import nlpArr from '@src/assets/palette.json';
import { SketchProps } from 'react-p5';
import { PageWrapper } from '@src/components/pageWrapper/PageWrapper';

const palette = nlpArr[37];

const Sketch = dynamic<SketchProps>(
  () => import('react-p5').then((mod) => mod.default),
  { ssr: false, loading: () => <p>loading...</p> }
);

const renderDescription = () => {
  return (
    <div className={styles.descriptionWrapper}>
      <p className={styles.paragraph}>
        <span className={styles.decor}>I</span> have created this{' '}
        <strong>Sombrero</strong> with <code>p5.js</code> algorithm, by
        experimenting with <strong>sinus and cosinus</strong> functions in order
        to create sombrero-like shape, basing on <code>x,y,z</code> coordinates
        system. <br />
        There were few motivations that inspired me to do that. Firstly, I have
        felt little bit devoid of energy during the winter, so I have been
        trying to think about positive, warm and energizing things, like
        <b> Mexican culture</b>.
        <br />
      </p>
      <p className={styles.paragraph}>
        Also my inspiration was <code>:pepemexicano:</code>
        <span className={styles.imageWrapper}>
          <Image
            src={'/images/pepe-sombrero.gif'}
            alt="Funny frog with sombrero and shac-shacs"
            layout="fill"
          />
        </span>
        custom emoji in company that I work with,
        <a href="https://tsh.io/">The Software House</a>. I have found it really
        powerful during casual conversations to emphasize joy and excitement.
      </p>
    </div>
  );
};

const renderContent = () => {
  return (
    <Sketch
      className={styles.canvas}
      setup={setupSombrero}
      draw={drawSombrero(palette)}
    />
  );
};

export const SombreroContainer = () => {
  return (
    <div
      className={styles.container}
      style={{
        ['--bgColor']: palette[2],
        [`--accentColor`]: palette[3],
        ['--baseColor']: '#2a2a2a',
      }}
    >
      <PageWrapper
        title="Sombrero"
        renderDescription={renderDescription}
        renderContent={renderContent}
        className={styles.wrapper}
      />
    </div>
  );
};
