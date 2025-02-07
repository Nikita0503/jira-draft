import Dialog from '@mui/material/Dialog';
import { getTutorialSet } from '@utils/tutorialSets';
import React from 'react';
import DevTutorialTabs from '../DevTutorialTabs';
import styles from './DevTutorialDialog.module.css';

export interface IProps {
  title: string;
  closeModal: () => void;
}

const DevTutorialDialog = ({ title, closeModal }: IProps) => {
  const tutorials = React.useMemo(() => {
    const tutorialSet = getTutorialSet(title);
    return tutorialSet;
  }, [title]);

  return (
    <Dialog onClose={closeModal} open={true} maxWidth="xl" fullWidth>
      <div className={styles.container}>
        <DevTutorialTabs tutorials={tutorials} />
      </div>
    </Dialog>
  );
};

export default DevTutorialDialog;
