import DevTutorialCodeBlock from '@components/devTutorial/DevTutorialCodeBlock';
import DevTutorialSubtitle from '../../items/DevTutorialSubtitle';
import DevTutorialText from '../../items/DevTutorialText';
import DevTutorialTitle from '../../items/DevTutorialTitle';
import styles from './CommonDevTutorialReactNative.module.css';

const CommonDevTutorialReactNative = () => {
  return (
    <div className={styles.container}>
      <DevTutorialTitle>
        React Native Application Functionality Implementation Recommendations
      </DevTutorialTitle>
      <DevTutorialText>
        In this section, you will find recommendations on how to implement
        functionality in a React Native application.{' '}
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
        data in the <b>interfaces</b> folder (the data, not the responses as a
        whole).
      </DevTutorialText>
      <DevTutorialText>
        <b>3.</b> Create functions in the <b>api</b> folder that send
        requests/send data to the server using <b>axiosInstance</b> and return
        the result.
      </DevTutorialText>
      <DevTutorialText>
        <b>4.</b> Analyze whether these response data need to be stored in the{' '}
        <b>store</b>. If the data is needed on several pages, it is worth saving
        it. If it&apos;s only needed within one page, no need.
      </DevTutorialText>
      <DevTutorialText>
        <b>5.</b> If the data needs to be stored in the <code>store</code>,
        create interfaces for reducers and actions for this data in the{' '}
        <b>interfaces/reducers</b> and <b>interfaces/actions</b> folders,
        respectively.
      </DevTutorialText>
      <DevTutorialText>
        <b>6.</b> If the data needs to be stored in the <code>store</code>,
        create actions based on the interfaces in <b>interfaces/actions</b> and
        reducers based on <b>interfaces/reducers</b> for these data in the{' '}
        <b>store/reducers</b> and <b>store/actions</b> folders, respectively.
        Each reducer should consist of at least 3 fields: data, error
        information, and request status.
      </DevTutorialText>
      <DevTutorialText>
        <b>7.</b> If the data is in the <b>store</b>, create thunks that call
        the functions for sending/receiving data from the server, store the
        received data, error information, and request status in the <b>store</b>
        .
      </DevTutorialText>
      <DevTutorialText>
        <b>8.</b> Create hooks in the <b>hooks</b> folder that provide a
        convenient API for working with data in components. These hooks are
        designed to isolate the logic of where and how the data is fetched. Some
        hooks will work with data from <b>redux</b>, others will keep data in
        their own state.
      </DevTutorialText>
      <DevTutorialText>
        <b>9.</b> Analyze if permissions need to be added in native code for
        working with OS APIs.
      </DevTutorialText>

      <DevTutorialText>
        <b>10.</b> If necessary, create hooks inside the <b>hooks</b> folder to
        interact with <b>OS APIs</b>. These hooks should isolate the logic of
        requesting permissions for the gallery, camera, push notifications,
        geolocation access, etc. Additionally, these hooks will return functions
        that interact with the OS APIs, such as functions for requesting and
        returning the <b>user&apos;s geolocation</b>, opening the gallery, and{' '}
        <b>fetching the selected photo</b>.
      </DevTutorialText>

      <DevTutorialText>
        <b>11.</b> Implement a component layout that works with data and OS API
        hooks. Use a component-based approach to keep <b>JSX</b> clean and
        well-structured.
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
      <DevTutorialTitle>Creating Server Request Functions</DevTutorialTitle>
      <DevTutorialText>
        Knowing how the backend works and what needs to be done with each entity
        according to the technical specifications, you can describe functions
        for working with the server. In <b>Javascript / Typescript</b>{' '}
        applications, the <b>axios</b> library is often used for interacting
        with the server. In brief, interceptors and instances are key features.{' '}
        <u>
          This layer of logic is responsible only for sending the request and
          receiving the server response
        </u>
        . Error handling does not occur here. The core is asynchronous
        functions, inside which the request is made using axios and the server
        response is returned from the function:
      </DevTutorialText>
      <DevTutorialCodeBlock
        code={`export const fetchCommentsApi = async (projectId: number, taskId: number) => {
  const res = await axiosInstance.get(
    \`/projects/\${projectId}/tasks/\${taskId}/comments\`
  );
  return res.data;
};
`}
      />
      <DevTutorialText>
        Some people prefer to return the entire response. But often, more
        information than what is in the <b>data</b> field is unnecessary for the
        application. That is, only the data is needed.
      </DevTutorialText>
      <DevTutorialText>
        <b>&ldquo;Why shouldn&apos;t errors be handled here?&rdquo;</b>
        <br />
        This function may be called in different places, so the error response
        might be different (for example, showing an alert with text or using
        retry logic).
      </DevTutorialText>
      <DevTutorialTitle>
        Analyzing Whether to Store Data in the Store
      </DevTutorialTitle>
      <DevTutorialText>
        If there is a clear technical task and design, answering this question
        becomes easier. However, this is not always the case. You can follow the
        logic: if the data is needed on more than one page, it should be stored
        in the store to avoid duplicating server requests. Another approach is
        &ldquo;how far apart are the components requesting the data in the
        hierarchy?&rdquo; Since you need to avoid props drilling.
      </DevTutorialText>
      <DevTutorialText>
        If it&apos;s access tokens, refresh tokens, they should be stored in an
        encrypted format, as you will need to work with them in axios.
      </DevTutorialText>
      <DevTutorialText>
        If the data is something like &ldquo;list of projects,&rdquo; it is
        likely worth storing because it can be used on both &ldquo;All
        Projects&rdquo; and &ldquo;Project Details&rdquo; pages. But if there is
        enough data for &ldquo;project details,&rdquo; you won&apos;t have to
        make a request like &ldquo;give me the full project information.&rdquo;
      </DevTutorialText>
      <DevTutorialText>
        However, if you are on &ldquo;Project Details&rdquo; and make a request
        like &ldquo;give me the full project information,&rdquo; it is unlikely
        that you will need this information anywhere else besides the
        &ldquo;Project Details&rdquo; page. In that case, it makes no sense to
        store it in the store. This can be kept in the component state.
      </DevTutorialText>
      <DevTutorialText>
        If the server response contains trivial information like &ldquo;deleted
        successfully,&rdquo; it is simply a signal to you that the operation on
        the server was successful. There is no need to store this anywhere.
      </DevTutorialText>
      <DevTutorialTitle>
        Creating Interfaces for Reducer and Actions
      </DevTutorialTitle>
      <DevTutorialText>
        If you are going to store information in the store, you need to describe
        what the reducer and actions will look like. At this stage, you decide
        what exactly the store will hold.
      </DevTutorialText>
      <DevTutorialText>
        <b>dataForProjectsPageReducer</b> is a bad idea. This way, you are
        hardcoding the store logic for a specific page. At any moment, the
        requirements for this page can change, and such a structure will become
        very difficult to maintain.
      </DevTutorialText>
      <DevTutorialText>
        <b>projectsReducer</b> is a good solution. You and other developers get
        the understanding that this reducer works specifically with projects.
        Moreover, this data might be needed not only on the &ldquo;All
        Projects&rdquo; page.
      </DevTutorialText>
      <DevTutorialText>
        Since <b>projectsReducer</b> contains information about projects, it
        will request these projects from the server. Therefore, this data will
        not be in the store until it arrives from the server and you send it to
        the store. This means that two more fields should be stored in the
        reducer: <b>error</b> and <b>loading (isLoading)</b>.
      </DevTutorialText>
      <DevTutorialText>
        <strong>error</strong> - an error might occur, such as an Internal
        Server Error - 500. This information should not be lost. Sometimes, you
        will need to react to the error in the component.
      </DevTutorialText>
      <DevTutorialText>
        <strong>loading (isLoading)</strong> - request state. While the request
        is in progress, based on this field, you can display a LoadingView.
      </DevTutorialText>
      <DevTutorialText>
        <b>
          &ldquo;Why store <code>error</code> and <code>loading</code> in the
          store? Isn&apos;t it better to store them in the component
          state?&rdquo;
        </b>
        <br />
        You can, but not always. Suppose the page contains a list of projects,
        and the header is in some <code>LayoutComponent</code>, which is very
        far from the page component. The header displays the number of projects.
        The server request function is called once, and the data is needed in
        both places. Both components should react to the error and the request
        state. It is much easier to keep this information in the store than to
        invent something complicated.
      </DevTutorialText>
      <DevTutorialText>
        Action interfaces describe the <code>payload</code>. If you are sure
        that all actions will have the same payload, for example, for{' '}
        <code>addProject</code> and <code>updateProject</code>, you can create
        one interface. If you are not sure, you can create a separate interface
        for the payload of each action. <code>updateProject</code> may require
        additional data in the future.
      </DevTutorialText>
      <DevTutorialTitle>
        Creating Actions and Reducer Based on Interfaces
      </DevTutorialTitle>
      <DevTutorialText>
        Based on the described interfaces, you need to create the <b>reducer</b>{' '}
        and <b>actions</b>.
      </DevTutorialText>
      <DevTutorialText>
        The <b>reducer</b> is a <b>pure function</b>, it should only work with
        what is passed to it in the parameters. Also, avoid writing complex
        logic in the reducer cases. It is better to do that before sending data
        to the store. Something like deleting a project using <b>filter</b> is
        appropriate here, if it&apos;s a <b>deleteProject</b> or{' '}
        <b>removeProject</b> action, if the logic is needed.
      </DevTutorialText>
      <DevTutorialTitle>
        Creating Thunks / Sagas That Call Request Functions
      </DevTutorialTitle>
      <DevTutorialText>
        It&rsquo;s time to describe the logic that the component will call to
        get/send data. If you use redux, you typically rely on{' '}
        <b>redux-thunk</b> / <b>redux-saga</b>.
      </DevTutorialText>
      <DevTutorialText>
        Their role is to handle the logic of fetching data, saving it to the
        store, sometimes validation, error handling, possibly retry logic for
        failed requests, and much more &mdash; things that the component should
        not be responsible for. The main task of the component is to request the
        data and display it nicely to the user, regardless of whether it&rsquo;s
        an error, a long load, or an array of data. However, the data-fetching
        logic resides in the thunk/sagas.
      </DevTutorialText>
      <DevTutorialText>
        Here&rsquo;s an example working with a thunk:
      </DevTutorialText>
      <DevTutorialCodeBlock
        code={`export const fetchProjectsAsyncAction = createAsyncThunk(
  'projects/fetchProjectsAsyncAction',
  async (_, { getState, dispatch }) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await fetchProjectsApi();
      const projects = res.projects.reverse();
      dispatch(setProjectsAction({ projects: projects }));
      dispatch(setErrorAction({ error: undefined }));
    } catch (e: any) {
      dispatch(setErrorAction({ error: e }));
      console.log('projectsActions::fetchProjectsAsyncAction error:', e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
`}
      />
      <DevTutorialText>
        In this part of the code, we describe the logic for fetching a list of
        projects. You need to wrap all the code in <b>try-catch-finally</b>.
      </DevTutorialText>
      <DevTutorialText>
        First, you need to set the request state to <b>true</b> so that the
        component can notify the user that data is &ldquo;in progress&rdquo;.
      </DevTutorialText>
      <DevTutorialText>
        Then, call the function that performs the <b>request/send</b> data. This
        function implements the server request logic and returns the array of
        projects.
      </DevTutorialText>
      <DevTutorialText>
        After receiving the response, a small data formatting step is done
        &mdash; reversing the array. Without this, new projects would appear at
        the end of the list, but we need them to be at the top. Instead of
        flipping the array each time the component renders or doing it inside
        the reducer, <b>it&rsquo;s better to do it right in the thunk</b>. Or
        ask backend developers to return the list in the order that suits you.
      </DevTutorialText>
      <DevTutorialText>
        Then, send the list of projects to the store and <b>reset the error</b>.
        Yes, the error should be reset upon a successful server response.
        Suppose the first request failed and we sent an error to the store.
        Then, if the second request succeeds and we receive the list of
        projects, both the projects list and the error would remain in the
        store. The component would find it difficult to determine whether to
        show the data or handle the error.
      </DevTutorialText>
      <DevTutorialText>
        But in case of an error, thunks/sagas can also handle it. For example,
        they could log the error or retry the request. This is done in the{' '}
        <b>catch</b> block.
      </DevTutorialText>
      <DevTutorialText>
        Finally, you need to set the request state to <b>false</b> in the{' '}
        <b>finally</b> block. This way, the component will show either the data
        or an error message instead of a loading view. If this isn&rsquo;t done,
        there will be &ldquo;eternal loading&rdquo; in the component.
      </DevTutorialText>
      <DevTutorialText>Another example:</DevTutorialText>
      <DevTutorialCodeBlock
        code={`export const createProjectAsyncAction = createAsyncThunk<
  void,
  ICreateProjectAsyncAction
>(
  'projects/createProjectAsyncAction',
  async (
    { title, description, onSuccess }: ICreateProjectAsyncAction,
    { getState, dispatch }
  ) => {
    try {
      dispatch(setLoadingAction({ loading: true }));
      const res = await createProjectApi(title, description);
      console.log('Created Project:', res);
      dispatch(fetchProjectsAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('projectsActions::createProjectAsyncAction error:', e);
      handleErrorResponse(e);
    } finally {
      dispatch(setLoadingAction({ loading: false }));
    }
  }
);
`}
      />
      <DevTutorialText>
        This part of the code describes the logic for creating a new project.
        The <b>createProjectAsyncAction</b> thunk receives data from the
        component (entered by the user). If the component does not validate the
        data, this can be done in the thunk. If validation fails, you can throw
        an error and handle it in the <b>catch</b> block. There is a way to use
        a callback function passed by the component. In case of error/invalid
        data, this callback function can be called and passed the error
        information, leaving the component to decide how to handle it.
      </DevTutorialText>
      <DevTutorialText>
        You can also pass a callback function for successful operations, as
        shown in the example code above (<b>onSuccess</b>). This function is
        called at the end. For example, it could navigate to the details of the
        newly created project or return to the &ldquo;All Projects&rdquo;
        screen.
      </DevTutorialText>
      <DevTutorialText>
        In this example, <b>createProjectApi</b> returns the newly created
        project, but we request the entire list of projects again. The same
        situation applies when deleting a project. The question might arise:
        &ldquo;Why update the entire project list if you can create an action
        that removes the deleted project from the store? Isn&rsquo;t that more
        logical?&rdquo; - it is, if you are sure that no other actions were
        performed on the project list between &ldquo;getting the list&rdquo; and
        &ldquo;deleting the project&rdquo;. If no other developers
        added/removed/modified projects. In such cases, it&rsquo;s possible to
        delete locally without synchronizing with the server.
      </DevTutorialText>
      <DevTutorialText>
        However, be cautious when using the local delete approach because the
        project list is shared across multiple users. Therefore, it is better to
        get the updated project list after each operation to avoid
        desynchronization between the client and server. Some development teams
        insist on reducing server load and saving traffic. However, this
        approach requires careful consideration of user behavior scenarios.
      </DevTutorialText>
      <DevTutorialText>
        Refreshing the entire project list is not the best solution, but it is
        reliable.
      </DevTutorialText>
      <DevTutorialText>
        &ldquo;What if there are 1000 projects? Will I receive a response with
        1000 projects each time?&rdquo; - no, you won&rsquo;t receive a response
        with 1000 projects. Pagination is implemented on the server side for
        large datasets. This allows frontend applications to receive data in
        chunks. As the user scrolls through the project list, the projects will
        load progressively. And the newly created project will always be the
        first one, at the top.
      </DevTutorialText>
      <DevTutorialTitle>
        Creating a Hook with API for a Component
      </DevTutorialTitle>
      <DevTutorialText>
        Once entities are defined and the logic for fetching/sending data is
        implemented, it remains to call this logic within the components. But is
        it right to always call the dispatch function from the component and
        subscribe to the data using <b>useSelector</b> in the component? In
        general, yes. But now imagine a component that subscribes to ±4{' '}
        <b>useSelectors</b> and uses 3 dispatch calls in <b>useEffect</b> to
        invoke thunks/sagas. It starts to feel cumbersome. Such cases are not
        rare. Now imagine your team decided to switch to GraphQL, and instead of
        Redux, you need Apollo Client. In addition to rewriting the server
        interaction logic, you&apos;ll need to remove old dispatches,{' '}
        <b>useSelectors</b>, and replace them with <b>useQuery</b>,{' '}
        <b>useMutation</b>. The likelihood of making mistakes is very high. But
        this can be avoided by introducing an abstraction layer between the
        component and the data source. One option for implementing such
        abstractions is custom hooks.
      </DevTutorialText>
      <DevTutorialText>
        Here&apos;s an example of a custom hook:
      </DevTutorialText>
      <DevTutorialCodeBlock
        code={`const useProjects = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const projects = useSelector<TRootState, IProject[]>(
    (state: TRootState) => state.projects.projects
  );

  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.projects.error
  );

  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.projects.loading
  );

  const fetchProjects = React.useCallback(() => {
    dispatch(fetchProjectsAsyncAction());
  }, []);

  const createProject = React.useCallback(
    (title: string, description: string, onSuccess?: () => void) => {
      dispatch(
        createProjectAsyncAction({
          title: title,
          description: description,
          onSuccess: onSuccess,
        })
      );
    },
    []
  );

  return {
    projects,
    error,
    loading,
    fetchProjects,
    createProject
  };
};

export default useProjects;
`}
      />
      <DevTutorialText>
        The <b>useProjects</b> hook isolates the project logic and provides a
        compact API for the component to interact with. Here&apos;s how you use
        it in a component that needs the list of projects:
      </DevTutorialText>
      <DevTutorialCodeBlock
        code={`const { projects, error, loading, fetchProjects } = useProjects();`}
      />
      <DevTutorialText>
        And here&apos;s how it would look in a component-page where a new
        project can be created:
      </DevTutorialText>
      <DevTutorialCodeBlock
        code={`const { loading, createProject } = useProjects();`}
      />
      <DevTutorialText>
        In addition to a more compact structure, this abstraction allows you to
        change the data source without modifying the component&apos;s code, for
        example, switching from Redux to hook state or Apollo Client.
      </DevTutorialText>
      <DevTutorialText>
        All responsibility lies with the <b>useProjects</b> hook. When you
        upgrade it, you can be sure that <b>projects</b>, <b>error</b>, and{' '}
        <b>loading</b> are up-to-date data. The functions <b>fetchProjects</b>{' '}
        and <b>createProject</b> will continue to behave as they did
        before—accepting the same parameters and returning the same results.
      </DevTutorialText>
      <DevTutorialText>
        <b>
          This approach not only minimizes the risk of errors and makes the code
          more obvious, but also makes it easier to cover it with tests.
        </b>
      </DevTutorialText>
      <DevTutorialText>Another example:</DevTutorialText>
      <DevTutorialCodeBlock
        code={`const useProject = (projectId: string | undefined) => {
  const [project, setProject] = React.useState<IProject | undefined>(undefined);
  const [error, setError] = React.useState<any>(undefined);
  const [loading, setLoading] = React.useState<boolean>(true);

  const fetchProjectData = React.useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchProjectApi(parseInt(projectId!));
      if (response.project) {
        setProject(response.project);
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [projectId]);

  React.useEffect(() => {
    fetchProjectData();
  }, [projectId]);

  return { project, error, loading };
};

export default useProject;
`}
      />
      <DevTutorialText>
        The <b>useProject</b> hook does not interact with Redux; it fetches and
        stores the data internally. Here&apos;s how you can use it:
      </DevTutorialText>
      <DevTutorialCodeBlock
        code={`const { project, error, loading } = useProject(projectId);`}
      />
      <DevTutorialText>
        But if you need to fetch and store the data using Redux, you just need
        to change the implementation of the hook. The component itself
        won&apos;t change.
      </DevTutorialText>
      <DevTutorialText>
        Do you always need such abstractions? No. For example, for
        authorization, there&apos;s no need. If you know that you will always
        have a Bearer token, it&apos;s acceptable to call <b>dispatch</b>{' '}
        directly from the component and subscribe using <b>useSelector</b>. Most
        likely, the <b>useSelector</b> subscribing to the token will be called
        just once, somewhere in the navigation. And the thunk/saga for
        authorization would reside on the SignIn page.
      </DevTutorialText>
      <DevTutorialText>
        But if you need to get the Bearer token using an OTP code, then it
        involves more than one action. In this case, you will need to refactor
        the logic of the page. So for such cases, you should decide on
        abstractions based on the situation.
      </DevTutorialText>
      <DevTutorialTitle>
        Analyze whether it is necessary to work with permissions
      </DevTutorialTitle>

      <DevTutorialText>
        The data source in a mobile application can come not only from the
        backend. Mobile apps often interact with the <b>OS API</b>. For example,
        retrieving the user&apos;s <b>current geolocation</b>,{' '}
        <b>accessing the gallery</b>, or <b>receiving push notifications</b> all
        require defining <b>permissions</b> on the native side.
      </DevTutorialText>

      <DevTutorialText>
        At this stage, based on the design and technical requirements, it is
        important to{' '}
        <b>
          analyze which permissions will be needed for implementing the task
        </b>
        . If the app includes a map feature, there is a high probability that
        displaying the user&apos;s current location will be required. If the
        design or technical specifications involve uploading photos or files to
        the server, the application will definitely need access to the file
        system.
      </DevTutorialText>

      <DevTutorialTitle>Creating a Hook to Work with OS API</DevTutorialTitle>

      <DevTutorialText>
        There are many approaches to working with permissions and OS API. Some
        developers prefer to implement this in the form of a set of functions,
        combining them into a Service class. Others create a hook that works
        with all permissions and separate hooks for geolocation, gallery, etc.
        Additionally, these solutions can be combined. But the workflow
        algorithm is always the same:
      </DevTutorialText>

      <DevTutorialText>
        1. Request permissions from the user for the required API (e.g.,
        geolocation).
      </DevTutorialText>

      <DevTutorialText>
        2. If the user grants permission, use the system API in the app (e.g.,
        request the current geolocation).
      </DevTutorialText>

      <DevTutorialSubtitle>
        Example Hook for Working with the Gallery
      </DevTutorialSubtitle>

      <DevTutorialCodeBlock
        code={`import { useCallback } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import { request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';

export const useGallery = () => {
  const requestGalleryPermission = useCallback(async (): Promise<boolean> => {
    const permission =
      Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;

    const result = await request(permission);
    return result === RESULTS.GRANTED;
  }, []);

  const openGallery = useCallback(async (): Promise<string | null> => {
    const hasPermission = await requestGalleryPermission();
    if (!hasPermission) return null;

    return new Promise((resolve) => {
      launchImageLibrary(
        { mediaType: 'photo', quality: 1 },
        (response) => {
          if (response.didCancel || response.errorMessage) {
            resolve(null);
          } else if (response.assets && response.assets.length > 0) {
            resolve(response.assets[0].uri ?? null);
          } else {
            resolve(null);
          }
        }
      );
    });
  }, [requestGalleryPermission]);

  return { requestGalleryPermission, openGallery };
};
`}
      />

      <DevTutorialSubtitle>Usage in a Component</DevTutorialSubtitle>

      <DevTutorialCodeBlock
        code={`import React, { useState } from 'react';
import { Button, Image, View } from 'react-native';
import { useGallery } from './useGallery';
import { styles } from './styles';

const App = () => {
  const { openGallery } = useGallery();
  const [imageUri, setImageUri] = useState<string | null>(null);

  const handleOpenGallery = async () => {
    const uri = await openGallery();
    if (uri) setImageUri(uri);
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="Select Photo" onPress={handleOpenGallery} />
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
    </View>
  );
};

export default App;
`}
      />
      <DevTutorialTitle>Component Implementation</DevTutorialTitle>

      <DevTutorialText>
        When implementing components, it is important to follow several key
        rules. One of the core ideas of React is component reusability. It is
        also recommended to follow the first two SOLID principles:
      </DevTutorialText>

      <DevTutorialText>
        <b>S</b> - Single Responsibility Principle: Each component should focus
        on a single task.
      </DevTutorialText>

      <DevTutorialText>
        <b>O</b> - Open-Closed Principle: Components should be open to extension
        (e.g., via Higher-Order Components) but closed to modification.
      </DevTutorialText>

      <DevTutorialText>
        It&apos;s also essential to optimize for performance. The primary focus
        should be on reducing the number of re-renders of a component.
        React.memo should be used to optimize this. React.useMemo and
        React.useCallback are helpful for avoiding unnecessary recalculations
        and excessive memory use in functions.
      </DevTutorialText>

      <DevTutorialText>
        <b>Code readability is also crucial</b>. Use <b>descriptive names</b>{' '}
        for variables and functions. Components{' '}
        <b>should not be excessively large</b>. Break them into smaller
        components to improve readability and make optimizations easier. Avoid
        props drilling, too many conditions in conditional rendering, and inline
        styles.
      </DevTutorialText>

      <DevTutorialText>
        A simple way to test whether a component is well-written is to try
        covering it with tests. If difficulties arise, it might be a sign that
        refactoring is needed.
      </DevTutorialText>

      <DevTutorialSubtitle>
        Example: ProjectsScreen Component
      </DevTutorialSubtitle>

      <DevTutorialCodeBlock
        code={`
import styles from './styles';

const ProjectsScreen = () => {
  const { isAdmin } = useIsAdmin();
  const { projects, error, loading, fetchProjects } = useProjects();
  const navigation = useNavigation();

  React.useEffect(() => {
    fetchProjects();
  }, []);

  const goToProjectCreator = React.useCallback(() => {
    navigation.navigate('ProjectCreator');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <Button title="Create Project" onPress={goToProjectCreator} disabled={!isAdmin} />
        </View>
        <ProjectList projects={projects} error={error} loading={loading} />
      </View>
    </View>
  );
};

export default ProjectsScreen;
`}
      />

      <DevTutorialSubtitle>Example: ProjectList Component</DevTutorialSubtitle>

      <DevTutorialCodeBlock
        code={`
import styles from './styles';

interface IProps {
  projects: IProject[];
  error: any;
  loading: boolean;
}

const ProjectList = ({ projects, error, loading }: IProps) => {
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <UniversalError text="Something went wrong" />;
  }

  if (projects.length === 0) {
    return <UniversalStub text="No Projects" />;
  }

  return (
    <FlatList
      data={projects}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.projectContainer}>
          <ProjectListItem project={item} />
        </View>
      )}
    />
  );
};

export default ProjectList;
`}
      />

      <DevTutorialSubtitle>
        Example: ProjectListItem Component
      </DevTutorialSubtitle>

      <DevTutorialCodeBlock
        code={`
import styles from './styles';

interface IProps {
  project: IProject;
}

const ProjectListItem = ({ project }: IProps) => {
  const { isAdmin } = useIsAdmin();
  const navigation = useNavigation();
  const { deleteProject } = useProjects();

  const goToProjectDetails = React.useCallback(() => {
    navigation.navigate('ProjectDetails', { projectId: project.id });
  }, [project, navigation]);

  const goToProjectEditor = React.useCallback(() => {
    navigation.navigate('ProjectEditor', { projectId: project.id });
  }, [project, navigation]);

  const deleteCurrentProject = React.useCallback(() => {
    Alert.alert('Confirm', 'Are you sure you want to delete?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => deleteProject(project.id) }
    ]);
  }, [project, deleteProject]);

  return (
    <TouchableOpacity style={styles.container} onPress={goToProjectDetails}>
      <View style={styles.content}>
        <Text style={styles.title}>{project.title}</Text>
        <Text style={styles.description}>{project.description}</Text>
        <View style={styles.additionalInfo}>
          <Text style={styles.taskCount}>Task Count: {project.tasksCount}</Text>
          <Text style={styles.userCount}>Members: {project.users.length}</Text>
        </View>
      </View>
      <View style={styles.actionsContainer}>
        {isAdmin && (
          <TouchableOpacity onPress={goToProjectEditor}>
            <EditIcon style={styles.actionIcon} />
          </TouchableOpacity>
        )}
        {isAdmin && (
          <TouchableOpacity onPress={deleteCurrentProject}>
            <DeleteIcon style={styles.actionIcon} />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ProjectListItem;
`}
      />

      <DevTutorialText>
        <b>
          Why Not Use the <b>useProjects</b> Hook Directly in the `ProjectList`
          Component?
        </b>
        <br />A possible question could be: &quot;Why should I use the
        `useProjects` hook in the <b>ProjectsScreen</b> component to fetch the
        project data and then pass it as props to the <b>ProjectList</b>{' '}
        component? Wouldn&apos;t it be easier to use the hook directly in
        `ProjectList`?&quot;
      </DevTutorialText>

      <DevTutorialText>
        One of React&apos;s key concepts is <b>component reusability</b>.
        Following this principle, we structure components to focus on a single
        responsibility and remain flexible for future enhancements. This aligns
        with the <b>Open-Closed Principle</b> from SOLID, which states that
        components should be &quot;open for extension but closed for
        modification.&quot;
      </DevTutorialText>

      <DevTutorialText>
        Let&apos;s consider an example: a new requirement to{' '}
        <b>filter projects by name</b> and show a screen for{' '}
        <b>completed projects</b>.
      </DevTutorialText>

      <DevTutorialText>
        To implement this, you could: -{' '}
        <b>Create a Higher-Order Component (HoC)</b>
        that adds filtering functionality to <b>ProjectList</b>. - Use the same
        <b>ProjectList</b> in a new screen for completed projects, passing the
        list of completed projects as props.
      </DevTutorialText>

      <DevTutorialText>
        By doing this, we ensure that our <b>ProjectList</b> remains reusable
        and adaptable to future changes without modifying its core logic. This
        is a direct application of the <b>Open-Closed Principle</b> and the idea
        of
        <b>component reusability</b>.
      </DevTutorialText>

      <DevTutorialSubtitle>
        Example: <b>ProjectDetailsScreen</b> and <b>ProjectDetailsWrapper</b>{' '}
        Components
      </DevTutorialSubtitle>

      <DevTutorialCodeBlock
        code={`
import styles from './styles';

interface IProps {
  projectInfo: IProject;
}

const ProjectDetailsScreen = ({ projectInfo }: IProps) => {
  const route = useRoute();
  const navigation = useNavigation();
  const { projectId } = route.params;

  const { isAdmin } = useIsAdmin();
  const { deleteProject } = useProjects();
  const { tasks, error, loading, fetchTasks } = useTasks(parseInt(projectId));

  React.useEffect(() => {
    fetchTasks();
  }, []);

  const deleteCurrentProject = React.useCallback(() => {
    Alert.alert(
      'Delete Project',
      'Are you sure you want to delete?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => deleteProject(parseInt(projectId), goToProjects), style: 'destructive' },
      ],
      { cancelable: false }
    );
  }, [projectId]);

  const goToProjectEditor = React.useCallback(() => {
    navigation.navigate('ProjectEditor', { projectId });
  }, [projectId]);

  const goToTaskCreator = React.useCallback(() => {
    navigation.navigate('TaskCreator', { projectId });
  }, [projectId]);

  const goToProjects = React.useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{projectInfo?.title}</Text>
      <View style={styles.content}>
        <View style={styles.buttonsContainer}>
          <UsersInProjectPicker
            projectId={parseInt(projectId)}
            usersInProject={projectInfo?.users ?? []}
          />
          <Button
            disabled={!isAdmin}
            onPress={goToTaskCreator}
            title="Create Task"
          />
          <Button
            disabled={!isAdmin}
            onPress={goToProjectEditor}
            title="Edit Project"
          />
          <Button
            disabled={!isAdmin}
            onPress={deleteCurrentProject}
            title="Delete Project"
            color="red"
          />
        </View>
        <TaskList tasks={tasks} error={error} loading={loading} />
      </View>
    </View>
  );
};

const ProjectDetailsWrapper = () => {
  const route = useRoute();
  const { projectId } = route.params;

  const { project, error, loading } = useProject(projectId);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error || !project) {
    return (
      <NotFoundStub text="Something went wrong. Probably project was not found" />
    );
  }

  return <ProjectDetailsScreen projectInfo={project} />;
};

export default ProjectDetailsWrapper;
`}
      />

      <DevTutorialText>
        The <b>ProjectDetailsScreen</b> component works with a specific project,
        using the provided <b>projectId</b>. However, if used as a page,
        there&apos;s no guarantee that the project exists. Checking for the
        existence of the project within the <b>ProjectDetailsScreen</b> would
        complicate the component.
      </DevTutorialText>

      <DevTutorialText>
        To avoid this, a wrapper component, <b>ProjectDetailsWrapper</b>, is
        used. This component handles the logic for fetching the project data,
        and if the project is found, it renders <b>ProjectDetailsScreen</b>.
        This way, each component stays focused on a single task, and together,
        they provide a reliable screen experience.
      </DevTutorialText>
    </div>
  );
};

export default CommonDevTutorialReactNative;
