import CommonDevTutorialAngular from '@components/devTutorial/tutorials/angular/CommonDevTutorialAngular';
import CreateTaskPageDevTutorialAngular from '@components/devTutorial/tutorials/angular/CreateTaskPageDevTutorialAngular';
import ProjectsPageDevTutorialAngular from '@components/devTutorial/tutorials/angular/ProjectsPageDevTutorialAngular';
import SignInPageDevTutorialAngular from '@components/devTutorial/tutorials/angular/SignInPageDevTutorialAngular';
import SignUpPageDevTutorialAngular from '@components/devTutorial/tutorials/angular/SignUpPageDevTutorialAngular';
import CommonDevTutorialExpress from '@components/devTutorial/tutorials/express/CommonDevTutorialExpress';
import CreateTaskPageDevTutorialExpress from '@components/devTutorial/tutorials/express/CreateTaskPageDevTutorialExpress';
import ProjectsPageDevTutorialExpress from '@components/devTutorial/tutorials/express/ProjectsPageDevTutorialExpress';
import SignInPageDevTutorialExpress from '@components/devTutorial/tutorials/express/SignInPageDevTutorialExpress';
import SignUpPageDevTutorialExpress from '@components/devTutorial/tutorials/express/SignUpPageDevTutorialExpress';
import CommonDevTutorialReact from '@components/devTutorial/tutorials/react/CommonDevTutorialReact';
import CreateTaskPageDevTutorialReact from '@components/devTutorial/tutorials/react/CreateTaskPageDevTutorialReact';
import ProjectsPageDevTutorialReact from '@components/devTutorial/tutorials/react/ProjectsPageDevTutorialReact';
import SignInPageDevTutorialReact from '@components/devTutorial/tutorials/react/SignInPageDevTutorialReact';
import SignUpPageDevTutorialReact from '@components/devTutorial/tutorials/react/SignUpPageDevTutorialReact';
import CommonDevTutorialReactNative from '@components/devTutorial/tutorials/reactNative/CommonDevTutorialReactNative';
import CreateTaskPageDevTutorialReactNative from '@components/devTutorial/tutorials/reactNative/CreateTaskPageDevTutorialReactNative';
import ProjectsPageDevTutorialReactNative from '@components/devTutorial/tutorials/reactNative/ProjectsPageDevTutorialReactNative';
import SignInPageDevTutorialReactNative from '@components/devTutorial/tutorials/reactNative/SignInPageDevTutorialReactNative';
import SignUpPageDevTutorialReactNative from '@components/devTutorial/tutorials/reactNative/SignUpPageDevTutorialReactNative';
import CreateTaskPageDevTutorialTesting from '@components/devTutorial/tutorials/testing/CreateTaskPageDevTutorialTesting';
import ProjectsPageDevTutorialTesting from '@components/devTutorial/tutorials/testing/ProjectsPageDevTutorialTesting';
import SignInPageDevTutorialTesting from '@components/devTutorial/tutorials/testing/SignInPageDevTutorialTesting';
import SignUpPageDevTutorialTesting from '@components/devTutorial/tutorials/testing/SignUpPageDevTutorialTesting';

export enum ETechnologies {
  REACT = 'React',
  REACT_NATIVE = 'React Native',
  ANGULAR = 'Angular',
  EXPRESS = 'Express',
  TESTING = 'Testing',
}

export const commonDevTutorialsSet = {
  [ETechnologies.REACT]: <CommonDevTutorialReact />,
  [ETechnologies.REACT_NATIVE]: <CommonDevTutorialReactNative />,
  [ETechnologies.ANGULAR]: <CommonDevTutorialAngular />,
  [ETechnologies.EXPRESS]: <CommonDevTutorialExpress />,
  [ETechnologies.TESTING]: <CommonDevTutorialExpress />,
};

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

export const projectsDevTutorialsSet = {
  [ETechnologies.REACT]: <ProjectsPageDevTutorialReact />,
  [ETechnologies.REACT_NATIVE]: <ProjectsPageDevTutorialReactNative />,
  [ETechnologies.ANGULAR]: <ProjectsPageDevTutorialAngular />,
  [ETechnologies.EXPRESS]: <ProjectsPageDevTutorialExpress />,
  [ETechnologies.TESTING]: <ProjectsPageDevTutorialTesting />,
};

export const createTaskDevTutorialsSet = {
  [ETechnologies.REACT]: <CreateTaskPageDevTutorialReact />,
  [ETechnologies.REACT_NATIVE]: <CreateTaskPageDevTutorialReactNative />,
  [ETechnologies.ANGULAR]: <CreateTaskPageDevTutorialAngular />,
  [ETechnologies.EXPRESS]: <CreateTaskPageDevTutorialExpress />,
  [ETechnologies.TESTING]: <CreateTaskPageDevTutorialTesting />,
};

export const getTutorialSet = (title: string) => {
  let tutorialSet;
  if (title === 'Common') {
    tutorialSet = commonDevTutorialsSet;
  } else if (title === 'Sign In') {
    tutorialSet = signInDevTutorialsSet;
  } else if (title === 'Sign Up') {
    tutorialSet = signUpDevTutorialsSet;
  } else if (title === 'Projects') {
    tutorialSet = projectsDevTutorialsSet;
  } else {
    tutorialSet = createTaskDevTutorialsSet;
  }
  return tutorialSet;
};
