import React from 'react';
import styles from './AttachedFile.module.css';
import { IFile } from '../../interfaces';

interface IProps {
    file: IFile
}

const AttachedFile = ({file}: IProps) => {

    return (
      <div className={styles.container}>
        <img className={styles.image} src={file.name}/>
      </div>)
  }

export default AttachedFile