import CommentList from '@components/lists/CommentList';
import NotFoundStub from '@components/stubs/NotFoundStub';
import TaskStatus from '@components/TaskStatus';
import TaskTimeAllotted from '@components/TaskTimeAllotted';
import TaskType from '@components/TaskType';
import TaskUser from '@components/TaskUser';
import UploadedFile from '@components/UploadedFile';
import useComments from '@hooks/useComments';
import useIsAdmin from '@hooks/useIsAdmin';
import useTask from '@hooks/useTask';
import useTasks from '@hooks/useTasks';
import { IFile, ITask } from '@interfaces';
import { Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './TaskDetailsPage.module.css';

interface IProps {
  taskInfo: ITask;
}

const TaskDetailsPage = ({ taskInfo }: IProps) => {
  const { projectId, taskId } = useParams();

  const { isAdmin } = useIsAdmin();

  const { deleteTask } = useTasks(parseInt(projectId!));
  const { comments, error, loading, fetchComments } = useComments(
    parseInt(projectId!),
    parseInt(taskId!)
  );

  React.useEffect(() => {
    fetchComments();
  }, []);

  const navigate = useNavigate();

  const deleteCurrentTask = React.useCallback(() => {
    const isConfirmed = window.confirm('Are you sure you want to delete?');
    if (isConfirmed) {
      deleteTask(parseInt(taskId!), goToProjectDetails);
    }
  }, [taskId]);

  const goToProjectDetails = React.useCallback(() => {
    navigate(`/projects/${projectId}`);
  }, [projectId]);

  const goToTaskEditor = React.useCallback(() => {
    navigate(`/projects/${projectId}/tasks/edit/${taskId}`);
  }, [projectId, taskId]);

  const goToCommentCreator = React.useCallback(() => {
    navigate(`/projects/${projectId}/tasks/${taskId}/comments/create`);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{taskInfo?.title}</span>
      <div className={styles.content}>
        <div className={styles.buttonsContainer}>
          <Button
            onClick={goToCommentCreator}
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
            disabled={!isAdmin}
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
          {taskInfo?.timeAllotted && (
            <div className={styles.additionalInfoItem}>
              <TaskTimeAllotted timeAllotted={taskInfo.timeAllotted} />
            </div>
          )}
        </div>
        {taskInfo!.files.length > 0 && (
          <>
            <span className={styles.fileListTitle}>Files:</span>
            <div className={styles.fileList}>
              {taskInfo!.files.map((file: IFile) => (
                <div key={file.id} className={styles.fileContainer}>
                  <UploadedFile file={file} />
                </div>
              ))}
            </div>
          </>
        )}
        <span className={styles.commentListTitle}>Comments:</span>
        <div className={styles.commentList}>
          <CommentList comments={comments} error={error} loading={loading} />
        </div>
      </div>
    </div>
  );
};

const TaskDetailsHOC = () => {
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

  return <TaskDetailsPage taskInfo={task} />;
};

export default TaskDetailsHOC;
