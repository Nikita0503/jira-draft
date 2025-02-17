import CommonTutorialIcon from '@components/devTutorial/CommonTutorialIcon';
import DevTutorialIcon from '@components/devTutorial/DevTutorialIcon';
import RequirementsDocumentIcon from '@components/requirementsDocument/RequirementsDocumentIcon';
import styles from './SupportButtons.module.css';

interface IProps {
  title: string;
}

const SupportButtons = ({ title }: IProps) => {
  return (
    <div className={styles.container}>
      <CommonTutorialIcon />
      <DevTutorialIcon title={title} />
      <RequirementsDocumentIcon />
    </div>
  );
};

export default SupportButtons;
