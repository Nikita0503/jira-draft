import React from 'react';
import styles from './SingUpPage.module.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const SingUpPage = () => {

    const navigate = useNavigate();  

    const goToProjects = React.useCallback(() => {
        navigate('/projects')
    }, []);

    return (
      <div className={styles.container}>
        <span className='title'>Sign Up</span>
        <div className={styles.content}>
            <TextField className={styles.textField} label="Email" variant="filled" />
            <TextField className={styles.textField} label="Name" variant="filled" />
            <TextField className={styles.textField} label="Password" variant="filled" />
            <TextField className={styles.textField} label="Repeat Password" variant="filled" />
            <div className={styles.checkboxContainer}>
                <Checkbox />
                <span>Sign up as Admin</span>
            </div>
            <Button onClick={goToProjects} className={styles.button} variant="contained">Sign Up</Button>
        </div>
      </div>)
  }

export default SingUpPage