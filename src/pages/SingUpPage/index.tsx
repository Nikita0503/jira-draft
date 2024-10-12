import './styles.css'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const SingUpPage = () => {
    return (
      <div className='container'>
        <span className='title'>Sign Up</span>
        <div className='content'>
            <TextField className='text-field' label="Email" variant="filled" />
            <TextField className='text-field' label="Name" variant="filled" />
            <TextField className='text-field' label="Password" variant="filled" />
            <TextField className='text-field' label="Repeat Password" variant="filled" />
            <div className='checkbox-container'>
                <Checkbox />
                <span>Sign up as Admin</span>
            </div>
            <Button className='button' variant="contained">Sign Up</Button>
        </div>
      </div>)
  }

export default SingUpPage