import TaskListItem from '@components/listItems/TaskListItem';
import UsersInProjectPicker from '@components/pickers/UsersInProjectPicker';
import { IProject, ITask } from '@interfaces';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProjectDetailsPage.module.css';

const PROJECT: IProject = {
  id: 1,
  title: 'Project title 1',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  tasksCount: 12,
  users: [
    {
      id: 1,
      name: 'User Name',
      email: 'user@email.com',
      role: 'ADMIN',
    },
  ],
};

const TASKS: ITask[] = [
  {
    id: 1,
    title: 'Task title 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    timeTracked: 40,
    timeAlloted: 120,
    projectId: 1,
    statusId: 1,
    typeId: 1,
    userId: 1,
    status: {
      id: 1,
      title: 'In Progress',
      color: '#00ff00',
    },
    type: {
      id: 1,
      title: 'Task',
      color: '#0000ff',
    },
    user: {
      id: 1,
      email: 'user@email.com',
      role: 'ADMIN',
      name: 'User Name',
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
    files: [],
  },
  {
    id: 3,
    title: 'Task title 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    timeTracked: 40,
    timeAlloted: 120,
    projectId: 1,
    statusId: 3,
    typeId: 3,
    userId: 3,
    status: {
      id: 3,
      title: 'Done',
      color: '#00ff00',
    },
    type: {
      id: 3,
      title: 'Bug',
      color: '#0000ff',
    },
    user: {
      id: 3,
      email: 'some@email.com',
      role: 'ADMIN',
      name: 'Some Name',
    },
    files: [
      {
        id: 3,
        taskId: 3,
        name: 'https://www.computerhope.com/jargon/t/task.png',
      },
    ],
  },
];

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const showModalUsersInProject = React.useCallback(() => {}, []);

  const deleteCurrentProject = React.useCallback(() => {}, []);

  const goToProjectEditor = React.useCallback(() => {
    navigate('/projects/edit/1');
  }, []);

  const goToTaskEditor = React.useCallback(() => {
    navigate('/projects/1/tasks/create');
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{PROJECT.title}</span>
      <div className={styles.content}>
        <div className={styles.buttonsContainer}>
          <UsersInProjectPicker />
          <Button
            onClick={goToTaskEditor}
            className={styles.button}
            variant="contained"
          >
            Create Task
          </Button>
          <Button
            onClick={goToProjectEditor}
            className={styles.button}
            variant="contained"
          >
            Edit Project
          </Button>
          <Button
            onClick={deleteCurrentProject}
            className={styles.button}
            variant="outlined"
            color="error"
          >
            Delete Project
          </Button>
        </div>
        {TASKS.map((task: ITask) => {
          return (
            <div key={task.id} className={styles.taskContainer}>
              <TaskListItem task={task} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
