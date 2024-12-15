import NewFileList from '@components/lists/NewFileList';
import UploadedFileList from '@components/lists/UploadedFileList';
import FilePicker from '@components/pickers/FilePicker';
import NotFoundStub from '@components/stubs/NotFoundStub';
import useComments from '@hooks/useComments';
import { IComment, IFile } from '@interfaces';
import { Button, TextField } from '@mui/material';
import { commentInfoSelector } from '@selectors/commentSelectors';
import { TRootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './CommentEditorPage.module.css';

interface IProps {
  projectId: number;
  taskId: number;
  commentId: number;
  currentMessage: string;
  currentFiles: IFile[];
}

const CommentEditorPage = ({
  projectId,
  taskId,
  commentId,
  currentMessage,
  currentFiles,
}: IProps) => {
  const [message, setMessage] = React.useState<string>(currentMessage);
  const [files, setFiles] = React.useState<File[]>([]);
  const [oldFiles, setOldFiles] = React.useState<IFile[]>(currentFiles);

  const { loading, updateComment } = useComments(projectId, taskId);

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

  const updateCurrentComment = React.useCallback(() => {
    updateComment(commentId, message, files, oldFiles, goToTaskDetails);
  }, [commentId, message, files, oldFiles]);

  const goToTaskDetails = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Update Current Comment</span>
      <div className={styles.content}>
        <TextField
          className={styles.textField}
          label="Message"
          variant="filled"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
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
          onClick={updateCurrentComment}
          className={styles.button}
          variant="contained"
          disabled={loading}
        >
          Update Current Comment
        </Button>
      </div>
    </div>
  );
};

const CommentEditorHOC = () => {
  const { projectId, taskId, commentId } = useParams();

  const commentInfo = useSelector<TRootState, IComment | undefined>(
    (state: TRootState) => commentInfoSelector(parseInt(commentId!))(state)
  );

  if (!commentInfo) {
    return <NotFoundStub text="Comment not found" />;
  }

  return (
    <CommentEditorPage
      projectId={parseInt(projectId!)}
      taskId={parseInt(taskId!)}
      commentId={parseInt(commentId!)}
      currentMessage={commentInfo.message}
      currentFiles={commentInfo.files}
    />
  );
};

export default CommentEditorHOC;
