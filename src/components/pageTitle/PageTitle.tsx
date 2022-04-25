import styles from './PageTitle.module.scss';

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <h1 className={styles.title} data-title={title}>
      {title}
    </h1>
  );
};
