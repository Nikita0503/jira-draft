import { Button } from '@mui/material';
import React from 'react';
import { IUser } from '../../../interfaces';
import TaskUserPickerModal from '../../dialogs/TaskUserPickerModal';
import styles from './TaskUserPicker.module.css';

const TaskUserPicker = () => {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState<IUser | undefined>();

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const selectUser = React.useCallback((selectedUser: IUser) => {
    setUser(selectedUser);
    closeModal();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>{user?.email ?? 'Not selected'}</span>
        {open && (
          <TaskUserPickerModal
            user={user}
            selectUser={selectUser}
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

export default TaskUserPicker;
