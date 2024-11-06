import UniversalError from '@components/errors/UniversalError';
import TaskListItem from '@components/listItems/TaskListItem';
import UniversalStub from '@components/stubs/UniversalStub';
import { ITask } from '@interfaces';
import { CircularProgress } from '@mui/material';
import styles from './TaskList.module.css';

interface IProps {
  tasks: ITask[];
  error: any;
  loading: boolean;
}

const TaskList = ({ tasks, error, loading }: IProps) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <UniversalError text="Something went wrong" />;
  }

  if (tasks.length === 0) {
    return <UniversalStub text="No Tasks" />;
  }

  return (
    <>
      {tasks.map((task: ITask) => {
        return (
          <div key={task.id} className={styles.taskContainer}>
            <TaskListItem task={task} />
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
