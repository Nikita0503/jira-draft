import UniversalError from '@components/errors/UniversalError';
import CommentListItem from '@components/listItems/CommentListItem';
import UniversalStub from '@components/stubs/UniversalStub';
import { IComment } from '@interfaces';
import { CircularProgress } from '@mui/material';
import styles from './CommentList.module.css';

interface IProps {
  comments: IComment[];
  error: any;
  loading: boolean;
}

const CommentList = ({ comments, error, loading }: IProps) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <UniversalError text="Something went wrong" />;
  }

  if (comments.length === 0) {
    return <UniversalStub text="No Comments" />;
  }

  return (
    <>
      {comments.map((comment: IComment) => (
        <div key={comment.id} className={styles.commentContainer}>
          <CommentListItem comment={comment} />
        </div>
      ))}
    </>
  );
};

export default CommentList;
