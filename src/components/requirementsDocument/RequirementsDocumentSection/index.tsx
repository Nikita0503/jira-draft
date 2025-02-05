import styles from './RequirementsDocumentSection.module.css';

interface IProps {
  text: string;
}

const RequirementsDocumentSection = ({ text }: IProps) => {
  return (
    <div className={styles.container}>
      <span>{text}</span>
    </div>
  );
};

export default RequirementsDocumentSection;
