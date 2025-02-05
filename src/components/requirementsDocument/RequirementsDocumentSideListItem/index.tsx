import styles from './RequirementsDocumentSideListItem.module.css';

interface IProps {
  title: string;
  onClick: (section: any) => void;
}

const RequirementsDocumentSideListItem = ({ title, onClick }: IProps) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <span>{title}</span>
    </div>
  );
};

export default RequirementsDocumentSideListItem;
