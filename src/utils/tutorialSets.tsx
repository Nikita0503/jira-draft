import SignInPageDevTutorialAngular from '@components/devTutorial/tutorials/angular/SignInPageDevTutorialAngular';
import SignUpPageDevTutorialAngular from '@components/devTutorial/tutorials/angular/SignUpPageDevTutorialAngular';
import SignInPageDevTutorialExpress from '@components/devTutorial/tutorials/express/SignInPageDevTutorialExpress';
import SignUpPageDevTutorialExpress from '@components/devTutorial/tutorials/express/SignUpPageDevTutorialExpress';
import SignInPageDevTutorialReact from '@components/devTutorial/tutorials/react/SignInPageDevTutorialReact';
import SignUpPageDevTutorialReact from '@components/devTutorial/tutorials/react/SignUpPageDevTutorialReact';
import SignInPageDevTutorialReactNative from '@components/devTutorial/tutorials/reactNative/SignInPageDevTutorialReactNative';
import SignUpPageDevTutorialReactNative from '@components/devTutorial/tutorials/reactNative/SignUpPageDevTutorialReactNative';
import SignInPageDevTutorialTesting from '@components/devTutorial/tutorials/testing/SignInPageDevTutorialTesting';
import SignUpPageDevTutorialTesting from '@components/devTutorial/tutorials/testing/SignUpPageDevTutorialTesting';

export enum ETechnologies {
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  ANGULAR = 'Angular',
  EXPRESS = 'Express',
  TESTING = 'Testing',
}

export const signInDevTutorialsSet = {
  [ETechnologies.REACT]: <SignInPageDevTutorialReact />,
  [ETechnologies.REACT_NATIVE]: <SignInPageDevTutorialReactNative />,
  [ETechnologies.ANGULAR]: <SignInPageDevTutorialAngular />,
  [ETechnologies.EXPRESS]: <SignInPageDevTutorialExpress />,
  [ETechnologies.TESTING]: <SignInPageDevTutorialTesting />,
};

export const signUpDevTutorialsSet = {
  [ETechnologies.REACT]: <SignUpPageDevTutorialReact />,
  [ETechnologies.REACT_NATIVE]: <SignUpPageDevTutorialReactNative />,
  [ETechnologies.ANGULAR]: <SignUpPageDevTutorialAngular />,
  [ETechnologies.EXPRESS]: <SignUpPageDevTutorialExpress />,
  [ETechnologies.TESTING]: <SignUpPageDevTutorialTesting />,
};

export const getTutorialSet = (title: string) => {
  let tutorialSet;
  if (title === 'Projects') {
    tutorialSet = signInDevTutorialsSet;
  } else {
    tutorialSet = signUpDevTutorialsSet;
  }
  return tutorialSet;
};
