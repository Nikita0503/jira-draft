import { ERequirementsDocumentSections } from 'interfaces/requirementsDocument';
import React from 'react';
import GeneralDescriptionSection from '../sections/GeneralDescriptionSection';
import SignInSection from '../sections/SignInSection';
import SignUpSection from '../sections/SignUpSection';
import styles from './RequirementsDocumentSection.module.css';

interface IProps {
  sectionId: number;
}

const RequirementsDocumentSection = ({ sectionId }: IProps) => {
  const section = React.useMemo(() => {
    if (sectionId === ERequirementsDocumentSections.GENERAL_DESCRIPTION) {
      return <GeneralDescriptionSection />;
    } else if (sectionId === ERequirementsDocumentSections.SIGN_IN) {
      return <SignInSection />;
    } else if (sectionId === ERequirementsDocumentSections.SIGN_UP) {
      return <SignUpSection />;
    }
  }, [sectionId]);

  return (
    <div className={styles.container}>
      <span>{section}</span>
    </div>
  );
};

export default RequirementsDocumentSection;
