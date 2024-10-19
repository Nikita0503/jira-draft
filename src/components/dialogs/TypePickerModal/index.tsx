import React from 'react';
import styles from './TypePickerModal.module.css';
import { Button, TextField } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import Type from '../../Type';
import { IType } from '../../../interfaces';

export interface IProps {
  type: IType | undefined;
  selectType: (selectedType: IType) => void;
  closeModal: () => void;
}

const TYPES: IType[] = [
  {
    id: 1,
    title: "Task",
    color: "#0000ff"
  },
  {
    id: 2,
    title: "Story",
    color: "#0000ff"
  },
  {
    id: 3,
    title: "Bug",
    color: "#0000ff"
  }
];

const TypePickerModal = ({type, selectType, closeModal}: IProps) => {

  return (
    <Dialog onClose={closeModal} open={true}>
      <div className={styles.container}>
        <span className={styles.title}>Select Type</span>
        <div className={styles.content}>
            <div>{TYPES.map((typeItem: IType) => 
              <div className={styles.typeContainer} onClick={() => selectType(typeItem)}>
                <Type type={typeItem}/>
              </div>)}</div>
            <Button onClick={closeModal} className={styles.button} variant="contained">Close</Button>
        </div>
      </div>
    </Dialog>)
}

export default TypePickerModal;
