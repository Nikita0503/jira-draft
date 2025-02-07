import styles from './DevTutorialSubtitle.module.css';

interface IProps {
  children: React.ReactNode;
}

const DevTutorialSubtitle = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

export default DevTutorialSubtitle;
