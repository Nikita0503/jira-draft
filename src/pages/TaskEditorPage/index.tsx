import React from 'react';
import { IFile, ITask } from '../../interfaces';
import styles from './TaskEditorPage.module.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Status from '../../components/Status';
import Type from '../../components/Type';
import TaskUser from '../../components/TaskUser';
import TypePicker from '../../components/pickers/TypePicker';
import StatusPicker from '../../components/pickers/StatusPicker';
import TaskUserPicker from '../../components/pickers/TaskUserPicker';
import AttachedFile from '../../components/AttachedFile';


const TASK: ITask = {
  id: 2,
  title: 'Task title 2',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  timeTracked: 40,
  timeAlloted: 120,
  projectId: 1,
  statusId: 2,
  typeId: 2,
  userId: 2,
  status: {
    id: 2,
    title: "Testing",
    color: "#00ff00",
  },
  type: {
    id: 2,
    title: "Story",
    color: "#0000ff"
  },
  user: {
    id: 2,
    email: "default@email.com",
    role: "ADMIN",
    name: "Default Name",
  },
  files: [{
    id: 1,
    taskId: 1,
    name: 'https://cdn-icons-png.flaticon.com/512/747/747095.png'
  },{
    id: 2,
    taskId: 1,
    name: 'https://cdn-icons-png.flaticon.com/512/762/762686.png'
  }]
};

const TaskEditorPage = () => {

  const navigate = useNavigate(); 

  const createNewTask = React.useCallback(() => {
    navigate(-1);
  }, []); 

  const showModalTypePicker = React.useCallback(() => {

  }, []);

  const showModalStatusPicker = React.useCallback(() => {

  }, []); 

  const showModalUserPicker = React.useCallback(() => {

  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Create New Task</span>
      <div className={styles.content}>
          <TextField className={styles.textField} label="Title" variant="filled" />
          <TextField className={styles.textField} label="Desription" variant="filled" />
          <TextField className={styles.textField} label="Time Allotted (minutes)" variant="filled" />
          <div className={styles.additionalInfo}>
            <div className={styles.additionalInfoItem} onClick={showModalTypePicker}>
              <span className={styles.additionalInfoItemTitle}>Type:</span>
              <TypePicker />
            </div>
            <div className={styles.additionalInfoItem} onClick={showModalStatusPicker}>
              <span className={styles.additionalInfoItemTitle}>Status:</span>
              <StatusPicker />
            </div>
            <div className={styles.additionalInfoItem} onClick={showModalUserPicker}>
              <span className={styles.additionalInfoItemTitle}>User:</span>
              <TaskUserPicker />
            </div>
          </div>
          <span className={styles.fileListTitle}>Files</span>
          <div className={styles.fileList}>
            {TASK.files.map((file: IFile) => <div className={styles.fileContainer}>
                <AttachedFile file={file}/>
                <Button className={styles.buttonDeleteFile} variant="contained">Delete</Button>
              </div>)}
          </div>
          <Button className={styles.buttonAddFile} variant="contained">Add File</Button>
          
          <Button onClick={createNewTask} className={styles.button} variant="contained">Create New Task</Button>
      </div>
    </div>)
}

export default TaskEditorPage;
