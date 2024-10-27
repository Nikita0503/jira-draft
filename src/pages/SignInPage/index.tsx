import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { signInAsyncAction } from '../../store/actions';
import styles from './SignInPage.module.css';

const SignInPage = () => {
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const signIn = React.useCallback(() => {
    dispatch(signInAsyncAction({ email: email, password: password }));
  }, [email, password]);

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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Password"
          variant="filled"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button onClick={signIn} className={styles.button} variant="contained">
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
