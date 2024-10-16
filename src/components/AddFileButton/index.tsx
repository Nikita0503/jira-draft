import styles from './AddFileButton.module.css';
import { Button } from '@mui/material';

interface IProps {
    addFile: () => void
}

const AddFileButton = ({addFile}: IProps) => {
    return <Button onClick={addFile} className={styles.addFileButton} variant="contained">Add File</Button>
  }

export default AddFileButton;