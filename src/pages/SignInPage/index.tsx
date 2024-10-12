import './styles.css'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const SignInPage = () => {
    return (
      <div className='container'>
        <span className='title'>Sign In</span>
        <div className='content'>
            <TextField className='text-field' label="Email" variant="filled" />
            <TextField className='text-field' label="Password" variant="filled" />
            <Button className='button' variant="contained">Sign In</Button>
        </div>
      </div>)
  }

export default SignInPage;