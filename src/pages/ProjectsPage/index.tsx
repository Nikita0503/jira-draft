import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IProject } from '../../interfaces';
import styles from './ProjectsPage.module.css';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';

const PROJECTS: IProject[] = [{
  id: 1,
  title: 'Project title 1',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  tasksCount: 12,
  users: [{
      id: 1,
      name: "User Name",
      email: "user@email.com",
      role: 'ADMIN'
    }],
  },
  {
    id: 2,
    title: 'Project title 2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    tasksCount: 15,
    users: [{
        id: 1,
        name: "User Name",
        email: "user@email.com",
        role: 'ADMIN'
      },
      {
        id: 2,
        name: "User Name",
        email: "user@email.com",
        role: 'ADMIN'
      }],
    }
]

const ProjectsPage = () => {
    return (
      <div className={styles.container}>
        <span className={styles.title}>Projects</span>
        {PROJECTS.map((project: IProject) => {
          return <ProjectListItem project={project}/>
        })}
      </div>)
}

export default ProjectsPage;

interface IProjectListItemProps {
  project: IProject;
}

const ProjectListItem = ({project}: IProjectListItemProps) => {

  const navigate = useNavigate(); 

  const goToProjectDetails = React.useCallback(() => {
      navigate('/projects/1')
  }, []);


  return (<div className={styles.projectListItemContainer} onClick={goToProjectDetails}>
    <div className={styles.projectListItemInfo}>
      <span className={styles.projectListItemTitle}>{project.title}</span>
      <span className={styles.projectListItemDescription}>{project.description}</span>
      <div className={styles.projectListItemAdditionalInfo}>
        <span className={styles.projectListItemTasksCount}>Task Count: {project.tasksCount}</span>
        <span className={styles.projectListItemUsersCount}>Members: {project.users.length}</span>
      </div>
      </div>
    <div className={styles.projectListItemActions}>
      <EditIcon className={styles.projectListItemIcon}/>
      <DeleteIcon className={styles.projectListItemIcon}/>
    </div>
  </div>)
}