import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import { IUser } from '../../../interfaces';
import TaskUser from '../../TaskUser';
import styles from './TaskUserPickerModal.module.css';

export interface IProps {
  user: IUser | undefined;
  selectUser: (selectedUser: IUser) => void;
  closeModal: () => void;
}

const USERS: IUser[] = [
  {
    id: 1,
    email: 'user@email.com',
    role: 'ADMIN',
    name: 'User Name 1',
  },
  {
    id: 2,
    email: 'example@email.com',
    role: 'ADMIN',
    name: 'User Name 2',
  },
  {
    id: 1,
    email: 'something@email.com',
    role: 'USER',
    name: 'User Name 3',
  },
];

const TaskUserPickerModal = ({ user, selectUser, closeModal }: IProps) => {
  return (
    <Dialog onClose={closeModal} open={true}>
      <div className={styles.container}>
        <span className={styles.title}>Select User</span>
        <div className={styles.content}>
          <div>
            {USERS.map((userItem: IUser) => (
              <div
                key={userItem.id}
                className={styles.userContainer}
                onClick={() => selectUser(userItem)}
              >
                <TaskUser user={userItem} />
              </div>
            ))}
          </div>
          <Button
            onClick={closeModal}
            className={styles.button}
            variant="contained"
          >
            Close
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default TaskUserPickerModal;
