import useProjects from '@hooks/useProjects';
import { IProject } from '@interfaces';
import { Button, TextField } from '@mui/material';
import { projectInfoSelector } from '@selectors/projectSelectors';
import { TRootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProjectEditorPage.module.css';

interface IProps {
  projectId: number;
  title: string;
  description: string;
}

const ProjectEditorPage = ({ projectId, title, description }: IProps) => {
  const [newTitle, setNewTitle] = React.useState<string>(title);
  const [newDescription, setNewDescription] =
    React.useState<string>(description);

  const { loading, updateProject } = useProjects();

  const navigate = useNavigate();

  const updateCurrentProject = React.useCallback(() => {
    updateProject(projectId, newTitle, newDescription, goToProjects);
  }, [projectId, newTitle, newDescription]);

  const goToProjects = React.useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Update Project</span>
      <div className={styles.content}>
        <TextField
          className={styles.textField}
          label="Title"
          variant="filled"
          value={newTitle}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <TextField
          className={styles.textField}
          label="Desription"
          variant="filled"
          value={newDescription}
          onChange={(event) => setNewDescription(event.target.value)}
        />
        <Button
          onClick={updateCurrentProject}
          className={styles.button}
          variant="contained"
          disabled={loading}
        >
          Update Project
        </Button>
      </div>
    </div>
  );
};

const ProjectEditorHOC = () => {
  const { projectId } = useParams();

  const projectInfo = useSelector<TRootState, IProject | undefined>(
    (state: TRootState) => projectInfoSelector(parseInt(projectId!))(state)
  );

  const navigate = useNavigate();

  React.useEffect(() => {
    if (!projectInfo) {
      navigate(-1);
    }
  }, [projectInfo]);

  if (!projectInfo) {
    return <div />;
  }

  return (
    <ProjectEditorPage
      projectId={projectInfo.id}
      title={projectInfo.title}
      description={projectInfo.description}
    />
  );
};

export default ProjectEditorHOC;
