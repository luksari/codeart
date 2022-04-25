import Link from 'next/link';
import styles from './BackButton.module.scss';
import clsx from 'clsx';

type BackButtonProps = {
  className?: string;
};

export const BackButton = ({ className }: BackButtonProps) => {
  return (
    <Link href={'/'} replace passHref>
      <a className={clsx(styles.button, [className])}>Go back home</a>
    </Link>
  );
};
