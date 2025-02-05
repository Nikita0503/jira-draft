import SectionSubtitle from '../items/SectionSubtitle';
import SectionText from '../items/SectionText';
import SectionTitle from '../items/SectionTitle';
import styles from './GeneralDescriptionSection.module.css';

const GeneralDescriptionSection = () => {
  return (
    <div className={styles.container}>
      <SectionTitle>General Description</SectionTitle>
      <SectionText>The system is a task management tool.</SectionText>
      <SectionSubtitle>Users</SectionSubtitle>
      <SectionText>
        Each user has the following attributes: <b>name</b>, <b>email</b>,{' '}
        <b>role</b>, and an optional <b>profile picture</b> (allowed formats:
        jpg, jpeg, png, gif, webp).
        <br />
        The profile picture is optional.
        <br />
        Available user roles: <b>Administrator (ADMIN)</b> and{' '}
        <b>User (USER)</b>.
      </SectionText>
      <SectionSubtitle>Projects</SectionSubtitle>
      <SectionText>
        Each project contains a <b>name</b> and an optional <b>description</b>.
        <br />
        The description field is optional.
        <br />
        Only <b>Administrators (ADMIN)</b> can create, delete, or edit projects.
        <br />
        <b>Administrators (ADMIN)</b> can also add or remove users from
        projects.
        <br />
        <b>Users (USER)</b> can only access projects to which they have been
        added.
      </SectionText>
      <SectionText>
        For each project, <b>tasks</b> can be created.
      </SectionText>
      <SectionSubtitle>Tasks</SectionSubtitle>
      <SectionText>
        Each task contains the following attributes: <b>title</b>,{' '}
        <b>description</b>, <b>status</b>, <b>task type</b>,{' '}
        <b>time allotted for execution</b> (in minutes), <b>assignee</b> (the
        user responsible for the task), and <b>attached files</b> (images only,
        allowed formats: jpg, jpeg, png, gif, webp).
        <br />
        Attached files are optional.
        <br />
        Only <b>ADMIN</b> can create or delete tasks.
        <br />
        Any user can edit tasks.
        <br />
        Each task must be associated with a project. A task cannot exist without
        a project.
        <br />
        When creating a task, it must be assigned to a user. A task cannot exist
        without an assignee.
        <br />
        <b>ADMIN</b> has access to all tasks across all projects.
        <br />
        <b>USER</b> can only access tasks from projects to which they have been
        added.
      </SectionText>
      <SectionSubtitle>Task Statuses</SectionSubtitle>
      <SectionText>
        Task statuses contain only a <b>name</b>.
        <br />
        There can only be three statuses: <b>DONE</b>, <b>IN PROGRESS</b>, and{' '}
        <b>TESTING</b>.
        <br />
        Only <b>ADMIN</b> can create, delete, or edit task statuses.
        <br />
        All users have access to task statuses.
      </SectionText>
      <SectionSubtitle>Task Types</SectionSubtitle>
      <SectionText>
        Task types contain only a <b>name</b>.
        <br />
        There can only be two types: <b>TASK</b> and <b>BUG</b>.
        <br />
        Only <b>ADMIN</b> can create, delete, or edit task types.
        <br />
        All users have access to task types.
      </SectionText>
      <SectionText>
        <b>
          <i>Task statuses must be pre-configured in the database.</i>
        </b>
        <br />
        It is recommended not to modify the configuration of task statuses. In
        case of extreme necessity, only the <b>server</b> can provide access to
        these capabilities.{' '}
        <b>The mobile app and website should not handle this</b>.
        <br />
        <br />
        Users can leave <b>comments</b> on tasks.
      </SectionText>

      <SectionSubtitle>Comments</SectionSubtitle>
      <SectionText>
        Each comment contains a <b>message</b>, an <b>author</b> (the user who
        created the comment), and optional <b>attached files</b>.
        <br />
        Attached files are optional.
        <br />
        Any user can create a comment.
        <br />
        Only <b>ADMIN</b> can delete any comment. <b>USER</b> can delete only
        their own comments.
        <br />
        Both <b>ADMIN</b> and <b>USER</b> can edit only their own comments. Even{' '}
        <b>ADMIN</b> cannot edit comments created by other users.
        <br />
        Each comment must be associated with a task. A comment cannot exist
        without a task.
        <br />
        <b>ADMIN</b> has access to all comments across all tasks in all
        projects.
        <br />
        <b>USER</b> can only access comments from tasks in projects to which
        they have been added.
      </SectionText>
    </div>
  );
};

export default GeneralDescriptionSection;
