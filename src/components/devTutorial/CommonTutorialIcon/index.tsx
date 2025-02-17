import { ContactSupportOutlined } from '@mui/icons-material';
import React from 'react';
import DevTutorialDialog from '../DevTutorialDialog';
import styles from './CommonTutorialIcon.module.css';

const CommonTutorialIcon = () => {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={styles.container}>
      <ContactSupportOutlined onClick={openModal} className={styles.icon} />
      {open && <DevTutorialDialog title={'Common'} closeModal={closeModal} />}
    </div>
  );
};

export default CommonTutorialIcon;
