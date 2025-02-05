import { SECTIONS } from '@constants';
import Dialog from '@mui/material/Dialog';
import { ISection } from 'interfaces/requirementsDocument';
import React from 'react';
import RequirementsDocumentContent from '../RequirementsDocumentContent';
import RequirementsDocumentSideList from '../RequirementsDocumentSideList';
import styles from './RequirementsDocumentDialog.module.css';

export interface IProps {
  closeModal: () => void;
}

const RequirementsDocumentDialog = ({ closeModal }: IProps) => {
  const onSectionClick = React.useCallback((section: ISection) => {
    const element = document.getElementById(`section-${section.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <Dialog onClose={closeModal} open={true} maxWidth="xl" fullWidth>
      <div className={styles.container}>
        <RequirementsDocumentSideList
          sections={SECTIONS}
          onSectionClick={onSectionClick}
        />
        <RequirementsDocumentContent sections={SECTIONS} />
      </div>
    </Dialog>
  );
};

export default RequirementsDocumentDialog;
