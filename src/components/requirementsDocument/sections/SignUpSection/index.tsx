import SectionImages from '../items/SectionImages';
import SectionSubtitle from '../items/SectionSubtitle';
import SectionText from '../items/SectionText';
import SectionTitle from '../items/SectionTitle';
import styles from './SignUpSection.module.css';

import SignUpImage from '@images/sign-up/sign-up-page-1.png';

const SignUpSection = () => {
  return (
    <div className={styles.container}>
      <SectionTitle>Sign Up</SectionTitle>
      <SectionSubtitle>
        <b>url</b>:
      </SectionSubtitle>
      <SectionText>
        <i>/sign-up</i>
      </SectionText>
      <SectionSubtitle>Approximate design</SectionSubtitle>
      <SectionImages images={[SignUpImage]} />
      <SectionSubtitle>Sign Up Logic</SectionSubtitle>
      <SectionText>
        The Sign Up page contains the following input fields: <b>Email</b>,{' '}
        <b>Name</b>, <b>Password</b>, <b>Repeat Password</b>, and an optional{' '}
        <b>Avatar</b>.
        <br />- By clicking <b>CHOOSE AVATAR</b>, the user can select an image
        file.
        <br />- By clicking <b>DELETE AVATAR</b>, the selected file is removed.
        <br />
        If the <b>Password</b> and <b>Repeat Password</b> fields do not match, a
        system (browser) <b>alert</b> is shown with the message{' '}
        <i>
          {'"'}Passwords do not match{'"'}
        </i>
        , and the registration request is not sent to the server.
        <br />
        When the <b>SIGN UP</b> button is clicked:
        <br />
        - A registration request is sent to the server.
        <br />
        - If successful, the user is redirected to the projects list page.
        <br />- If the data is invalid, a system (browser) <b>alert</b> is shown
        with the error message returned by the server.
        <br />
        The <b>GO TO SIGN IN</b> button redirects the user to the Sign In page.
        <br />
        The <b>SIGN UP</b> button is disabled if any of the fields (<b>Email</b>
        , <b>Name</b>, <b>Password</b>, <b>Repeat Password</b>) are empty or
        contain only spaces, or if <b>Password</b> does not match{' '}
        <b>Repeat Password</b>.
      </SectionText>
    </div>
  );
};

export default SignUpSection;
