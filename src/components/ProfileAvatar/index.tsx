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
      return avatar;
    } else {
      return 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
    }
  }, [avatar]);

  const deleteCurrentAvatar = React.useCallback(() => {
    deleteAvatar();
  }, []);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={avatarUrl} />
      <div onClick={deleteCurrentAvatar} className={styles.deleteIcon}>
        <DeleteIcon color="error" />
      </div>
    </div>
  );
};

export default ProfileAvatar;
