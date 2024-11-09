import NewFileList from '@components/lists/NewFileList';
import FilePicker from '@components/pickers/FilePicker';
import StatusPicker from '@components/pickers/StatusPicker';
import TaskUserPicker from '@components/pickers/TaskUserPicker';
import TypePicker from '@components/pickers/TypePicker';
import { IStatus, IType, IUser } from '@interfaces';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TaskEditorPage.module.css';

const TaskEditorPage = () => {
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [timeAllotted, setTimeAllotted] = React.useState<number>(0);
  const [type, setType] = React.useState<IType | undefined>();
  const [status, setStatus] = React.useState<IStatus | undefined>();
  const [user, setUser] = React.useState<IUser | undefined>();
  const [files, setFiles] = React.useState<File[]>([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    console.log({ files });
  }, [files]);

  const addFile = React.useCallback(
    (file: File) => {
      const isSelectedFile = files.some(
        (uploadedFile: File) => uploadedFile.lastModified === file.lastModified
      );

      if (isSelectedFile) {
        alert('You have already selected this file');
        return;
      }

      setFiles([...files, file]);
    },
    [files]
  );

  const deleteFile = React.useCallback(
    (file: File) => {
      setFiles(
        files.filter(
          (uploadedFile: File) =>
            uploadedFile.lastModified !== file.lastModified
        )
      );
    },
    [files]
  );

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

        <span className={styles.fileListTitle}>New Files</span>
        <div className={styles.fileList}>
          <NewFileList files={files} deleteFile={deleteFile} />
        </div>
        <FilePicker setFile={addFile}>
          <Button className={styles.buttonAddFile} variant="contained">
            Add File
          </Button>
        </FilePicker>
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
