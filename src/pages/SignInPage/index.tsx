import { signInAsyncAction } from '@actions/authActions';
import SupportButtons from '@components/SupportButtons';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './SignInPage.module.css';

const SignInPage = () => {
  const [email, setEmail] = React.useState<string>('admin@gmail.com');
  const [password, setPassword] = React.useState<string>('Password12345');

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.auth.loading
  );

  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();

  const signIn = React.useCallback(() => {
    dispatch(
      signInAsyncAction({
        email: email,
        password: password,
        onSuccess: goToProjects,
      })
    );
  }, [email, password]);

  const goToProjects = React.useCallback(() => {
    navigate('/projects');
  }, []);

  const goToSignUp = React.useCallback(() => {
    navigate('/sign-up');
  }, []);

  const isValid = React.useMemo<boolean>(() => {
    return !!email.trim() && !!password.trim();
  }, [email, password]);

  return (
    <div className={styles.container}>
      <div className={styles.supportButtonsContainer}>
        <SupportButtons title={'Sign In'} />
      </div>
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
          type="password"
        />
        <Button
          onClick={signIn}
          className={styles.button}
          variant="contained"
          disabled={loading || !isValid}
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
