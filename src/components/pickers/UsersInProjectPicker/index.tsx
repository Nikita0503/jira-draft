import { Button } from '@mui/material';
import React from 'react';
import { IUser } from '../../../interfaces';
import UsersInProjectModal from '../../dialogs/UsersInProjectModal';
import styles from './UsersInProjectPicker.module.css';

const USERS_IN_PROJECT: IUser[] = [
  {
    id: 1,
    email: 'some@email.com',
    role: 'USER',
    name: 'Default Name',
  },
  {
    id: 2,
    email: 'default@email.com',
    role: 'ADMIN',
    name: 'Default Name',
  },
];

const USERS_OUTSIDE_PROJECT: IUser[] = [
  {
    id: 3,
    email: 'user@email.com',
    role: 'USER',
    name: 'Default Name',
  },
  {
    id: 4,
    email: 'admin@email.com',
    role: 'ADMIN',
    name: 'Default Name',
  },
];

const UsersInProjectPicker = () => {
  const [open, setOpen] = React.useState(false);
  const [usersInProject, setUsersInProject] =
    React.useState<IUser[]>(USERS_IN_PROJECT);
  const [usersOutsideProject, setUsersOutsideProject] = React.useState<IUser[]>(
    USERS_OUTSIDE_PROJECT
  );

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
