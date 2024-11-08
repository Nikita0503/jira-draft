import AttachedFile from '@components/AttachedFile';
import StatusPicker from '@components/pickers/StatusPicker';
import TaskUserPicker from '@components/pickers/TaskUserPicker';
import TypePicker from '@components/pickers/TypePicker';
import { IFile, IStatus, ITask, IType, IUser } from '@interfaces';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TaskEditorPage.module.css';

const TASK: ITask = {
  id: 2,
  title: 'Task title 2',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  timeTracked: 40,
  timeAllotted: 120,
  projectId: 1,
  statusId: 2,
  typeId: 2,
  userId: 2,
  status: {
    id: 2,
    title: 'Testing',
    color: '#00ff00',
  },
  type: {
    id: 2,
    title: 'Story',
    color: '#0000ff',
  },
  user: {
    id: 2,
    email: 'default@email.com',
    role: 'ADMIN',
    name: 'Default Name',
  },
  files: [
    {
      id: 1,
      taskId: 1,
      name: 'https://cdn-icons-png.flaticon.com/512/747/747095.png',
    },
    {
      id: 2,
      taskId: 1,
      name: 'https://cdn-icons-png.flaticon.com/512/762/762686.png',
    },
  ],
};

const TaskEditorPage = () => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [timeAllotted, setTimeAllotted] = React.useState<number>(0);
  const [type, setType] = React.useState<IType | undefined>();
  const [status, setStatus] = React.useState<IStatus | undefined>();
  const [user, setUser] = React.useState<IUser | undefined>();

  const navigate = useNavigate();

  const createNewTask = React.useCallback(() => {
    // navigate(-1);
    console.log({ title, description, timeAllotted, type, status, user });
  }, [title, description, timeAllotted, type, status, user]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Create New Task</span>
      <div className={styles.content}>
        <TextField
          className={styles.textField}
          label="Title"
          variant="filled"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Desription"
          variant="filled"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Time Allotted (minutes)"
          variant="filled"
          type="number"
          value={timeAllotted}
          onChange={(event) => {
            const value = event.target.value;
            if (value === '') {
              setTimeAllotted(0);
            } else if (/^\d+$/.test(value)) {
              setTimeAllotted(Number(value));
            }
          }}
        />
        <div className={styles.additionalInfo}>
          <div className={styles.additionalInfoItem}>
            <span className={styles.additionalInfoItemTitle}>Type:</span>
            <TypePicker type={type} setType={setType} />
          </div>
          <div className={styles.additionalInfoItem}>
            <span className={styles.additionalInfoItemTitle}>Status:</span>
            <StatusPicker status={status} setStatus={setStatus} />
          </div>
          <div className={styles.additionalInfoItem}>
            <span className={styles.additionalInfoItemTitle}>User:</span>
            <TaskUserPicker user={user} setUser={setUser} />
          </div>
        </div>
        <span className={styles.fileListTitle}>Files</span>
        <div className={styles.fileList}>
          {TASK.files.map((file: IFile) => (
            <div key={file.id} className={styles.fileContainer}>
              <AttachedFile file={file} />
              <Button className={styles.buttonDeleteFile} variant="contained">
                Delete
              </Button>
            </div>
          ))}
        </div>
        <Button className={styles.buttonAddFile} variant="contained">
          Add File
        </Button>

        <Button
          onClick={createNewTask}
          className={styles.button}
          variant="contained"
        >
          Create New Task
        </Button>
      </div>
    </div>
  );
};

export default TaskEditorPage;
