import { IComment, IFile, IProject, ITask } from '../../interfaces';
import styles from './TaskDetailsPage.module.css';
import { useParams } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import Status from '../../components/Status';
import Type from '../../components/Type';
import TaskUser from '../../components/TaskUser';
import AttachedFile from '../../components/AttachedFile';
import Comment from '../../components/Comment';

const TASK: ITask = {
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
  files: [{
    id: 1,
    taskId: 1,
    name: 'https://cdn-icons-png.flaticon.com/512/747/747095.png'
  },{
    id: 2,
    taskId: 1,
    name: 'https://cdn-icons-png.flaticon.com/512/762/762686.png'
  }]
};

const COMMENTS: IComment[] = [{
  id: 1,
  message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  taskId: 1,
  userId: 1,
  user: {
    id: 2,
    email: "default@email.com",
    role: "ADMIN",
    name: "Default Name",
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
}]

const TaskDetailsPage = () => {

    const { id } = useParams(); 

    return (
      <div className={styles.container}>
        <span className={styles.title}>{TASK.title}</span>
        <div className={styles.content}>
          <span className={styles.description}>{TASK.description}</span>
          <span className={styles.filesTitle}>Files:</span>
          <div className={styles.filesContainer}>
            {TASK.files.map((file: IFile) => <div className={styles.fileContainer}>
              <AttachedFile file={file}/>
            </div>)}
          </div>
          <span className={styles.commentTitle}>Comments:</span>
          <div className={styles.commentsContainer}>
            {COMMENTS.map((comment: IComment) => <Comment comment={comment} />)}
          </div>
        </div>
      </div>)
}

export default TaskDetailsPage;