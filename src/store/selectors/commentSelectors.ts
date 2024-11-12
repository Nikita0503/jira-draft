import { IComment } from '@interfaces';
import { TRootState } from '@store';
import { createSelector } from 'reselect';

const commentsSelector = (state: TRootState) => state.comments.comments;

export const commentInfoSelector = (commentId: number) =>
  createSelector([commentsSelector], (comments: IComment[]) =>
    comments.find((comment: IComment) => comment.id == commentId)
  );
