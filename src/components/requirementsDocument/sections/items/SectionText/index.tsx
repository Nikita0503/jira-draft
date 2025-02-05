import styles from './SectionText.module.css';

interface IProps {
  children: React.ReactNode;
}

const SectionText = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

export default SectionText;
