import { TipsAndUpdatesOutlined } from '@mui/icons-material';
import React from 'react';
import DevTutorialDialog from '../DevTutorialDialog';
import styles from './DevTutorialIcon.module.css';

const DevTutorialIcon = () => {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <div className={styles.container}>
      <TipsAndUpdatesOutlined onClick={openModal} className={styles.icon} />
      {open && <DevTutorialDialog closeModal={closeModal} />}
    </div>
  );
};

export default DevTutorialIcon;
