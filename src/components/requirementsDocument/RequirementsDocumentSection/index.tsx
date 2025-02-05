import React from 'react';
import GeneralDescriptionSection from '../sections/GeneralDescriptionSection';
import styles from './RequirementsDocumentSection.module.css';

interface IProps {
  sectionId: number;
}

const RequirementsDocumentSection = ({ sectionId }: IProps) => {
  const section = React.useMemo(() => {
    if (sectionId === 1) {
      return <GeneralDescriptionSection />;
    } else {
      return <GeneralDescriptionSection />;
    }
  }, [sectionId]);

  return (
    <div className={styles.container}>
      <span>{section}</span>
    </div>
  );
};

export default RequirementsDocumentSection;
