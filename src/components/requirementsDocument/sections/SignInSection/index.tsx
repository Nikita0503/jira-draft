import SectionImages from '../items/SectionImages';
import SectionSubtitle from '../items/SectionSubtitle';
import SectionText from '../items/SectionText';
import SectionTitle from '../items/SectionTitle';
import styles from './SignInSection.module.css';

import SignInImage from '@images/sign-in/sign-in-page-1.png';

const SignInSection = () => {
  return (
    <div className={styles.container}>
      <SectionTitle>Sign In</SectionTitle>
      <SectionSubtitle>
        <b>url</b>:
      </SectionSubtitle>
      <SectionText>
        <i>/sign-in</i>
      </SectionText>
      <SectionSubtitle>Approximate design</SectionSubtitle>
      <SectionImages images={[SignInImage]} />
      <SectionSubtitle>Sign In Logic</SectionSubtitle>
      <SectionText>
        The Sign In page contains two input fields: <b>Email</b> and{' '}
        <b>Password</b>.
        <br />
        The <b>SIGN IN</b> button is disabled if either field is empty or
        contains only spaces.
        <br />
        When the <b>SIGN IN</b> button is clicked:
        <br />
        - A request is sent to the server for authentication.
        <br />
        - If successful, the user is redirected to the projects list page.
        <br />- If the credentials are incorrect, a system (browser){' '}
        <b>alert</b> is shown with the error message returned by the server.
        <br />
        The <b>GO TO SIGN UP</b> button redirects the user to the registration
        page.
      </SectionText>
    </div>
  );
};

export default SignInSection;
