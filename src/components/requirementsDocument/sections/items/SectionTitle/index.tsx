import styles from './SectionTitle.module.css';

interface IProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

export default SectionTitle;
