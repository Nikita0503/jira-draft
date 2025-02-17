import ImageModal from '@components/dialogs/ImageModal';
import { EMPTY_PHOTO_URL } from '@constants';
import DeleteIcon from '@mui/icons-material/DeleteForeverSharp';
import React from 'react';
import styles from './NewFile.module.css';

interface IProps {
  file: File;
  deleteFile: (file: File) => void;
}

const NewFile = ({ file, deleteFile }: IProps) => {
  const [open, setOpen] = React.useState(false);

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);
  const fileUrl = React.useMemo(() => {
    return file ? URL.createObjectURL(file) : EMPTY_PHOTO_URL;
  }, [file]);

  const deleteCurrentFile = React.useCallback(() => {
    deleteFile(file);
  }, [file]);

  return (
    <div className={styles.container} onClick={openModal}>
      <img className={styles.image} src={fileUrl} />
      <div onClick={deleteCurrentFile} className={styles.deleteIcon}>
        <DeleteIcon color="error" />
      </div>
      {open && <ImageModal imageUrl={fileUrl} closeModal={closeModal} />}
    </div>
  );
};

export default NewFile;
