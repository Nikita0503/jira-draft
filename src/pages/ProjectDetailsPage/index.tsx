import React from 'react';
import { IFile, IProject, ITask } from '../../interfaces';
import styles from './ProjectDetailsPage.module.css';
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import Status from '../../components/Status';
import Type from '../../components/Type';
import TaskUser from '../../components/TaskUser';

const PROJECT: IProject = {
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
}

const TASKS: ITask[] = [{
  id: 1,
  title: 'Task title 1',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  timeTracked: 40,
  timeAlloted: 120,
  projectId: 1,
  statusId: 1,
  typeId: 1,
  userId: 1,
  status: {
    id: 1,
    title: "In Progress",
    color: "#00ff00",
  },
  type: {
    id: 1,
    title: "Task",
    color: "#0000ff"
  },
  user: {
    id: 1,
    email: "user@email.com",
    role: "ADMIN",
    name: "User Name",
  },
  files: [{
    id: 1,
    taskId: 1,
    name: 'https://cdn-icons-png.flaticon.com/512/747/747095.png'
  },{
    id: 2,
    taskId: 1,
    name: 'https://cdn-icons-png.flaticon.com/512/762/762686.png'
  }]
},
{
  id: 2,
  title: 'Task title 2',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  timeTracked: 40,
  timeAlloted: 120,
  projectId: 1,
  statusId: 2,
  typeId: 2,
  userId: 2,
  status: {
    id: 2,
    title: "Testing",
    color: "#00ff00",
  },
  type: {
    id: 2,
    title: "Story",
    color: "#0000ff"
  },
  user: {
    id: 2,
    email: "default@email.com",
    role: "ADMIN",
    name: "Default Name",
  },
  files: []
},
{
  id: 3,
  title: 'Task title 3',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  timeTracked: 40,
  timeAlloted: 120,
  projectId: 1,
  statusId: 3,
  typeId: 3,
  userId: 3,
  status: {
    id: 3,
    title: "Done",
    color: "#00ff00",
  },
  type: {
    id: 3,
    title: "Bug",
    color: "#0000ff"
  },
  user: {
    id: 3,
    email: "some@email.com",
    role: "ADMIN",
    name: "Some Name",
  },
  files: [{
    id: 3,
    taskId: 3,
    name: 'https://www.computerhope.com/jargon/t/task.png'
  }]
}]


const ProjectDetailsPage = () => {

    const { projectId } = useParams(); 

    return (
      <div className={styles.container}>
        <span className={styles.title}>{PROJECT.title}</span>
        <div className={styles.content}>
          <span className={styles.titleTaskList}>Tasks:</span>
          {TASKS.map((task: ITask) => {
          return <TaskListItem task={task}/>
        })}
        </div>
      </div>)
}

export default ProjectDetailsPage;

interface ITaskListItemProps {
  task: ITask;
}

const TaskListItem = ({task}: ITaskListItemProps) => {

  const navigate = useNavigate(); 

  const goToTaskDetails = React.useCallback(() => {
      navigate('/projects/1/tasks/1')
  }, []);

  return (<div className={styles.taskListItemContainer} onClick={goToTaskDetails}>
    <div className={styles.taskListItemInfo}>
      <span className={styles.taskListItemTitle}>{task.title}</span>
      <span className={styles.taskListItemDescription}>{task.description}</span>
      <div className={styles.taskListItemStatusTypeUserContainer}>
        <div className={styles.taskListItemTypeContainer}>
          <Type type={task.type}/>
        </div>
        <div className={styles.taskListItemStatusContainer}>
          <Status status={task.status}/>
        </div>
        <div className={styles.taskListItemUserContainer}>
          <TaskUser user={task.user}/>
        </div>
      </div>
    </div>
    <div className={styles.taskListItemActions}>
      <EditIcon className={styles.taskListItemIcon}/>
      <DeleteIcon className={styles.taskListItemIcon}/>
    </div>
  </div>)
}