import DevTutorialCodeBlock from '@components/devTutorial/DevTutorialCodeBlock';
import DevTutorialSubtitle from '../../items/DevTutorialSubtitle';
import DevTutorialText from '../../items/DevTutorialText';
import DevTutorialTitle from '../../items/DevTutorialTitle';
import styles from './CommonDevTutorialAngular.module.css';

const CommonDevTutorialAngular = () => {
  return (
    <div className={styles.container}>
      <DevTutorialTitle>
        Angular Application Functionality Implementation Recommendations
      </DevTutorialTitle>
      <DevTutorialText>
        In this section, you will find recommendations on how to implement
        functionality in a React application.{' '}
        <u>
          Remember, there can be several solutions to one task. It is not
          necessary that only one is correct. All of them can be correct 😀
        </u>
      </DevTutorialText>

      <DevTutorialSubtitle>Implementation Flow:</DevTutorialSubtitle>

      <DevTutorialText>
        <b>1.</b> Study the backend responses.
      </DevTutorialText>

      <DevTutorialText>
        <b>2.</b> Based on the responses, create interfaces for the received
        data inside the <b>interfaces</b> folder (for the data itself, not the
        entire responses).
      </DevTutorialText>

      <DevTutorialText>
        <b>3.</b> Analyze whether the response data needs to be stored in
        services. If the data is required on multiple pages, it should be
        stored. If it is only needed within a single page, storing it is
        unnecessary.
      </DevTutorialText>

      <DevTutorialText>
        <b>4.</b> Create a Service to handle the data.
      </DevTutorialText>

      <DevTutorialText>
        <b>5.</b> If the data comes from the backend, define methods in the
        Service class that use <b>HttpClient</b> to interact with the server.
      </DevTutorialText>

      <DevTutorialText>
        <b>6.</b> If the data needs to be stored in services, create a field in
        the Service class to hold the data. If not, return the result directly
        from the Service methods to the component.
      </DevTutorialText>

      <DevTutorialText>
        <b>7.</b> In the component, implement the logic for fetching and
        displaying the data.
      </DevTutorialText>

      <DevTutorialText>
        <b>8.</b> Implement the component markup that works with the data.
      </DevTutorialText>

      <DevTutorialTitle>Study the Backend Responses</DevTutorialTitle>
      <DevTutorialText>
        For the correct construction of the frontend architecture and
        comfortable data processing, the first step is to learn how to work with
        endpoints. The most common way of working with data is <b>CRUD</b>{' '}
        operations.
      </DevTutorialText>

      <DevTutorialSubtitle>C - Create:</DevTutorialSubtitle>
      <DevTutorialText>
        <b>Create</b> an entity.
        <br />
        <code>POST</code> method
      </DevTutorialText>

      <DevTutorialSubtitle>R - Read:</DevTutorialSubtitle>
      <DevTutorialText>
        <b>Get</b> an entity/entities.
        <br />
        <code>GET</code> method
      </DevTutorialText>

      <DevTutorialSubtitle>U - Update:</DevTutorialSubtitle>
      <DevTutorialText>
        <b>Update</b> an existing entity.
        <br />
        <code>PUT / PATCH</code> methods
      </DevTutorialText>

      <DevTutorialSubtitle>D - Delete:</DevTutorialSubtitle>
      <DevTutorialText>
        <b>Delete</b> an entity.
        <br />
        <code>DELETE</code> method
      </DevTutorialText>

      <DevTutorialText>
        Usually, <b>Postman</b> and <b>API documentation</b> are used for
        familiarization.
      </DevTutorialText>

      <DevTutorialText>
        It is important to consider <b>&ldquo;protected&rdquo;</b> and
        <b>&ldquo;unprotected&rdquo;</b> endpoints. Those that require an
        <b>Authorization header</b> or do not, respectively.
      </DevTutorialText>

      <DevTutorialText>
        With this understanding, it becomes easier to build the logic for
        working with data, navigation, and sometimes even the component
        hierarchy. In other words, the application architecture.
      </DevTutorialText>

      <DevTutorialTitle>Creating Interfaces</DevTutorialTitle>
      <DevTutorialText>
        Based on the understanding of the data structure coming from the server,
        it is easy to build interfaces that describe entities in the frontend
        application. At this point, it is important to pay attention to the
        <b>design</b> and <b>technical requirements</b>. Often, the backend
        sends more data than needed for a specific frontend application. And
        sometimes, you may need to add something to each entity manually on the
        frontend.
      </DevTutorialText>

      <DevTutorialText>
        By forming a correct representation of entities, i.e. interfaces, you
        will be confident that you won&apos;t miss anything when writing the
        logic.
      </DevTutorialText>

      <DevTutorialTitle>
        Analyzing Whether to Store Data in Services
      </DevTutorialTitle>

      <DevTutorialText>
        If you have a well-defined technical specification and design, answering
        this question is easier. However, that&apos;s not always the case.
      </DevTutorialText>

      <DevTutorialText>
        You can use logic to decide: if the data is needed on more than one
        page, it should be stored in a state manager to avoid redundant server
        requests.
      </DevTutorialText>

      <DevTutorialText>
        Another approach is to ask: &ldquo;How far apart are the components that
        need this data in the hierarchy?&rdquo;
      </DevTutorialText>

      <DevTutorialText>
        If the data includes access tokens or refresh tokens, they should be
        stored in an encrypted format, as they will be used in an{' '}
        <b>HttpInterceptor</b>.
      </DevTutorialText>

      <DevTutorialText>
        If the data is something like a &ldquo;list of projects,&rdquo; it is
        likely worth storing, as it may be used on pages such as &ldquo;All
        Projects&rdquo; and &ldquo;Project Details.&rdquo;
      </DevTutorialText>

      <DevTutorialText>
        However, if the data provided in &ldquo;Project Details&rdquo; is
        already sufficient, meaning you don&apos;t need to make an additional
        request like &ldquo;Give me the full details of the project,&rdquo; then
        storing it separately may not be necessary.
      </DevTutorialText>

      <DevTutorialText>
        If you are on the &ldquo;Project Details&rdquo; page and make a request
        to fetch the full project details, that information is unlikely to be
        needed elsewhere. In this case, storing it in a service makes little
        sense. Instead, it can be stored within the component class.
      </DevTutorialText>

      <DevTutorialText>
        If the server response contains insignificant information, such as
        &ldquo;Deleted successfully,&rdquo; it simply serves as a confirmation
        that the server operation was successful. This data does not need to be
        stored anywhere.
      </DevTutorialText>

      <DevTutorialText>
        For managing global state, consider using <b>NgRx</b> or another state
        management library if the project is complex. For simpler cases,{' '}
        <b>Service</b> classes with fields and methods are sufficient.
      </DevTutorialText>

      <DevTutorialTitle>Create a Service for Data Management</DevTutorialTitle>

      <DevTutorialText>
        Making server requests directly from a component or implementing complex
        data processing logic inside a component is not a good practice. Angular
        provides many tools to help with this.
      </DevTutorialText>

      <DevTutorialText>
        Nearly 100% of frontend applications interact with a server to fetch and
        send data. In Angular, you can create a <b>Service</b> class for this
        purpose.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {}

  async fetchAllProjects(): Promise<IProject[]> {}

  async addProject(newProject: IProject): Promise<IProject> {}

  async deleteProject(id: number): Promise<void> {}
}`}
      />

      <DevTutorialText>
        Any data-fetching logic should be reusable and isolated from the
        component. If the technical specification or design requires a project
        list and operations on it, you should create functions to implement this
        logic. For example, it could involve working with <b>localStorage</b> or
        interacting with a server.
      </DevTutorialText>

      <DevTutorialText>
        Some data may need to be filtered or sorted. In Angular, you should use{' '}
        <b>Pipes</b> for such logic. For example, sorting comments by creation
        date:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Pipe({
  name: 'comments'
})
export class CommentsPipe implements PipeTransform {
  transform(value: Comment[], ...args: unknown[]): Comment[] {
    return value.sort((prevComment, nextComment) => {
      return new Date(nextComment.createdAt).getTime() - new Date(prevComment.createdAt).getTime();
    });
  }
}`}
      />

      <DevTutorialText>
        Or filtering users based on a certain criterion:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Pipe({
  name: 'usersNotInProject'
})
export class UsersNotInProjectPipe implements PipeTransform {
  transform(allUsers: User[], usersInProject: User[]): User[] {
    const usersNotInProject = [];
    for (let i = 0; i < allUsers.length; i++) {
      let inProject = false;
      for (let j = 0; j < usersInProject.length; j++) {
        if (allUsers[i].id === usersInProject[j].id) {
          inProject = true;
        }
      }
      if (!inProject) {
        usersNotInProject.push(allUsers[i]);
      }
    }
    return usersNotInProject;
  }
}`}
      />

      <DevTutorialText>
        This logic can then be easily used in components.
      </DevTutorialText>

      <DevTutorialTitle>HttpClient for Server Interaction</DevTutorialTitle>

      <DevTutorialText>
        One of the ways to interact with a server in Angular is by using{' '}
        <b>HttpClient</b>.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  async fetchAllProjects(): Promise<IProject[]> {
    try {
      const response = await this.httpClient
        .get<{ projects: IProject[] }>(\`\${environment.apiUrl}projects/\`)
        .toPromise();
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      throw error;
    }
  }

  async addProject(newProject: IProject): Promise<IProject> {
    try {
      const response = await this.httpClient
        .post<{ project: IProject }>(\`\${environment.apiUrl}projects/\`, newProject)
        .toPromise();
    } catch (error) {
      console.error('Failed to add project:', error);
      throw error;
    }
  }

  async deleteProject(id: number): Promise<void> {
    try {
      const response = await this.httpClient
        .delete<{ deleted: boolean }>(\`\${environment.apiUrl}projects/\${id}/\`)
        .toPromise();
    } catch (error) {
      console.error('Failed to delete project:', error);
      throw error;
    }
  }
}`}
      />

      <DevTutorialText>
        This is the simplest way to use <b>HttpClient</b> in Angular. However,{' '}
        <b>HttpClient</b> is much more powerful than just handling requests as
        promises.
      </DevTutorialText>

      <DevTutorialText>
        There are multiple ways to implement such logic. For example, you could
        delegate promise handling to the caller (component), or use callbacks (
        <b>onSuccess</b>, <b>onError</b>) that execute based on the request
        outcome.
      </DevTutorialText>

      <DevTutorialText>
        But it&apos;s always important to consider protected endpoints that
        require an
        <b>Authorization</b> header. In such cases, you can use an{' '}
        <b>HttpInterceptor</b> to avoid manually adding the header in every
        request.
      </DevTutorialText>

      <DevTutorialTitle>Saving Data in Services</DevTutorialTitle>

      <DevTutorialText>
        If data is needed in several components that are distant from each other
        in the hierarchy or if the data is required on different pages, to avoid
        duplicating server requests, it can be stored in services.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: IProject[] = [];

  constructor(private httpClient: HttpClient) {}

  async fetchAllProjects(): Promise<void> {
    try {
      const response = await this.httpClient
        .get<{ projects: IProject[] }>(\`\${environment.apiUrl}projects/\`)
        .toPromise();

      if (!response) {
        throw new Error('No response from server');
      }
      this.projects = response.projects;
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      throw error;
    }
  }

  async addProject(newProject: IProject): Promise<void> {
    try {
      const response = await this.httpClient
        .post<{ project: IProject }>(\`\${environment.apiUrl}projects/\`, newProject)
        .toPromise();

      if (!response) {
        throw new Error('No response from server');
      }
      await this.fetchAllProjects();
    } catch (error) {
      console.error('Failed to add project:', error);
      throw error;
    }
  }

  async deleteProject(id: number): Promise<void> {
    try {
      const response = await this.httpClient
        .delete<{ deleted: boolean }>(\`\${environment.apiUrl}projects/\${id}/\`)
        .toPromise();

      if (!response || !response.deleted) {
        throw new Error('Failed to delete project on server');
      }
      await this.fetchAllProjects();
    } catch (error) {
      console.error('Failed to delete project:', error);
      throw error;
    }
  }
}`}
      />

      <DevTutorialText>
        Now, you only need to fetch the data once and store it in the Service
        class&apos;s field. From then on, these data can be accessed on
        different pages without duplicating server requests.
      </DevTutorialText>

      <DevTutorialText>
        You may wonder: &quot;Why refresh the entire project list by syncing
        with the server if we can manually remove the deleted project using{' '}
        <b>filter</b> locally? Isn&apos;t that more logical?&quot; That&apos;s
        correct if you&apos;re sure that no one else has manipulated the project
        list (added/removed/modified projects) between &quot;fetching the list
        of projects&quot; and &quot;deleting a project&quot;. In that case, it
        can be done locally. However, keep in mind that the project list is
        shared among multiple users. Therefore, it&apos;s better to fetch the
        up-to-date list after any manipulation to avoid desynchronization
        between the client and the server.
      </DevTutorialText>

      <DevTutorialText>
        Some development teams insist on reducing the server load and saving
        traffic. However, this approach requires a careful analysis of user
        scenarios. If only one user would view these projects and this was only
        done on one device (when one account can&apos;t be used on multiple
        devices simultaneously), then local deletion without syncing with the
        server might work. Alternatively, you can use the event listening
        approach from the server side, but that can also place a significant
        load on the server with a large number of simultaneous users.
      </DevTutorialText>

      <DevTutorialText>
        Updating the entire project list isn&apos;t the best solution, but
        it&apos;s a reliable one.
      </DevTutorialText>

      <DevTutorialText>
        &quot;If there are 1000 projects, will I receive a response with all
        1000 projects every time?&quot; - no, initially you won&apos;t receive a
        response with all 1000 projects. For large data arrays, the server
        introduces pagination. This allows frontend applications to retrieve
        data in chunks. As the user views the project list, they will load
        progressively. The newly created project will always appear first, at
        the top.
      </DevTutorialText>

      <DevTutorialTitle>Without Saving Data in Services</DevTutorialTitle>

      <DevTutorialText>
        If data is only needed on one page, it can be stored in the component
        itself rather than in the Service class&apos;s field. For example, a
        list of comments for a task.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private httpClient: HttpClient) {}

  async fetchComments(projectId: number, taskId: number): Promise<IComment[]> {
    try {
      const response = await this.httpClient
        .get<{ comments: IComment[] }>(\`\${environment.apiUrl}projects/\${projectId}/tasks/\${taskId}/comments\`)
        .toPromise();

      if (response) {
        return response.comments;
      }
      throw new Error('No response from server');
    } catch (error) {
      console.error('Failed to fetch comments:', error);
      throw error;
    }
  }

  async sendComment(projectId: number, taskId: number, message: string, files: Attachment[]): Promise<IComment> {
    try {
      const formData: FormData = new FormData();
      formData.append('message', message);
      files.forEach(file => {
        formData.append('file', new Blob([file.file], { type: 'image/png' }), file.file.name);
      });

      const response = await this.httpClient
        .post<{ comment: IComment }>(\`\${environment.apiUrl}projects/\${projectId}/tasks/\${taskId}/comments\`, formData)
        .toPromise();

      if (response) {
        return response.comment;
      }
      throw new Error('No response from server');
    } catch (error) {
      console.error('Failed to send comment:', error);
      throw error;
    }
  }

  async deleteComment(projectId: number, taskId: number, commentId: number): Promise<boolean> {
    try {
      const response = await this.httpClient
        .delete<{ deleted: boolean }>(\`\${environment.apiUrl}projects/\${projectId}/tasks/\${taskId}/comments/\${commentId}\`)
        .toPromise();

      if (!response || !response.deleted) {
        throw new Error('Failed to delete comment on server');
      }
      return response.deleted;
    } catch (error) {
      console.error('Failed to delete comment:', error);
      throw error;
    }
  }
}
`}
      />

      <DevTutorialText>
        But there&apos;s a universal approach. You can store the data in the
        Service class&apos;s field and simultaneously return the result from the
        method.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: IProject[] = [];

  constructor(private httpClient: HttpClient) {}

  async fetchAllProjects(): Promise<IProject[]> {
    try {
      const response = await this.httpClient
        .get<{ projects: IProject[] }>(\`\${environment.apiUrl}projects/\`)
        .toPromise();

      if (response) {
        this.projects = response.projects;
        return this.projects;
      }
      throw new Error('No response from server');
    } catch (error) {
      console.error('Failed to fetch projects:', error);
      throw error;
    }
  }

  async addProject(newProject: IProject): Promise<IProject> {
    try {
      const response = await this.httpClient
        .post<{ project: IProject }>(\`\${environment.apiUrl}projects/\`, newProject)
        .toPromise();

      if (response) {
        await this.fetchAllProjects();
        return response.project;
      }
      throw new Error('No response from server');
    } catch (error) {
      console.error('Failed to add project:', error);
      throw error;
    }
  }

  async deleteProject(id: number): Promise<boolean> {
    try {
      const response = await this.httpClient
        .delete<{ deleted: boolean }>(\`\${environment.apiUrl}projects/\${id}/\`)
        .toPromise();

      if (!response || !response.deleted) {
        throw new Error('Failed to delete project on server');
      }

      await this.fetchAllProjects();
      return response.deleted;
    } catch (error) {
      console.error('Failed to delete project:', error);
      throw error;
    }
  }
}
`}
      />

      <DevTutorialText>
        This way, you get a universal Service class. Depending on the
        component&apos;s needs, you can get data in 2 ways:
        <b>The function result</b> or from the <b>Service class field</b>.
      </DevTutorialText>

      <DevTutorialText>
        Angular allows you to do more, for example, subscription systems.
      </DevTutorialText>

      <DevTutorialTitle>Logic of Data Fetching in a Component</DevTutorialTitle>

      <DevTutorialText>
        The component needs to fetch data to display it.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  loading = true;
  error: string | null = null;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  async fetchProjects() {
    this.loading = true;
    this.error = null;

    try {
      await this.projectsService.fetchAllProjects();
    } catch (err) {
      this.error = 'Something went wrong';
    } finally {
      this.loading = false;
    }
  }

  get projects(): IProject[] {
    return this.projectsService.project;
  }
}
`}
      />

      <DevTutorialText>
        This is the simplest implementation of such logic. Now, let&apos;s
        implement it using subscriptions.
      </DevTutorialText>

      <DevTutorialText>
        <b>Service:</b>
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: IProject[] = [];
  private projectsSubject: BehaviorSubject<IProject[]> = new BehaviorSubject<IProject[]>([]);

  constructor(private httpClient: HttpClient) {}

  get project$(): Observable<IProject[]> {
    return this.projectsSubject.asObservable();
  }

  fetchAllProjects(): void {
    this.httpClient
      .get<{ projects: IProject[] }>(\`\${environment.apiUrl}projects/\`)
      .subscribe({
        next: (response) => {
          this.projects = response.projects;
          this.projectsSubject.next(this.projects);
        },
        error: (err) => {
          console.error('Failed to fetch projects:', err);
        }
      });
  }
}
`}
      />

      <DevTutorialText>
        <b>Component:</b>
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { IProject } from '../models/project.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  loading = true;
  error: string | null = null;
  projects: IProject[] = [];
  private projectsSubscription: Subscription;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.fetchProjects();
  }

  fetchProjects() {
    this.loading = true;
    this.error = null;

    this.projectsSubscription = this.projectsService.project$.subscribe({
      next: (projects) => {
        this.projects = projects;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Не удалось загрузить проекты';
        this.loading = false;
      }
    });

    this.projectsService.fetchAllProjects();
  }

  ngOnDestroy() {
    if (this.projectsSubscription) {
      this.projectsSubscription.unsubscribe();
    }
  }
}
`}
      />

      <DevTutorialText>
        In this implementation, the component subscribes to the <b>projects$</b>{' '}
        observable from the service, receiving updates about projects whenever
        they change.
      </DevTutorialText>

      <DevTutorialText>
        We also make sure to <b>unsubscribe</b> from the observable when the
        component is destroyed to avoid memory leaks.
      </DevTutorialText>

      <DevTutorialTitle>Component Markup</DevTutorialTitle>

      <DevTutorialText>
        Now we need to display the fetched data.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`<div *ngIf="loading">Loading...</div>
<div *ngIf="error">{{ error }}</div>
<ul *ngIf="!loading && !error">
  <li *ngFor="let project of projects">
    <app-project-item [project]="project"></app-project-item>
  </li>
</ul>
`}
      />

      <DevTutorialText>
        Here we display the following:
        <ul>
          <li>
            <b>Loading</b> spinner during data fetching.
          </li>
          <li>Error message if there&apos;s an issue.</li>
          <li>
            A list of projects, where each project is displayed using a
            dedicated <b>&lt;app-project-item&gt;</b> component.
          </li>
        </ul>
      </DevTutorialText>

      <DevTutorialText>
        This approach ensures we have better separation of concerns and can
        customize the <b>&lt;app-project-item&gt;</b> component separately.
      </DevTutorialText>

      <DevTutorialText>
        <b>app-project-item</b> component code example:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`import { Component, Input } from '@angular/core';
import { IProject } from '../models/project.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent {
  @Input() project!: IProject;
}
`}
      />

      <DevTutorialText>
        The <b>app-project-item</b> component receives a single <b>project</b>{' '}
        as an input and displays its details.
      </DevTutorialText>
    </div>
  );
};

export default CommonDevTutorialAngular;
