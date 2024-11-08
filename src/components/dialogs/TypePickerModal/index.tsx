import useTypes from '@hooks/useTypes';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import React from 'react';
import { IType } from '../../../interfaces';
import TaskType from '../../TaskType';
import styles from './TypePickerModal.module.css';

export interface IProps {
  selectType: (selectedType: IType) => void;
  closeModal: () => void;
}

const TypePickerModal = ({ selectType, closeModal }: IProps) => {
  const { types, error, loading, fetchTypes } = useTypes();

  React.useEffect(() => {
    fetchTypes();
  }, []);

  return (
    <Dialog onClose={closeModal} open={true}>
      <div className={styles.container}>
        <span className={styles.title}>Select Type</span>
        <div className={styles.content}>
          <div>
            {types.map((typeItem: IType) => (
              <div
                key={typeItem.id}
                className={styles.typeContainer}
                onClick={() => selectType(typeItem)}
              >
                <TaskType type={typeItem} />
              </div>
            ))}
          </div>
          <Button
            onClick={closeModal}
            className={styles.button}
            variant="contained"
          >
            Close
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default TypePickerModal;
