import useIsAdmin from '@hooks/useIsAdmin';
import useTasks from '@hooks/useTasks';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ITask } from '../../../interfaces';
import TaskStatus from '../../TaskStatus';
import TaskType from '../../TaskType';
import TaskUser from '../../TaskUser';
import styles from './TaskListItem.module.css';

interface IProps {
  task: ITask;
}

const TaskListItem = ({ task }: IProps) => {
  const { projectId } = useParams();

  const { isAdmin } = useIsAdmin();

  const navigate = useNavigate();

  const { deleteTask } = useTasks(parseInt(projectId!));

  const goToProjectDetails = React.useCallback(() => {
    navigate(`/projects/${projectId}`);
  }, [projectId]);

  const goToTaskDetails = React.useCallback(() => {
    navigate(`/projects/${projectId}/tasks/${task.id}`);
  }, [projectId, task]);

  const goToTaskEditor = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      navigate(`/projects/${projectId}/tasks/edit/${task.id}`);
    },
    [projectId, task]
  );

  const deleteCurrentTask = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      const isConfirmed = window.confirm('Are you sure you want to delete?');
      if (isConfirmed) {
        deleteTask(task.id, goToProjectDetails);
      }
    },
    [task]
  );

  return (
    <div className={styles.container} onClick={goToTaskDetails}>
      <div className={styles.content}>
        <span className={styles.title}>{task.title}</span>
        <span className={styles.description}>{task.description}</span>
        <div className={styles.additionalInfo}>
          <div className={styles.additionalInfoItem}>
            <TaskType type={task.type} />
          </div>
          <div className={styles.additionalInfoItem}>
            <TaskStatus status={task.status} />
          </div>
          <div className={styles.additionalInfoItem}>
            <TaskUser user={task.user} />
          </div>
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <div onClick={goToTaskEditor}>
          <EditIcon className={styles.actionIcon} />
        </div>
        {isAdmin && (
          <div onClick={deleteCurrentTask}>
            <DeleteIcon className={styles.actionIcon} />
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskListItem;
