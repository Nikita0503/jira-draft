import UploadedFile from '@components/UploadedFile';
import { EMPTY_PHOTO_URL, IMAGE_BASE_URL } from '@constants';
import useComments from '@hooks/useComments';
import useCurrentUser from '@hooks/useCurrentUser';
import useIsAdmin from '@hooks/useIsAdmin';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/EditOutlined';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IComment, IFile } from '../../../interfaces';
import styles from './CommentListItem.module.css';

interface IProps {
  comment: IComment;
}

const CommentListItem = ({ comment }: IProps) => {
  const { projectId, taskId } = useParams();

  const { isAdmin } = useIsAdmin();
  const { currentUser } = useCurrentUser();

  const isCurrentUserComment = React.useMemo(() => {
    return currentUser?.id === comment.user.id;
  }, [currentUser, comment]);

  const avatarUrl = React.useMemo(() => {
    return comment.user.avatar
      ? `${IMAGE_BASE_URL}/${comment.user.avatar}`
      : EMPTY_PHOTO_URL;
  }, [comment]);

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
          <img className={styles.userAvatar} src={avatarUrl} />
          <span className={styles.userName}>{comment.user.name}</span>
        </div>
        <div className={styles.actionsContainer}>
          {isCurrentUserComment && (
            <div onClick={goToCommentEditor}>
              <EditIcon className={styles.actionIcon} />
            </div>
          )}
          {(isCurrentUserComment || isAdmin) && (
            <div onClick={deleteCurrentComment}>
              <DeleteIcon className={styles.actionIcon} />
            </div>
          )}
        </div>
      </div>
      <span className={styles.title}>{comment.message}</span>
      <div className={styles.fileList}>
        {comment.files.map((file: IFile) => (
          <div key={file.id} className={styles.fileContainer}>
            <UploadedFile file={file} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentListItem;
