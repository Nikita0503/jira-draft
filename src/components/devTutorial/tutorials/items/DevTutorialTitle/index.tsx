import styles from './DevTutorialTitle.module.css';

interface IProps {
  children: React.ReactNode;
}

const DevTutorialTitle = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

export default DevTutorialTitle;
