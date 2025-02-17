import ImageModal from '@components/dialogs/ImageModal';
import { IMAGE_BASE_URL } from '@constants';
import { IFile } from '@interfaces';
import DeleteIcon from '@mui/icons-material/DeleteForeverSharp';
import React from 'react';
import styles from './UploadedFile.module.css';

interface IProps {
  file: IFile;
  deleteFile?: (file: IFile) => void;
}

const UploadedFile = ({ file, deleteFile }: IProps) => {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const fileUrl = React.useMemo(() => {
    return `${IMAGE_BASE_URL}/${file.name}`;
  }, [file]);

  const deleteCurrentFile = React.useCallback(() => {
    if (deleteFile) {
      deleteFile(file);
    }
  }, [file, deleteFile]);

  return (
    <div className={styles.container} onClick={openModal}>
      <img className={styles.image} src={fileUrl} />
      {deleteFile && (
        <div onClick={deleteCurrentFile} className={styles.deleteIcon}>
          <DeleteIcon color="error" />
        </div>
      )}
      {open && <ImageModal imageUrl={fileUrl} closeModal={closeModal} />}
    </div>
  );
};

export default UploadedFile;
