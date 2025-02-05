import RequirementsDocumentIcon from '@components/requirementsDocument/RequirementsDocumentIcon';
import { EMPTY_PHOTO_URL, IMAGE_BASE_URL } from '@constants';
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
      ? `${IMAGE_BASE_URL}/${currentUser.avatar}`
      : EMPTY_PHOTO_URL;
  }, [currentUser]);

  const navigate = useNavigate();

  const goToProfile = React.useCallback(() => {
    navigate(`/profile`);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.userDataContainer}>
        <RequirementsDocumentIcon />
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
