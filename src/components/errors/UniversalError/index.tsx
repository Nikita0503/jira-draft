import styles from './UniversalError.module.css';

interface IProps {
  text: string;
}

const UniversalError = ({ text }: IProps) => {
  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://st5.depositphotos.com/70183936/64515/v/450/depositphotos_645154578-stock-illustration-error-creative-icons-desig.jpg"
      />
      <span className={styles.title}>{text}</span>
    </div>
  );
};

export default UniversalError;
