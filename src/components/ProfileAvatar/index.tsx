import { EMPTY_PHOTO_URL, IMAGE_BASE_URL } from '@constants';
import DeleteIcon from '@mui/icons-material/DeleteForeverSharp';
import React from 'react';
import styles from './ProfileAvatar.module.css';

interface IProps {
  avatar?: File | string | undefined;
  deleteAvatar: () => void;
}

const ProfileAvatar = ({ avatar, deleteAvatar }: IProps) => {
  const avatarUrl = React.useMemo(() => {
    if (avatar instanceof File) {
      return URL.createObjectURL(avatar);
    } else if (typeof avatar === 'string') {
      return `${IMAGE_BASE_URL}/${avatar}`;
    } else {
      return EMPTY_PHOTO_URL;
    }
  }, [avatar]);

  const deleteCurrentAvatar = React.useCallback(() => {
    deleteAvatar();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={avatarUrl} />
      {avatarUrl != EMPTY_PHOTO_URL && (
        <div onClick={deleteCurrentAvatar} className={styles.deleteIcon}>
          <DeleteIcon color="error" />
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
