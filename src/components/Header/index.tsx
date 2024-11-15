import { IUser } from '@interfaces';
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

interface IProps {
  title: string;
  currentUser: IUser | undefined;
}

const Header = ({ title, currentUser }: IProps) => {
  const avatarUrl = React.useMemo(() => {
    return currentUser?.avatar
      ? currentUser.avatar
      : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
  }, [currentUser]);

  const navigate = useNavigate();

  const goToProfile = React.useCallback(() => {
    navigate(`/profile`);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.userDataContainer}>
        <img className={styles.avatar} src={avatarUrl} />
        <Button
          onClick={goToProfile}
          className={styles.button}
          variant="contained"
        >
          Profile
        </Button>
      </div>
    </div>
  );
};

export default Header;
