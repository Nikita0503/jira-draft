import NewFileList from '@components/lists/NewFileList';
import FilePicker from '@components/pickers/FilePicker';
import NotFoundStub from '@components/stubs/NotFoundStub';
import useComments from '@hooks/useComments';
import useTask from '@hooks/useTask';
import { Button, CircularProgress, TextField } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CommentCreatorPage.module.css';

interface IProps {
  projectId: number;
  taskId: number;
}

const CommentCreatorPage = ({ projectId, taskId }: IProps) => {
  const [message, setMessage] = React.useState<string>('');
  const [files, setFiles] = React.useState<File[]>([]);

  const { loading, createComment } = useComments(projectId, taskId);

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

  const createNewComment = React.useCallback(() => {
    createComment(message, files, goToTaskDetails);
  }, [message, files]);

  const goToTaskDetails = React.useCallback(() => {
    navigate(-1);
  }, []);

  const isValid = React.useMemo<boolean>(() => {
    return !!message.trim();
  }, [message]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Create New Comment</span>
      <div className={styles.content}>
        <TextField
          className={styles.textField}
          label="Message"
          variant="filled"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
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
          onClick={createNewComment}
          className={styles.button}
          variant="contained"
          disabled={loading || !isValid}
        >
          Create New Comment
        </Button>
      </div>
    </div>
  );
};

const CommentCreatorHOC = () => {
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
    <CommentCreatorPage
      projectId={parseInt(projectId!)}
      taskId={parseInt(taskId!)}
    />
  );
};

export default CommentCreatorHOC;
