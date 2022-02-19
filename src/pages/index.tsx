import type { NextPage } from 'next';
import Link from 'next/link';
import styles from '@src/styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Homepage but you can go to
      <Link href="/sombrero">Sombrero</Link>
    </div>
  );
};

export default Home;
