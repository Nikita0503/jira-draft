import React from 'react';
import { IProject } from '../../interfaces';
import styles from './ProjectsPage.module.css';
import Project from '../../components/Project';

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
          return <div className={styles.projectContainer}>
              <Project project={project}/>
            </div>
        })}
      </div>)
}

export default ProjectsPage;
