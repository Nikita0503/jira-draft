import React from 'react';
import styles from './UsersInProjectList.module.css';
import { SvgIconTypeMap } from '@mui/material';
import { IUser } from '../../../../interfaces';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import UserInProject from '../../../UserInProject';

export interface IProps {
  users: IUser[];
  onClick: (user: IUser) => void;
  Icon: OverridableComponent<SvgIconTypeMap>;
}

const UsersInProjectList = ({
  users,
  onClick,
  Icon
}: IProps) => {
  return (
      <div className={styles.container}>
        {users.map((user: IUser) => <UserInProject user={user} onClick={onClick} Icon={Icon} />)}
      </div>)
}

export default UsersInProjectList;
