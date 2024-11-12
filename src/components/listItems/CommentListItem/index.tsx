import useComments from '@hooks/useComments';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IComment, IFile } from '../../../interfaces';
import AddFileButton from '../../AddFileButton';
import AttachedFile from '../../AttachedFile';
import styles from './CommentListItem.module.css';

interface IProps {
  comment: IComment;
}

const CommentListItem = ({ comment }: IProps) => {
  const { projectId, taskId } = useParams();
  const navigate = useNavigate();

  const { deleteComment } = useComments(
    parseInt(projectId!),
    parseInt(taskId!)
  );

  const goToCommentEditor = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      navigate(
        `/projects/${projectId}/tasks/${taskId}/comments/${comment.id}/edit`
      );
    },
    [projectId, taskId, comment]
  );

  const deleteCurrentComment = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();
      const isConfirmed = window.confirm('Are you sure you want to delete?');
      if (isConfirmed) {
        deleteComment(comment.id);
      }
    },
    [comment]
  );

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.userContainer}>
          <img
            className={styles.userAvatar}
            src={
              comment.user.avatar ??
              'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
            }
          />
          <span className={styles.userName}>{comment.user.name}</span>
        </div>
        <div className={styles.actionsContainer}>
          <div onClick={goToCommentEditor}>
            <EditIcon className={styles.actionIcon} />
          </div>
          <div onClick={deleteCurrentComment}>
            <DeleteIcon className={styles.actionIcon} />
          </div>
        </div>
      </div>
      <span className={styles.title}>{comment.message}</span>
      <div className={styles.fileList}>
        {comment.files.map((file: IFile) => (
          <div key={file.id} className={styles.fileContainer}>
            <AttachedFile file={file} />
          </div>
        ))}
        <AddFileButton addFile={() => {}} />
      </div>
    </div>
  );
};

export default CommentListItem;
