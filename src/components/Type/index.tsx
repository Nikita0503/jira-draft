import React from 'react';
import styles from './Type.module.css';
import { IType } from '../../interfaces';

interface IProps {
    type: IType
}

const Type = ({type}: IProps) => {

    return (
      <div className={styles.container}>
        <span className={styles.title}>{type.title}</span>
      </div>)
  }

export default Type