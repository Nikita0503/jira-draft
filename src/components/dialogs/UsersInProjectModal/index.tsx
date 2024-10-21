import React from 'react';
import styles from './UsersInProjectModal.module.css';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { IUser } from '../../../interfaces';

export interface IProps {
  usersInProject: IUser[];
  usersOutsideProject: IUser[];
  addUserToProject: (selectedUser: IUser) => void;
  removeUserFromProject: (selectedUser: IUser) => void;
  closeModal: () => void;
}

const UsersInProjectModal = ({
  usersInProject, 
  usersOutsideProject, 
  addUserToProject,
  removeUserFromProject,
  closeModal}: IProps) => {

  return (
    <Dialog onClose={closeModal} open={true}>
      <div className={styles.container}>
        <span className={styles.title}>Users In Project</span>
        <div className={styles.content}>
            
            <Button onClick={closeModal} className={styles.button} variant="contained">Close</Button>
        </div>
      </div>
    </Dialog>)
}

export default UsersInProjectModal;
