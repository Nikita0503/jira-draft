import { signUpAsyncAction } from '@actions/authActions';
import FilePicker from '@components/pickers/FilePicker';
import SupportButtons from '@components/SupportButtons';
import { EMPTY_PHOTO_URL } from '@constants';
import { TUserRole } from '@interfaces';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { TAppDispatch, TRootState } from '@store';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './SignUpPage.module.css';

const SignUpPage = () => {
  const [email, setEmail] = React.useState<string>('admin@gmail.com');
  const [name, setName] = React.useState<string>('AdminUser');
  const [password, setPassword] = React.useState<string>('Password12345');
  const [repeatPassword, setRepeatPassword] =
    React.useState<string>('Password12345');
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const [avatar, setAvatar] = React.useState<File | undefined>(undefined);

  const avatarUrl = React.useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : EMPTY_PHOTO_URL;
  }, [avatar]);

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.auth.loading
  );

  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();

  const signUp = React.useCallback(() => {
    const role: TUserRole = isAdmin ? 'ADMIN' : 'USER';
    dispatch(
      signUpAsyncAction({
        email: email,
        name: name,
        password: password,
        repeatPassword: repeatPassword,
        role: role,
        avatar: avatar,
        onSuccess: goToProjects,
      })
    );
  }, [email, name, password, repeatPassword, isAdmin, avatar]);

  const deleteAvatar = React.useCallback(() => {
    setAvatar(undefined);
  }, []);

  const goToProjects = React.useCallback(() => {
    navigate('/projects');
  }, []);

  const goToSignIn = React.useCallback(() => {
    navigate('/sign-in');
  }, []);

  const isValid = React.useMemo<boolean>(() => {
    return (
      !!email.trim() &&
      !!name.trim() &&
      !!password.trim() &&
      !!repeatPassword.trim() &&
      password === repeatPassword
    );
  }, [email, name, password, repeatPassword]);

  return (
    <div className={styles.container}>
      <div className={styles.supportButtonsContainer}>
        <SupportButtons title={'Sign Up'} />
      </div>
      <span className={styles.title}>Sign Up</span>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
          <img className={styles.avatar} src={avatarUrl} />
          <FilePicker setFile={setAvatar}>
            <Button className={styles.button} variant="contained">
              Choose Avatar
            </Button>
          </FilePicker>
          <Button
            onClick={deleteAvatar}
            className={styles.button}
            variant="contained"
          >
            Delete Avatar
          </Button>
        </div>
        <TextField
          className={styles.textField}
          label="Email"
          variant="filled"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Name"
          variant="filled"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Password"
          variant="filled"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        <TextField
          className={styles.textField}
          label="Repeat Password"
          variant="filled"
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
          type="password"
        />
        <div className={styles.checkboxContainer}>
          <Checkbox
            value={isAdmin}
            onChange={() => {
              setIsAdmin(!isAdmin);
            }}
          />
          <span>Sign up as Admin</span>
        </div>
        <Button
          onClick={signUp}
          className={styles.button}
          variant="contained"
          disabled={loading || !isValid}
        >
          Sign Up
        </Button>
        <Button
          onClick={goToSignIn}
          className={styles.button}
          variant="contained"
        >
          Go To Sign In
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
