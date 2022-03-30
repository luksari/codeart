import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './HomeContainer.module.scss';

export const HomeContainer: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Gallery</h1>
      <ul className={styles.linksList}>
        <li className={styles.linkWrapper}>
          <Link href="/sombrero">Sombrero</Link>
        </li>
        <li className={styles.linkWrapper}>
          <Link href="/texty">Texty</Link>
        </li>
        <li className={styles.linkWrapper}>
          <Link href="/fuego">Fuego</Link>
        </li>
        <li className={styles.linkWrapper}>
          <Link href="/skate">Skate</Link>
        </li>
      </ul>
    </div>
  );
};
