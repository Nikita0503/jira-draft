import { TipsAndUpdatesOutlined } from '@mui/icons-material';
import React from 'react';
import DevTutorialDialog from '../DevTutorialDialog';
import styles from './DevTutorialIcon.module.css';

interface IProps {
  title: string;
}

const DevTutorialIcon = ({ title }: IProps) => {
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
      {open && <DevTutorialDialog title={title} closeModal={closeModal} />}
    </div>
  );
};

export default DevTutorialIcon;
