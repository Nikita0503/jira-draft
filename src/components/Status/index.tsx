import React from 'react';
import styles from './Status.module.css';
import { IStatus } from '../../interfaces';

interface IProps {
    status: IStatus
}

const Status = ({status}: IProps) => {

    return (
      <div className={styles.container}>
        <span className={styles.title}>{status.title}</span>
      </div>)
  }

export default Status