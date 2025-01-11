import { IUser } from '@interfaces';
import { TRootState } from '@store';
import { createSelector } from 'reselect';

const currentUserSelector = (state: TRootState) =>
  state.currentUser.currentUser!;

export const isAdminCurrentUserSelector = createSelector(
  [currentUserSelector],
  (user: IUser) => {
    if (user) {
      return user.role === 'ADMIN';
    }
    return false;
  }
);
