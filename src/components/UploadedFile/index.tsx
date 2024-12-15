import { IFile } from '@interfaces';
import DeleteIcon from '@mui/icons-material/DeleteForeverSharp';
import React from 'react';
import styles from './UploadedFile.module.css';

interface IProps {
  file: IFile;
  deleteFile?: (file: IFile) => void;
}

const UploadedFile = ({ file, deleteFile }: IProps) => {
  const fileUrl = React.useMemo(() => {
    return `http://localhost:5000/${file.name}`;
  }, [file]);

  const deleteCurrentFile = React.useCallback(() => {
    if (deleteFile) {
      deleteFile(file);
    }
  }, [file, deleteFile]);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={fileUrl} />
      {deleteFile && (
        <div onClick={deleteCurrentFile} className={styles.deleteIcon}>
          <DeleteIcon color="error" />
        </div>
      )}
    </div>
  );
};

export default UploadedFile;
