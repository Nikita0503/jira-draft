import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
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
  tutorials: JSX.Element[];
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
            label="React"
            id="dev-tutorial-tab-2"
            aria-controls="dev-tutorial-tabpanel-2"
          />
          <Tab
            label="React Native"
            id="dev-tutorial-tab-2"
            aria-controls="dev-tutorial-tabpanel-2"
          />
          <Tab
            label="Angular"
            id="dev-tutorial-tab-3"
            aria-controls="dev-tutorial-tabpanel-3"
          />
          <Tab
            label="Express"
            id="dev-tutorial-tab-4"
            aria-controls="dev-tutorial-tabpanel-4"
          />
          <Tab
            label="Testing"
            id="dev-tutorial-tab-5"
            aria-controls="dev-tutorial-tabpanel-5"
          />
        </Tabs>
      </div>
      <TabContent value={value} index={0}>
        {tutorials[0]}
      </TabContent>
      <TabContent value={value} index={1}>
        {tutorials[1]}
      </TabContent>
      <TabContent value={value} index={2}>
        {tutorials[2]}
      </TabContent>
      <TabContent value={value} index={3}>
        {tutorials[3]}
      </TabContent>
      <TabContent value={value} index={4}>
        {tutorials[4]}
      </TabContent>
    </div>
  );
}
