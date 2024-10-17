import React from 'react';
import { ITask } from '../../interfaces';
import styles from './TaskEditorPage.module.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TaskEditorPage = () => {

  const navigate = useNavigate(); 

  const createNewProject = React.useCallback(() => {
    navigate(-1);
  }, []); 

    return (
      <div className={styles.container}>
        <span className={styles.title}>Create New Task</span>
        <div className={styles.content}>
            <TextField className={styles.textField} label="Title" variant="filled" />
            <TextField className={styles.textField} label="Desription" variant="filled" />
            <Button onClick={createNewProject} className={styles.button} variant="contained">Create New Task</Button>
        </div>
      </div>)
}

export default TaskEditorPage;
