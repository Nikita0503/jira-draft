import React from 'react';
import styles from './TypePicker.module.css';
import { IType } from '../../../interfaces';
import { Button } from '@mui/material';
import TypePickerModal from '../../dialogs/TypePickerModal';

const TypePicker = () => {

  const [open, setOpen] = React.useState(false);
  const [type, setType] = React.useState<IType | undefined>(  );

  const openModal = React.useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = React.useCallback(() => {
    setOpen(false);
  }, []);

  const selectType = React.useCallback((selectedType: IType) => {
    setType(selectedType);
    closeModal();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <span className={styles.title}>{type?.title ?? 'Not selected'}</span>
      {open && <TypePickerModal 
        type={type}
        selectType={selectType}
        closeModal={closeModal}/>}
      </div>
      <Button onClick={openModal} className={styles.button} variant="contained">Select</Button>
    </div>)
  }

export default TypePicker;