import AddFileButton from '@components/AddFileButton';
import AttachedFile from '@components/AttachedFile';
import CommentListItem from '@components/listItems/CommentListItem';
import TaskStatus from '@components/TaskStatus';
import TaskType from '@components/TaskType';
import TaskUser from '@components/TaskUser';
import { IComment, IFile, ITask } from '@interfaces';
import { Button } from '@mui/material';
import { taskInfoSelector } from '@selectors/taskSelectors';
import { TRootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './TaskDetailsPage.module.css';

const COMMENTS: IComment[] = [
  {
    id: 1,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    taskId: 1,
    userId: 1,
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
  },
  {
    id: 2,
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    taskId: 1,
    userId: 1,
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
  },
];

const TaskDetailsPage = () => {
  const { projectId, taskId } = useParams();

  const taskInfo = useSelector<TRootState, ITask | undefined>(
    (state: TRootState) => taskInfoSelector(parseInt(taskId!))(state)
  );

  const navigate = useNavigate();

  const deleteCurrentTask = React.useCallback(() => {}, []);

  const goToTaskEditor = React.useCallback(() => {
    navigate(`/projects/${projectId}/tasks/edit/${taskId}`);
  }, [projectId, taskId]);

  const goToCommentEditor = React.useCallback(() => {
    navigate(`/projects/${projectId}/tasks/${taskId}/comments/create`);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{taskInfo?.title}</span>
      <div className={styles.content}>
        <div className={styles.buttonsContainer}>
          <Button
            onClick={goToCommentEditor}
            className={styles.button}
            variant="contained"
          >
            Create Comment
          </Button>
          <Button
            onClick={goToTaskEditor}
            className={styles.button}
            variant="contained"
          >
            Edit Task
          </Button>
          <Button
            onClick={deleteCurrentTask}
            className={styles.button}
            variant="outlined"
            color="error"
          >
            Delete Task
          </Button>
        </div>
        <span className={styles.description}>{taskInfo?.description}</span>
        <div className={styles.additionalInfo}>
          <div className={styles.additionalInfoItem}>
            <TaskType type={taskInfo!.type} />
          </div>
          <div className={styles.additionalInfoItem}>
            <TaskStatus status={taskInfo!.status} />
          </div>
          <div className={styles.additionalInfoItem}>
            <TaskUser user={taskInfo!.user} />
          </div>
        </div>
        <span className={styles.fileListTitle}>Files:</span>
        <div className={styles.fileList}>
          {taskInfo!.files.map((file: IFile) => (
            <div key={file.id} className={styles.fileContainer}>
              <AttachedFile file={file} />
            </div>
          ))}
          <AddFileButton addFile={() => {}} />
        </div>
        <span className={styles.commentListTitle}>Comments:</span>
        <div className={styles.commentList}>
          {COMMENTS.map((comment: IComment) => (
            <div key={comment.id} className={styles.commentContainer}>
              <CommentListItem comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
