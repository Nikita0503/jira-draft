import { ERequirementsDocumentSections } from 'interfaces/requirementsDocument';
import React from 'react';
import CreateTaskSection from '../sections/CreateTaskSection';
import GeneralDescriptionSection from '../sections/GeneralDescriptionSection';
import ProjectsSection from '../sections/ProjectsSection';
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
    } else if (sectionId === ERequirementsDocumentSections.PROJECTS) {
      return <ProjectsSection />;
    } else if (sectionId === ERequirementsDocumentSections.CREATE_TASK) {
      return <CreateTaskSection />;
    }
  }, [sectionId]);

  return (
    <div className={styles.container}>
      <span>{section}</span>
    </div>
  );
};

export default RequirementsDocumentSection;
