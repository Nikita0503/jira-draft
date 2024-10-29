import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FilePicker from '../../components/pickers/FilePicker';
import styles from './SingUpPage.module.css';

const SingUpPage = () => {
  const [email, setEmail] = React.useState<string>('admin@gmail.com');
  const [name, setName] = React.useState<string>('AdminUser');
  const [password, setPassword] = React.useState<string>('Password12345');
  const [repeatPassword, setRepeatPassword] =
    React.useState<string>('Password12345');
  const [isAdmin, setIsAdmin] = React.useState<boolean>(false);
  const [avatar, setAvatar] = React.useState<File | undefined>(undefined);

  const avatarUrl = React.useMemo(() => {
    return avatar
      ? URL.createObjectURL(avatar)
      : 'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg';
  }, [avatar]);

  const navigate = useNavigate();

  const goToProjects = React.useCallback(() => {
    navigate('/projects');
  }, []);

  const goToSignIn = React.useCallback(() => {
    navigate('/sign-in');
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Sign Up</span>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
          <img className={styles.avatar} src={avatarUrl} />
          <FilePicker setFile={setAvatar}>
            <Button className={styles.button} variant="contained">
              Choose Avatar
            </Button>
          </FilePicker>
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
          onClick={goToProjects}
          className={styles.button}
          variant="contained"
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

export default SingUpPage;
