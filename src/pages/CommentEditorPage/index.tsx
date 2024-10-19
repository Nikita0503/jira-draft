import React from 'react';
import { IComment, IFile } from '../../interfaces';
import styles from './CommentEditorPage.module.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AttachedFile from '../../components/AttachedFile';

const FILES: IFile[] = [{
  id: 1,
  taskId: 1,
  name: 'https://cdn-icons-png.flaticon.com/512/747/747095.png'
},{
  id: 2,
  taskId: 1,
  name: 'https://cdn-icons-png.flaticon.com/512/762/762686.png'
}]

const CommentEditorPage = () => {

  const navigate = useNavigate(); 

  const createNewComment = React.useCallback(() => {
    navigate(-1);
  }, []); 

    return (
      <div className={styles.container}>
        <span className={styles.title}>Create New Comment</span>
        <div className={styles.content}>
            <TextField className={styles.textField} label="Message" variant="filled" />
            <span className={styles.fileListTitle}>Files</span>
            <div className={styles.fileList}>
              {FILES.map((file: IFile) => <div className={styles.fileContainer}>
                  <AttachedFile file={file}/>
                  <Button className={styles.buttonDeleteFile} variant="contained">Delete</Button>
                </div>)}
            </div>
            <Button onClick={createNewComment} className={styles.button} variant="contained">Create New Comment</Button>
        </div>
      </div>)
}

export default CommentEditorPage;
