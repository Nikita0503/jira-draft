import CommentList from '@components/lists/CommentList';
import NotFoundStub from '@components/stubs/NotFoundStub';
import TaskStatus from '@components/TaskStatus';
import TaskType from '@components/TaskType';
import TaskUser from '@components/TaskUser';
import UploadedFile from '@components/UploadedFile';
import useComments from '@hooks/useComments';
import useTasks from '@hooks/useTasks';
import { IFile, IProject, ITask } from '@interfaces';
import { Button } from '@mui/material';
import { projectInfoSelector } from '@selectors/projectSelectors';
import { taskInfoSelector } from '@selectors/taskSelectors';
import { TRootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './TaskDetailsPage.module.css';

interface IProps {
  taskInfo: ITask;
}

const TaskDetailsPage = ({ taskInfo }: IProps) => {
  const { projectId, taskId } = useParams();

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

const ProjectDetailsHOC = () => {
  const { projectId, taskId } = useParams();

  const projectInfo = useSelector<TRootState, IProject | undefined>(
    (state: TRootState) => projectInfoSelector(parseInt(projectId!))(state)
  );

  const taskInfo = useSelector<TRootState, ITask | undefined>(
    (state: TRootState) => taskInfoSelector(parseInt(taskId!))(state)
  );

  if (!projectInfo) {
    return <NotFoundStub text="Project not found" />;
  }

  if (!taskInfo) {
    return <NotFoundStub text="Task not found" />;
  }

  return <TaskDetailsPage taskInfo={taskInfo} />;
};

export default ProjectDetailsHOC;
