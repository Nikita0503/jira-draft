import styles from './SectionSubtitle.module.css';

interface IProps {
  children: React.ReactNode;
}

const SectionSubtitle = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

export default SectionSubtitle;
