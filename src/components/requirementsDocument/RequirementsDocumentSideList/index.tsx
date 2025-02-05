import { ISection } from 'interfaces/requirementsDocument';
import RequirementsDocumentSideListItem from '../RequirementsDocumentSideListItem';
import styles from './RequirementsDocumentSideList.module.css';

interface IProps {
  sections: ISection[];
  onSectionClick: (section: ISection) => void;
}

const RequirementsDocumentSideList = ({ sections, onSectionClick }: IProps) => {
  return (
    <div className={styles.container}>
      {sections.map((section: ISection) => (
        <RequirementsDocumentSideListItem
          key={`${section.title}`}
          title={section.title}
          onClick={() => onSectionClick(section)}
        />
      ))}
    </div>
  );
};

export default RequirementsDocumentSideList;
