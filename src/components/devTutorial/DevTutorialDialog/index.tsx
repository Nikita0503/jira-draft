import Dialog from '@mui/material/Dialog';
import styles from './DevTutorialDialog.module.css';

export interface IProps {
  closeModal: () => void;
}

const DevTutorialDialog = ({ closeModal }: IProps) => {
  return (
    <Dialog onClose={closeModal} open={true} maxWidth="xl" fullWidth>
      <div className={styles.container}>hgello</div>
    </Dialog>
  );
};

export default DevTutorialDialog;
