import DevTutorialCodeBlock from '@components/devTutorial/DevTutorialCodeBlock';
import DevTutorialSubtitle from '../../items/DevTutorialSubtitle';
import DevTutorialText from '../../items/DevTutorialText';
import DevTutorialTitle from '../../items/DevTutorialTitle';
import styles from './SignInPageDevTutorialReact.module.css';

const SignInPageDevTutorialReact = () => {
  return (
    <div className={styles.container}>
      <DevTutorialTitle>Sign In</DevTutorialTitle>
      <DevTutorialSubtitle>Create component:</DevTutorialSubtitle>
      <DevTutorialCodeBlock
        code={`import styles from './DevTutorialText.module.css';

interface IProps {
  children: React.ReactNode;
}

const DevTutorialText = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{children}</span>
    </div>
  );
};

export default DevTutorialText;`}
      />
      <DevTutorialText>Tutorial</DevTutorialText>
    </div>
  );
};

export default SignInPageDevTutorialReact;
