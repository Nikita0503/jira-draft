import React from 'react';
import styles from './Comment.module.css';
import { IComment, IFile } from '../../interfaces';
import AttachedFile from '../AttachedFile';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import AddFileButton from '../AddFileButton';

interface IProps {
    comment: IComment
}

const Comment = ({comment}: IProps) => {

    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.userContainer}>
            <img className={styles.userAvatar} src={comment.user.avatar ?? 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'} />
            <span className={styles.userName}>{comment.user.name}</span>
          </div>
          <div className={styles.actionsContainer}>
            <EditIcon className={styles.actionIcon}/>
            <DeleteIcon className={styles.actionIcon}/>
          </div>
        </div>
        <span className={styles.title}>{comment.message}</span>
        <div className={styles.fileListContainer}>
            {comment.files.map((file: IFile) => <div className={styles.fileContainer}>
              <AttachedFile file={file}/>
            </div>)}
            <AddFileButton addFile={() => {}}/>
          </div>
      </div>)
  }

export default Comment;