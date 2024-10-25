import { Button } from '@mui/material';
import React from 'react';
import { IStatus } from '../../../interfaces';
import StatusPickerModal from '../../dialogs/StatusPickerModal';
import styles from './StatusPicker.module.css';

const StatusPicker = () => {
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState<IStatus | undefined>();

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const selectStatus = React.useCallback((selectedStatus: IStatus) => {
    setStatus(selectedStatus);
    closeModal();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>{status?.title ?? 'Not selected'}</span>
        {open && (
          <StatusPickerModal
            status={status}
            selectStatus={selectStatus}
            closeModal={closeModal}
          />
        )}
      </div>
      <Button onClick={openModal} className={styles.button} variant="contained">
        Select
      </Button>
    </div>
  );
};

export default StatusPicker;
