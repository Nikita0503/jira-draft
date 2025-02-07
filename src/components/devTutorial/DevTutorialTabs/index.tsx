import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { ETechnologies } from '@utils/tutorialSets';
import * as React from 'react';
import styles from './DevTutorialTabs.module.css';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabContent = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`dev-tutorial-tabpanel-${index}`}
      aria-labelledby={`dev-tutorial-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
};

interface IProps {
  //tutorials: JSX.Element[];
  tutorials: any;
}

export default function DevTutorialTabs({ tutorials }: IProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Tabs value={value} onChange={handleChange} aria-label="users-tabs">
          <Tab
            label={ETechnologies.REACT}
            id="dev-tutorial-tab-2"
            aria-controls="dev-tutorial-tabpanel-2"
          />
          <Tab
            label={ETechnologies.REACT_NATIVE}
            id="dev-tutorial-tab-2"
            aria-controls="dev-tutorial-tabpanel-2"
          />
          <Tab
            label={ETechnologies.ANGULAR}
            id="dev-tutorial-tab-3"
            aria-controls="dev-tutorial-tabpanel-3"
          />
          <Tab
            label={ETechnologies.EXPRESS}
            id="dev-tutorial-tab-4"
            aria-controls="dev-tutorial-tabpanel-4"
          />
          <Tab
            label={ETechnologies.TESTING}
            id="dev-tutorial-tab-5"
            aria-controls="dev-tutorial-tabpanel-5"
          />
        </Tabs>
      </div>
      <TabContent value={value} index={0}>
        {tutorials[ETechnologies.REACT]}
      </TabContent>
      <TabContent value={value} index={1}>
        {tutorials[ETechnologies.REACT_NATIVE]}
      </TabContent>
      <TabContent value={value} index={2}>
        {tutorials[ETechnologies.ANGULAR]}
      </TabContent>
      <TabContent value={value} index={3}>
        {tutorials[ETechnologies.EXPRESS]}
      </TabContent>
      <TabContent value={value} index={4}>
        {tutorials[ETechnologies.TESTING]}
      </TabContent>
    </div>
  );
}
