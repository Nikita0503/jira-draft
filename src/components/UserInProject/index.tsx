import useIsAdmin from '@hooks/useIsAdmin';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import React from 'react';
import { IUser } from '../../interfaces';
import styles from './UserInProject.module.css';

interface IProps {
  user: IUser;
  onClick: (user: IUser) => void;
  Icon: OverridableComponent<SvgIconTypeMap>;
}

const UserInProject = ({ user, onClick, Icon }: IProps) => {
  const { isAdmin } = useIsAdmin();

  const handleClick = React.useCallback(() => {
    if (isAdmin) {
      onClick(user);
    }
  }, [isAdmin, onClick, user]);

  return (
    <div className={styles.container}>
      <span>{user.email}</span>
      <div onClick={handleClick} className={styles.iconContainer}>
        {isAdmin && <Icon className={styles.icon} />}
      </div>
    </div>
  );
};

export default UserInProject;
