import Dialog from '@mui/material/Dialog';
import { ISection } from 'interfaces/requirementsDocument';
import React from 'react';
import RequirementsDocumentContent from '../RequirementsDocumentContent';
import RequirementsDocumentSideList from '../RequirementsDocumentSideList';
import styles from './RequirementsDocumentDialog.module.css';

const SECTIONS: ISection[] = [
  { id: 1, title: 'general description', text: 'qwerty' },
  { id: 2, title: 'authorization', text: 'asdfgh' },
  { id: 3, title: 'projects', text: 'asfdasg' },
];

export interface IProps {
  closeModal: () => void;
}

const RequirementsDocumentDialog = ({ closeModal }: IProps) => {
  const onSectionClick = React.useCallback((section: ISection) => {
    const element = document.getElementById(`${section.id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <Dialog onClose={closeModal} open={true}>
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
