import useUsers from '@hooks/useUsers';
import { Button } from '@mui/material';
import { usersOutsideProjectSelector } from '@selectors/usersSelectors';
import { TRootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import { IUser } from '../../../interfaces';
import UsersInProjectModal from '../../dialogs/UsersInProjectModal';
import styles from './UsersInProjectPicker.module.css';

interface IProps {
  usersInProject: IUser[];
}

const UsersInProjectPicker = ({ usersInProject }: IProps) => {
  const [open, setOpen] = React.useState(false);

  console.log({ usersInProject });

  const usersOutsideProject = useSelector<TRootState, IUser[]>(
    (state: TRootState) => usersOutsideProjectSelector(usersInProject)(state)
  );

  const { fetchUsers } = useUsers();

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const addUserToProject = React.useCallback((selectedUser: IUser) => {}, []);

  const removeUserFromProject = React.useCallback(
    (selectedUser: IUser) => {},
    []
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {open && (
          <UsersInProjectModal
            usersInProject={usersInProject}
            usersOutsideProject={usersOutsideProject}
            addUserToProject={addUserToProject}
            removeUserFromProject={removeUserFromProject}
            closeModal={closeModal}
          />
        )}
      </div>
      <Button onClick={openModal} className={styles.button} variant="contained">
        Users In Project
      </Button>
    </div>
  );
};

export default UsersInProjectPicker;
