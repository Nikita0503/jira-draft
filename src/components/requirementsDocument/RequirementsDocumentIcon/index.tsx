import { InfoOutlined } from '@mui/icons-material';
import React from 'react';
import RequirementsDocumentDialog from '../RequirementsDocumentDialog';
import styles from './RequirementsDocumentIcon.module.css';

const RequirementsDocumentIcon = () => {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={styles.container}>
      <InfoOutlined onClick={openModal} className={styles.icon} />
      {open && <RequirementsDocumentDialog closeModal={closeModal} />}
    </div>
  );
};

export default RequirementsDocumentIcon;
