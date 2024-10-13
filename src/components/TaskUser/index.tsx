import React from 'react';
import styles from './TaskUser.module.css';
import { IUser } from '../../interfaces';

interface IProps {
  user: IUser
}

const TaskUser = ({user}: IProps) => {

    return (
      <div className={styles.container}>
        <span className={styles.title}>{user.email}</span>
      </div>)
  }

export default TaskUser