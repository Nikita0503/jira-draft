import { ISection } from 'interfaces/requirementsDocument';
import RequirementsDocumentSection from '../RequirementsDocumentSection';
import styles from './RequirementsDocumentContent.module.css';

interface IProps {
  sections: ISection[];
}

const RequirementsDocumentContent = ({ sections }: IProps) => {
  return (
    <div className={styles.container}>
      {sections.map((section: any) => (
        <div id={`section-${section.id}`} key={section.id}>
          <RequirementsDocumentSection sectionId={section.id} />
        </div>
      ))}
    </div>
  );
};

export default RequirementsDocumentContent;
