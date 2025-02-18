import NewFileList from '@components/lists/NewFileList';
import UploadedFileList from '@components/lists/UploadedFileList';
import FilePicker from '@components/pickers/FilePicker';
import StatusPicker from '@components/pickers/StatusPicker';
import TaskUserPicker from '@components/pickers/TaskUserPicker';
import TypePicker from '@components/pickers/TypePicker';
import NotFoundStub from '@components/stubs/NotFoundStub';
import useTask from '@hooks/useTask';
import useTasks from '@hooks/useTasks';
import { IFile, IProject, IStatus, IType, IUser } from '@interfaces';
import { Button, CircularProgress, TextField } from '@mui/material';
import { projectInfoSelector } from '@selectors/projectSelectors';
import { TRootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './TaskEditorPage.module.css';

interface IProps {
  projectId: number;
  taskId: number;
  currentTitle: string;
  currentDescription: string;
  currentTimeAllotted: number;
  currentType: IType;
  currentStatus: IStatus;
  currentUser: IUser;
  currentFiles: IFile[];
}

const TaskEditorPage = ({
  projectId,
  taskId,
  currentTitle,
  currentDescription,
  currentTimeAllotted,
  currentType,
  currentStatus,
  currentUser,
  currentFiles,
}: IProps) => {
  const [title, setTitle] = React.useState<string>(currentTitle);
  const [description, setDescription] =
    React.useState<string>(currentDescription);
  const [timeAllotted, setTimeAllotted] =
    React.useState<number>(currentTimeAllotted);
  const [type, setType] = React.useState<IType | undefined>(currentType);
  const [status, setStatus] = React.useState<IStatus | undefined>(
    currentStatus
  );
  const [user, setUser] = React.useState<IUser | undefined>(currentUser);
  const [files, setFiles] = React.useState<File[]>([]);
  const [oldFiles, setOldFiles] = React.useState<IFile[]>(currentFiles);

  const projectInfo = useSelector<TRootState, IProject | undefined>(
    (state: TRootState) => projectInfoSelector(projectId)(state)
  );

  const { loading, updateTask } = useTasks(projectId);

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

  const deleteOldFile = React.useCallback(
    (file: IFile) => {
      setOldFiles((uploadedFiles: IFile[]) =>
        uploadedFiles.filter(
          (uploadedFile: IFile) => uploadedFile.name !== file.name
        )
      );
    },
    [oldFiles]
  );

  const updateCurrentTask = React.useCallback(() => {
    updateTask(
      taskId,
      title,
      description,
      status!,
      type!,
      user!,
      timeAllotted,
      files,
      oldFiles,
      goToProjectDetails
    );
  }, [
    taskId,
    title,
    description,
    timeAllotted,
    type,
    status,
    user,
    files,
    oldFiles,
  ]);

  const goToProjectDetails = React.useCallback(() => {
    navigate(-1);
  }, []);

  const isValid = React.useMemo<boolean>(() => {
    return (
      !!title.trim() &&
      !!description.trim() &&
      !!status &&
      !!type &&
      !!user &&
      timeAllotted >= 0
    );
  }, [title, description, status, type, user, timeAllotted]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Update Current Task</span>
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
            <TaskUserPicker
              usersInProject={projectInfo!.users}
              user={user}
              setUser={setUser}
            />
          </div>
        </div>
        <span className={styles.fileListTitle}>Uploaded Files</span>
        <div className={styles.fileList}>
          <UploadedFileList files={oldFiles} deleteFile={deleteOldFile} />
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
          onClick={updateCurrentTask}
          className={styles.button}
          variant="contained"
          disabled={loading || !isValid}
        >
          Update Current Task
        </Button>
      </div>
    </div>
  );
};

const TaskEditorHOC = () => {
  const { projectId, taskId } = useParams();

  const { task, error, loading } = useTask(projectId, taskId);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error || !task) {
    return (
      <NotFoundStub text="Something went wrong. Probably task was not found" />
    );
  }

  return (
    <TaskEditorPage
      projectId={parseInt(projectId!)}
      taskId={parseInt(taskId!)}
      currentTitle={task.title}
      currentDescription={task.description}
      currentTimeAllotted={task.timeAllotted}
      currentType={task.type}
      currentStatus={task.status}
      currentUser={task.user}
      currentFiles={task.files}
    />
  );
};

export default TaskEditorHOC;
