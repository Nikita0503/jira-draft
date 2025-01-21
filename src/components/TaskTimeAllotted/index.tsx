import React from 'react';
import styles from './TaskTimeAllotted.module.css';

interface IProps {
  timeAllotted: number;
}

const TaskTimeAllotted = ({ timeAllotted }: IProps) => {
  const time = React.useMemo(() => {
    if (timeAllotted > 0) {
      return `${timeAllotted} mins`;
    } else {
      return 'No deadlines';
    }
  }, [timeAllotted]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{time}</span>
    </div>
  );
};

export default TaskTimeAllotted;
