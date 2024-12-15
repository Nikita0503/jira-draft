import { EMPTY_PHOTO_URL } from '@constants';
import DeleteIcon from '@mui/icons-material/DeleteForeverSharp';
import React from 'react';
import styles from './NewFile.module.css';

interface IProps {
  file: File;
  deleteFile: (file: File) => void;
}

const NewFile = ({ file, deleteFile }: IProps) => {
  const fileUrl = React.useMemo(() => {
    return file ? URL.createObjectURL(file) : EMPTY_PHOTO_URL;
  }, [file]);

  const deleteCurrentFile = React.useCallback(() => {
    deleteFile(file);
  }, [file]);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={fileUrl} />
      <div onClick={deleteCurrentFile} className={styles.deleteIcon}>
        <DeleteIcon color="error" />
      </div>
    </div>
  );
};

export default NewFile;
