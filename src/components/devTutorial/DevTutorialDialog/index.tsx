import Dialog from '@mui/material/Dialog';
import React from 'react';
import DevTutorialTabs from '../DevTutorialTabs';
import SignInPageDevTutorialAngular from '../tutorials/angular/SignInPageDevTutorialAngular';
import SignUpPageDevTutorialAngular from '../tutorials/angular/SignUpPageDevTutorialAngular';
import SignInPageDevTutorialExpress from '../tutorials/express/SignInPageDevTutorialExpress';
import SignUpPageDevTutorialExpress from '../tutorials/express/SignUpPageDevTutorialExpress';
import SignInPageDevTutorialReact from '../tutorials/react/SignInPageDevTutorialReact';
import SignUpPageDevTutorialReact from '../tutorials/react/SignUpPageDevTutorialReact';
import SignInPageDevTutorialReactNative from '../tutorials/reactNative/SignInPageDevTutorialReactNative';
import SignUpPageDevTutorialReactNative from '../tutorials/reactNative/SignUpPageDevTutorialReactNative';
import SignInPageDevTutorialTesting from '../tutorials/testing/SignInPageDevTutorialTesting';
import SignUpPageDevTutorialTesting from '../tutorials/testing/SignUpPageDevTutorialTesting';
import styles from './DevTutorialDialog.module.css';

export interface IProps {
  title: string;
  closeModal: () => void;
}

const DevTutorialDialog = ({ title, closeModal }: IProps) => {
  const tutorials = React.useMemo(() => {
    let batch;
    if (title === 'Projects') {
      batch = [
        <SignInPageDevTutorialReact key={0} />,
        <SignInPageDevTutorialReactNative key={1} />,
        <SignInPageDevTutorialAngular key={2} />,
        <SignInPageDevTutorialExpress key={3} />,
        <SignInPageDevTutorialTesting key={4} />,
      ];
    } else {
      batch = [
        <SignUpPageDevTutorialReact key={0} />,
        <SignUpPageDevTutorialReactNative key={1} />,
        <SignUpPageDevTutorialAngular key={2} />,
        <SignUpPageDevTutorialExpress key={3} />,
        <SignUpPageDevTutorialTesting key={4} />,
      ];
    }

    return batch;
  }, [title]);

  return (
    <Dialog onClose={closeModal} open={true} maxWidth="xl" fullWidth>
      <div className={styles.container}>
        <DevTutorialTabs tutorials={tutorials} />
      </div>
    </Dialog>
  );
};

export default DevTutorialDialog;
