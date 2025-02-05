import SectionImages from '../items/SectionImages';
import SectionSubtitle from '../items/SectionSubtitle';
import SectionText from '../items/SectionText';
import SectionTitle from '../items/SectionTitle';
import styles from './ProjectsSection.module.css';

import ProjectsImage_1 from '@images/projects/projects-page-1.png';
import ProjectsImage_2 from '@images/projects/projects-page-2.png';
import ProjectsImage_3 from '@images/projects/projects-page-3.png';
import ProjectsImage_4 from '@images/projects/projects-page-4.png';

const ProjectsSection = () => {
  return (
    <div className={styles.container}>
      <SectionTitle>Projects</SectionTitle>
      <SectionSubtitle>
        <b>url</b>:
      </SectionSubtitle>
      <SectionText>
        <i>/projects</i>
      </SectionText>
      <SectionSubtitle>Approximate design</SectionSubtitle>
      <SectionImages
        images={[
          ProjectsImage_1,
          ProjectsImage_2,
          ProjectsImage_3,
          ProjectsImage_4,
        ]}
      />
      <SectionSubtitle>Projects List Logic</SectionSubtitle>
      <SectionText>
        When the page is displayed, a request is made to fetch the list of
        projects available for the current account.
        <br />
        Each project in the list contains:
        <br />- <b>Project name</b> (e.g., {'"'}Pet Project{'"'}).
        <br />- <b>Description</b> (e.g., {'"'}My First Project{'"'}).
        <br />
        - The number of tasks in the project.
        <br />
        - The number of participants in the project.
        <br />
        Clicking on a project item redirects to the details page of the selected
        project.
        <br />
        Clicking the <b>edit icon</b> (pencil) redirects to the edit page of the
        selected project.
        <br />
        Clicking the <b>delete icon</b> (trash) shows a system{' '}
        <b>confirm-alert</b> with the message{' '}
        <i>
          {'"'}Are you sure you want to delete?{'"'}
        </i>
        . If confirmed, a request is sent to delete the selected project, and
        the project list is updated (the deleted project is removed).
        <br />
        Clicking <b>CREATE PROJECT</b> redirects to the project creation page.
        <br />
        In case of an unexpected error, an image and the text{' '}
        <i>
          {'"'}Something went wrong{'"'}
        </i>{' '}
        are displayed (as shown in the Error case screenshot).
        <br />
        <b>Role-based restrictions:</b>
        <br />- For <b>ADMIN</b>, there are no restrictions.
        <br />- For <b>USER</b>, the <b>CREATE PROJECT</b> button is disabled,
        and the edit and delete icons are not displayed.
      </SectionText>
    </div>
  );
};

export default ProjectsSection;
