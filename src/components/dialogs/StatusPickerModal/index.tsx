import useStatuses from '@hooks/useStatuses';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { IStatus } from '../../../interfaces';
import Status from '../../TaskStatus';
import styles from './StatusPickerModal.module.css';

export interface IProps {
  selectStatus: (selectedStatus: IStatus) => void;
  closeModal: () => void;
}

const StatusPickerModal = ({ selectStatus, closeModal }: IProps) => {
  const { statuses, error, loading, fetchStatuses } = useStatuses();

  React.useEffect(() => {
    fetchStatuses();
  }, []);

  return (
    <Dialog onClose={closeModal} open={true}>
      <div className={styles.container}>
        <span className={styles.title}>Select Status</span>
        <div className={styles.content}>
          <div>
            {statuses.map((statusItem: IStatus) => (
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
