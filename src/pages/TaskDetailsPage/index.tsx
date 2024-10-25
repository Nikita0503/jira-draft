import { Button } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AddFileButton from '../../components/AddFileButton';
import AttachedFile from '../../components/AttachedFile';
import Comment from '../../components/Comment';
import Status from '../../components/Status';
import TaskUser from '../../components/TaskUser';
import Type from '../../components/Type';
import { IComment, IFile, ITask } from '../../interfaces';
import styles from './TaskDetailsPage.module.css';

const TASK: ITask = {
  id: 2,
  title: 'Task title 2',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  timeTracked: 40,
  timeAlloted: 120,
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
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteCurrentTask = React.useCallback(() => {}, []);

  const goToTaskEditor = React.useCallback(() => {
    navigate('/projects/1/tasks/edit/1');
  }, []);

  const goToCommentEditor = React.useCallback(() => {
    navigate('/projects/1/tasks/1/comments/create');
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{TASK.title}</span>
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
        <span className={styles.description}>{TASK.description}</span>
        <div className={styles.additionalInfo}>
          <div className={styles.additionalInfoItem}>
            <Type type={TASK.type} />
          </div>
          <div className={styles.additionalInfoItem}>
            <Status status={TASK.status} />
          </div>
          <div className={styles.additionalInfoItem}>
            <TaskUser user={TASK.user} />
          </div>
        </div>
        <span className={styles.fileListTitle}>Files:</span>
        <div className={styles.fileList}>
          {TASK.files.map((file: IFile) => (
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
              <Comment comment={comment} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskDetailsPage;
