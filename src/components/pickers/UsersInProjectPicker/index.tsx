import useProjects from '@hooks/useProjects';
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
  projectId: number;
  usersInProject: IUser[];
}

const UsersInProjectPicker = ({ projectId, usersInProject }: IProps) => {
  const [open, setOpen] = React.useState(false);

  const usersOutsideProject = useSelector<TRootState, IUser[]>(
    (state: TRootState) => usersOutsideProjectSelector(usersInProject)(state)
  );

  const { fetchUsers } = useUsers();
  const { addUserToProject, removeUserFromProject } = useProjects();

  React.useEffect(() => {
    fetchUsers();
  }, []);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const addUserToCurrentProject = React.useCallback(
    (selectedUser: IUser) => {
      addUserToProject(projectId, selectedUser.id);
    },
    [projectId]
  );

  const removeUserFromCurrentProject = React.useCallback(
    (selectedUser: IUser) => {
      removeUserFromProject(projectId, selectedUser.id);
    },
    [projectId]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {open && (
          <UsersInProjectModal
            usersInProject={usersInProject}
            usersOutsideProject={usersOutsideProject}
            addUserToProject={addUserToCurrentProject}
            removeUserFromProject={removeUserFromCurrentProject}
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
