import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SignInPage.module.css';

const SignInPage = () => {
  const navigate = useNavigate();

  const goToProjects = React.useCallback(() => {
    navigate('/projects');
  }, []);

  const goToSignUp = React.useCallback(() => {
    navigate('/sign-up');
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Sign In</span>
      <div className={styles.content}>
        <TextField
          className={styles.textField}
          label="Email"
          variant="filled"
        />
        <TextField
          className={styles.textField}
          label="Password"
          variant="filled"
        />
        <Button
          onClick={goToProjects}
          className={styles.button}
          variant="contained"
        >
          Sign In
        </Button>
        <Button
          onClick={goToSignUp}
          className={styles.button}
          variant="contained"
        >
          Go To Sign Up
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
