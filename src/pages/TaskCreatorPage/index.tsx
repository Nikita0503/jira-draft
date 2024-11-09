import NewFileList from '@components/lists/NewFileList';
import FilePicker from '@components/pickers/FilePicker';
import StatusPicker from '@components/pickers/StatusPicker';
import TaskUserPicker from '@components/pickers/TaskUserPicker';
import TypePicker from '@components/pickers/TypePicker';
import useTasks from '@hooks/useTasks';
import { IStatus, IType, IUser } from '@interfaces';
import { Button, TextField } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './TaskCreatorPage.module.css';

const TaskCreatorPage = () => {
  const { projectId } = useParams();

  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [timeAllotted, setTimeAllotted] = React.useState<number>(0);
  const [type, setType] = React.useState<IType | undefined>();
  const [status, setStatus] = React.useState<IStatus | undefined>();
  const [user, setUser] = React.useState<IUser | undefined>();
  const [files, setFiles] = React.useState<File[]>([]);

  const { loading, createTask } = useTasks(parseInt(projectId!));

  const navigate = useNavigate();

  const addFile = React.useCallback(
    (file: File) => {
      setFiles((uploadedFiles: File[]) => {
        const isSelectedFile = files.some(
          (uploadedFile: File) => uploadedFile.name === file.name
        );
        if (isSelectedFile) {
          alert('You have already selected a file with this name');
          return uploadedFiles;
        }
        return [...uploadedFiles, file];
      });
    },
    [files]
  );

  const deleteFile = React.useCallback(
    (file: File) => {
      setFiles((uploadedFiles: File[]) =>
        uploadedFiles.filter(
          (uploadedFile: File) => uploadedFile.name !== file.name
        )
      );
    },
    [files]
  );

  const createNewTask = React.useCallback(() => {
    createTask(
      title,
      description,
      status!,
      type!,
      user!,
      timeAllotted,
      files,
      goToProjectDetails
    );
  }, [title, description, timeAllotted, type, status, user, files]);

  const goToProjectDetails = React.useCallback(() => {
    navigate(-1);
  }, []);

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
          disabled={loading}
        >
          Create New Task
        </Button>
      </div>
    </div>
  );
};

export default TaskCreatorPage;
