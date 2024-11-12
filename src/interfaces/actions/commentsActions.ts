import { IComment, IFile } from '@interfaces';

export interface ISetCommentsAction {
  comments: IComment[];
}

export interface IAddCommentAction {
  comment: IComment;
}

export interface IUpdateCommentAction {
  comment: IComment;
}

export interface IRemoveCommentAction {
  comment: IComment;
}

export interface ISetError {
  error: any;
}

export interface ISetLoadingAction {
  loading: boolean;
}

export interface IFetchCommentsAsyncAction {
  projectId: number;
  taskId: number;
}

export interface ICreateCommentAsyncAction {
  projectId: number;
  taskId: number;
  message: string;
  files: File[];
  onSuccess?: () => void;
}

export interface IUpdateCommentAsyncAction {
  projectId: number;
  taskId: number;
  commentId: number;
  message: string;
  files: File[];
  oldFiles: IFile[];
  onSuccess?: () => void;
}

export interface IDeleteCommentAsyncAction {
  projectId: number;
  taskId: number;
  commentId: number;
  onSuccess?: () => void;
}
