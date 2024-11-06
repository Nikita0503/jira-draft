import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IProject } from '../../../interfaces';
import styles from './ProjectListItem.module.css';

interface IProps {
  project: IProject;
}

const ProjectListItem = ({ project }: IProps) => {
  const navigate = useNavigate();

  const goToProjectDetails = React.useCallback(() => {
    navigate(`/projects/${project.id}`);
  }, [project]);

  return (
    <div className={styles.container} onClick={goToProjectDetails}>
      <div className={styles.content}>
        <span className={styles.title}>{project.title}</span>
        <span className={styles.description}>{project.description}</span>
        <div className={styles.additionalInfo}>
          <span className={styles.taskCount}>
            Task Count: {project.tasksCount}
          </span>
          <span className={styles.userCount}>
            Members: {project.users.length}
          </span>
        </div>
      </div>
      <div className={styles.actionsContainer}>
        <EditIcon className={styles.actionIcon} />
        <DeleteIcon className={styles.actionIcon} />
      </div>
    </div>
  );
};

export default ProjectListItem;
