import SectionImages from '../items/SectionImages';
import SectionSubtitle from '../items/SectionSubtitle';
import SectionText from '../items/SectionText';
import SectionTitle from '../items/SectionTitle';
import styles from './CreateTaskSection.module.css';

import CreateTaskImage_1 from '@images/create-task/create-task-page-1.png';
import CreateTaskImage_2 from '@images/create-task/create-task-page-2.png';
import CreateTaskImage_3 from '@images/create-task/create-task-page-3.png';
import CreateTaskImage_4 from '@images/create-task/create-task-page-4.png';
import CreateTaskImage_5 from '@images/create-task/create-task-page-5.png';
import CreateTaskImage_6 from '@images/create-task/create-task-page-6.png';
import CreateTaskImage_7 from '@images/create-task/create-task-page-7.png';
import CreateTaskImage_8 from '@images/create-task/create-task-page-8.png';

const CreateTaskSection = () => {
  return (
    <div className={styles.container}>
      <SectionTitle>Create Task</SectionTitle>
      <SectionSubtitle>
        <b>url</b>:
      </SectionSubtitle>
      <SectionText>
        <i>/projects/:projectId/tasks/create</i>
      </SectionText>
      <SectionSubtitle>Approximate design</SectionSubtitle>
      <SectionImages
        images={[
          CreateTaskImage_1,
          CreateTaskImage_2,
          CreateTaskImage_3,
          CreateTaskImage_4,
          CreateTaskImage_5,
          CreateTaskImage_6,
          CreateTaskImage_7,
          CreateTaskImage_8,
        ]}
      />
      <SectionSubtitle>Create Task Logic</SectionSubtitle>
      <SectionText>
        When the page is displayed, data for the current project is requested.
        If the project does not exist, an image and the text{' '}
        <i>
          {'"'}Something went wrong. Probably project was not found{'"'}
        </i>{' '}
        are displayed, along with a <b>GO BACK</b> button. Clicking the{' '}
        <b>GO BACK</b> button returns the user to the previous page (similar to
        the {'"'}Error case{'"'} screenshot).
        <br />
        The <b>CREATE NEW TASK</b> button is disabled if any of the following
        fields are empty or contain only spaces:
        <br />- <b>Title</b>
        <br />- <b>Description</b>
        <br />- <b>Time allotted</b> (initially set to 0, meaning time is
        undefined).
        <br />- <b>Type</b> (not selected).
        <br />- <b>Status</b> (not selected).
        <br />- <b>User</b> (not selected).
        <br />
        Clicking the <b>SELECT</b> button under <b>Type</b>, <b>Status</b>, or{' '}
        <b>User</b> opens a modal window with a list of task types, task
        statuses, or users in the current project, respectively. Selecting an
        item from the list updates the corresponding field on the page, and the
        modal closes. Clicking <b>CLOSE</b> closes the modal without making a
        selection.
        <br />
        Clicking <b>ADD FILE</b> opens a system file selection dialog (only jpg,
        jpeg, png, gif, webp are allowed). After selecting a file, it is
        displayed in the list of selected files. Each file in the list has a
        delete icon (red trash bin). Clicking the delete icon removes the file
        from the list.
        <br />
        Clicking <b>CREATE NEW TASK</b> sends the data to the server. If the
        data is invalid, a system <b>alert</b> is shown with the error message
        returned by the server. If the data is valid and the server responds
        positively, the user is redirected to the project details page. The task
        list should be updated to reflect the newly created task.
      </SectionText>
    </div>
  );
};

export default CreateTaskSection;
