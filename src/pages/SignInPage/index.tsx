import styles from './SignInPage.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignInPage = () => {
    return (
      <div className={styles.container}>
        <span className={styles.title}>Sign In</span>
        <div className={styles.content}>
            <TextField className={styles.textField} label="Email" variant="filled" />
            <TextField className={styles.textField} label="Password" variant="filled" />
            <Button className={styles.button} variant="contained">Sign In</Button>
        </div>
      </div>)
  }

export default SignInPage;