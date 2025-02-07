import Dialog from '@mui/material/Dialog';
import DevTutorialTabs from '../DevTutorialTabs';
import styles from './DevTutorialDialog.module.css';

export interface IProps {
  title: string;
  closeModal: () => void;
}

const DevTutorialDialog = ({ title, closeModal }: IProps) => {
  return (
    <Dialog onClose={closeModal} open={true} maxWidth="xl" fullWidth>
      <div className={styles.container}>
        <DevTutorialTabs />
      </div>
    </Dialog>
  );
};

export default DevTutorialDialog;
