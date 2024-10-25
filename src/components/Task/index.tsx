import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Status from '../../components/Status';
import TaskUser from '../../components/TaskUser';
import Type from '../../components/Type';
import { ITask } from '../../interfaces';
import styles from './Task.module.css';

interface IProps {
  task: ITask;
}

const Task = ({ task }: IProps) => {
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
            <Type type={task.type} />
          </div>
          <div className={styles.additionalInfoItem}>
            <Status status={task.status} />
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

export default Task;
