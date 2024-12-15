import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFoundStub.module.css';

interface IProps {
  text: string;
}

const NotFoundStub = ({ text }: IProps) => {
  const navigate = useNavigate();

  const goBack = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src="https://img.freepik.com/free-vector/hand-drawn-no-data-concept_52683-127823.jpg"
      />
      <span className={styles.title}>{text}</span>
      <Button onClick={goBack}>Go Back</Button>
    </div>
  );
};

export default NotFoundStub;
