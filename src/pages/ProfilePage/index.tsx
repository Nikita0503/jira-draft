import UniversalError from '@components/errors/UniversalError';
import FilePicker from '@components/pickers/FilePicker';
import ProfileAvatar from '@components/ProfileAvatar';
import UniversalStub from '@components/stubs/UniversalStub';
import useCurrentUser from '@hooks/useCurrentUser';
import { Button, CircularProgress, TextField } from '@mui/material';
import React from 'react';
import styles from './ProfilePage.module.css';

interface IProps {
  currentEmail: string;
  currentName: string;
  currentAvatar: string | undefined;
}

const ProfilePage = ({ currentEmail, currentName, currentAvatar }: IProps) => {
  const [email, setEmail] = React.useState<string>(currentEmail);
  const [name, setName] = React.useState<string>(currentName);

  const [avatar, setAvatar] = React.useState<File | string | undefined>(
    currentAvatar
  );

  const { loading, updateCurrentUser, logout } = useCurrentUser();

  React.useEffect(() => {
    setName(currentName);
    setAvatar(currentAvatar);
  }, [currentName, currentAvatar]);

  const deleteAvatar = React.useCallback(() => {
    setAvatar(undefined);
  }, []);

  const updateCurrentUserProfile = React.useCallback(() => {
    updateCurrentUser(name, avatar);
  }, [name, avatar]);

  const logoutUser = React.useCallback(() => {
    const isConfirmed = window.confirm('Are you sure?');
    if (isConfirmed) {
      logout();
    }
  }, []);

  const isValid = React.useMemo<boolean>(() => {
    return !!name.trim();
  }, [name]);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Your Profile</span>
      <div className={styles.content}>
        <div className={styles.avatarContainer}>
          <ProfileAvatar avatar={avatar} deleteAvatar={deleteAvatar} />
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
          disabled={true}
        />
        <TextField
          className={styles.textField}
          label="Name"
          variant="filled"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Button
          onClick={updateCurrentUserProfile}
          className={styles.button}
          variant="contained"
          disabled={loading || !isValid}
        >
          Update Profile
        </Button>
        <Button className={styles.button} onClick={logoutUser} color="error">
          Logout
        </Button>
      </div>
    </div>
  );
};

const ProfileHOC = () => {
  const { currentUser, error, loading, fetchCurrentUser } = useCurrentUser();

  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <UniversalError text="Something went wrong" />
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className={styles.stubContainer}>
        <UniversalStub text="No User Data" />
      </div>
    );
  }

  return (
    <ProfilePage
      currentAvatar={currentUser.avatar}
      currentEmail={currentUser.email}
      currentName={currentUser.name}
    />
  );
};

export default ProfileHOC;
