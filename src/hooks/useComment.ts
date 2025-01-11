import { fetchCommentApi } from '@api/commentsApi';
import { IComment } from '@interfaces';
import React from 'react';

const useComment = (
  projectId: string | undefined,
  taskId: string | undefined,
  commentId: string | undefined
) => {
  const [comment, setComment] = React.useState<IComment | undefined>(undefined);
  const [error, setError] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchCommentData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchCommentApi(
        parseInt(projectId!),
        parseInt(taskId!),
        parseInt(commentId!)
      );
      if (response.comment) {
        setComment(response.comment);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [projectId, taskId]);

  React.useEffect(() => {
    fetchCommentData();
  }, [projectId, taskId, commentId]);

  return { comment, error, loading };
};

export default useComment;
