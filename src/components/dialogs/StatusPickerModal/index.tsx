import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { IStatus } from '../../../interfaces';
import Status from '../../Status';
import styles from './StatusPickerModal.module.css';

export interface IProps {
  status: IStatus | undefined;
  selectStatus: (selectedStatus: IStatus) => void;
  closeModal: () => void;
}

const STATUSES: IStatus[] = [
  {
    id: 1,
    title: 'Backlog',
    color: '#00ff00',
  },
  {
    id: 2,
    title: 'In Progress',
    color: '#00ff00',
  },
  {
    id: 3,
    title: 'Done',
    color: '#00ff00',
  },
];

const StatusPickerModal = ({ status, selectStatus, closeModal }: IProps) => {
  return (
    <Dialog onClose={closeModal} open={true}>
      <div className={styles.container}>
        <span className={styles.title}>Select Status</span>
        <div className={styles.content}>
          <div>
            {STATUSES.map((statusItem: IStatus) => (
              <div
                key={statusItem.id}
                className={styles.statusContainer}
                onClick={() => selectStatus(statusItem)}
              >
                <Status status={statusItem} />
              </div>
            ))}
          </div>
          <Button
            onClick={closeModal}
            className={styles.button}
            variant="contained"
          >
            Close
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default StatusPickerModal;
