import { IUser } from '@interfaces';
import { TRootState } from '@store';
import { createSelector } from 'reselect';

const usersSelector = (state: TRootState) => state.users.users;

export const usersOutsideProjectSelector = (usersInProject: IUser[]) =>
  createSelector([usersSelector], (users: IUser[]) =>
    users.filter(
      (user) =>
        !usersInProject.some((projectUser) => projectUser.id === user.id)
    )
  );
