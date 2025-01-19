import styles from './TaskTimeAllotted.module.css';

interface IProps {
  timeAllotted: number;
}

const TaskTimeAllotted = ({ timeAllotted }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{timeAllotted} m</span>
    </div>
  );
};

export default TaskTimeAllotted;
