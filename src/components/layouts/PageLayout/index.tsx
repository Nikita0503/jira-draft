import Header from '@components/Header';
import useCurrentUser from '@hooks/useCurrentUser';
import React from 'react';
import styles from './PageLayout.module.css';

interface IProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout = ({ title, children }: IProps) => {
  const { currentUser, fetchCurrentUser } = useCurrentUser();

  React.useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div className={styles.container}>
      <Header title={title} currentUser={currentUser} />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
