import UniversalError from '@components/errors/UniversalError';
import ProjectListItem from '@components/listItems/ProjectListItem';
import UniversalStub from '@components/stubs/UniversalStub';
import { IProject } from '@interfaces';
import { CircularProgress } from '@mui/material';
import styles from './ProjectList.module.css';

interface IProps {
  projects: IProject[];
  error: any;
  loading: boolean;
}

const ProjectList = ({ projects, error, loading }: IProps) => {
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <UniversalError text="Something went wrong" />;
  }

  if (projects.length === 0) {
    return <UniversalStub text="No Projects" />;
  }

  return (
    <>
      {projects.map((project: IProject) => {
        return (
          <div key={project.id} className={styles.projectContainer}>
            <ProjectListItem project={project} />
          </div>
        );
      })}
    </>
  );
};

export default ProjectList;
