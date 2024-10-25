import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ITask } from '../../../interfaces';
import TaskStatus from '../../TaskStatus';
import TaskType from '../../TaskType';
import TaskUser from '../../TaskUser';
import styles from './TaskListItem.module.css';

interface IProps {
  task: ITask;
}

const TaskListItem = ({ task }: IProps) => {
  const navigate = useNavigate();

  const goToTaskDetails = React.useCallback(() => {
    navigate('/projects/1/tasks/1');
  }, []);

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
        <EditIcon className={styles.actionIcon} />
        <DeleteIcon className={styles.actionIcon} />
      </div>
    </div>
  );
};

export default TaskListItem;
