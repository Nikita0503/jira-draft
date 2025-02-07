import styles from './DevTutorialText.module.css';

interface IProps {
  children: React.ReactNode;
}

const DevTutorialText = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

export default DevTutorialText;
