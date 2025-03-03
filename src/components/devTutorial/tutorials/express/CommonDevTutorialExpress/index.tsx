import DevTutorialCodeBlock from '@components/devTutorial/DevTutorialCodeBlock';
import DevTutorialSubtitle from '../../items/DevTutorialSubtitle';
import DevTutorialText from '../../items/DevTutorialText';
import DevTutorialTitle from '../../items/DevTutorialTitle';
import styles from './CommonDevTutorialExpress.module.css';

const CommonDevTutorialExpress = () => {
  return (
    <div className={styles.container}>
      <DevTutorialTitle>
        Express Application Functionality Implementation Recommendations
      </DevTutorialTitle>
      <DevTutorialText>
        In this section, you will find recommendations on how to implement
        functionality in a Express application.{' '}
        <u>
          Remember, there can be several solutions to one task. It is not
          necessary that only one is correct. All of them can be correct 😀
        </u>
      </DevTutorialText>

      <DevTutorialSubtitle>Implementation Flow:</DevTutorialSubtitle>

      <DevTutorialText>
        <b>1.</b> Analyze, according to the technical specification, what is
        required from the Entity.
      </DevTutorialText>
      <DevTutorialText>
        <b>2.</b> Create a table for the Entity, establish relationships between
        the current table and others.
      </DevTutorialText>
      <DevTutorialText>
        <b>3.</b> Create a file with the service class (Model layer) in the
        services folder, which interacts with the table using ORM. Implement
        necessary CRUD operations for the table.
      </DevTutorialText>
      <DevTutorialText>
        <b>4.</b> Create functions to transform the Entity view into the one
        suitable for the client app.
      </DevTutorialText>
      <DevTutorialText>
        <b>5.</b> Based on the technical specification / client app, design the
        endpoints (View layer).
      </DevTutorialText>
      <DevTutorialText>
        <b>6.</b> Create / use an existing middleware to check authentication
        (accessToken validation) and authorization (user access to resource) for
        the necessary endpoints. In case of invalid accessToken, return status
        401 (not authorized) / status 403 (forbidden).
      </DevTutorialText>
      <DevTutorialText>
        <b>7.</b> Create middleware with validation rules for the incoming data
        from the client app for each endpoint. In case of invalid data, return
        status 400.
      </DevTutorialText>
      <DevTutorialText>
        <b>8.</b> Configure the use of validation middlewares for the View
        layer.
      </DevTutorialText>
      <DevTutorialText>
        <b>9.</b> Based on the endpoints (View layer), create the Controller
        class and its methods (Controller layer). Each View endpoint calls the
        corresponding method of the Controller class.
      </DevTutorialText>
      <DevTutorialText>
        <b>10.</b> In the methods of the Controller class, implement validation
        logic for the data received from the client app (checking the result of
        the middleware). In case of invalid data, return an error code and error
        description in the response to the client app.
      </DevTutorialText>
      <DevTutorialText>
        <b>11.</b> If validation is successful, in the methods of the Controller
        class, form the response for the client app using services from the
        Model layer and necessary transformations (if needed).
      </DevTutorialText>
      <DevTutorialText>
        <b>12.</b> In the methods of the Controller class, return the formed
        response to the client app.
      </DevTutorialText>
      <DevTutorialText>
        <b>13.</b> Provide a guide for working with the endpoints in the
        documentation (for example, a collection in Postman).
      </DevTutorialText>

      <DevTutorialTitle>What is required from the Entity</DevTutorialTitle>

      <DevTutorialText>
        Based on the technical specification or design, the requirements for the{' '}
        <b>Entity</b> need to be formulated:
      </DevTutorialText>
      <DevTutorialText>
        - What <b>data</b> the Entity should contain;
      </DevTutorialText>
      <DevTutorialText>
        - How the <b>table</b> of this Entity is related to <b>other tables</b>;
      </DevTutorialText>
      <DevTutorialText>
        - What <b>manipulations</b> need to be performed on the <b>table</b> of
        this Entity.
      </DevTutorialText>
      <DevTutorialText>
        This is a <b>crucial</b> step as the further architecture is built upon
        it. If the technical specification and design do not sufficiently
        describe the requirements, communication with the <b>Product Manager</b>
        , <b>Project Manager</b>, <b>Business Analyst</b>, <b>Team Lead</b>, or{' '}
        <b>Tech Lead</b> is required for clarification. If the project is small
        and such roles are not present, it’s necessary to communicate with the{' '}
        <b>team</b> or <b>client</b>.
      </DevTutorialText>

      <DevTutorialTitle>Create the table</DevTutorialTitle>

      <DevTutorialText>
        Based on the requirements, a <b>table</b> needs to be created in the
        database and relationships between the new table and existing tables
        should be established. When creating the table, consider that it doesn’t
        make sense to store <b>intermediate data</b> in the database. For
        example, if a <b>client app</b> needs to retrieve an Entity but
        additional data needs to be added — such as the{' '}
        <b>sum of two other fields</b> of the Entity — it can be done in the
        code. Storing this sum in the Entity (table record) doesn’t make sense.
      </DevTutorialText>

      <DevTutorialText>
        The following is an example of creating a table using Sequelize ORM for
        a <b>Project</b> and a <b>Task</b>:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Project = sequelize.define('project', {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   title: { type: DataTypes.STRING, unique: true, allowNull: false },
   description: { type: DataTypes.STRING }
});

const Task = sequelize.define('task', {
   id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   title: { type: DataTypes.STRING, allowNull: false },
   description: { type: DataTypes.STRING, allowNull: false },
   timeAllotted: { type: DataTypes.BIGINT },
});

Project.hasMany(Task, { onDelete: 'cascade' });
Task.belongsTo(Project);
`}
      />
      <DevTutorialTitle>Model Layer. Service Class</DevTutorialTitle>

      <DevTutorialText>
        Once the table in the database is created, it&apos;s necessary to create
        a class that handles <b>manipulations with this table</b>. In the
        simplest form, this is standard CRUD operations:
      </DevTutorialText>

      <DevTutorialText>
        <b>C</b> - <b>create</b>. Create a new record in the table;
        <b>R</b> - <b>read</b>. Retrieve a record / records from the table;
        <b>U</b> - <b>update</b>. Update an existing record (change field
        values);
        <b>D</b> - <b>delete</b>. Delete an existing record from the table.
      </DevTutorialText>

      <DevTutorialText>
        In practice, <b>ORM</b> is often used to work with the database, as it
        provides a convenient API (set of classes and functions) to interact
        with the database. ORM reduces the risk of breaking something in the
        database. However, some database queries can be very complex, and not
        all ORMs allow executing these queries in an optimized manner. In such
        cases, direct <b>query queries</b> might be needed.
      </DevTutorialText>

      <DevTutorialText>
        When creating a record in the table, you need to consider the{' '}
        <b>relationships</b> with other tables. During record reading, the
        client app often requests some filtering and pagination. Record updates
        need to be performed carefully, just like the record creation. Although
        ORM reduces the risk of breaking things, it doesn&apos;t guarantee the
        absence of issues. Deleting records is the most dangerous operation:
        when there are relations with other tables, deleting a record in one
        table can lead to the deletion of records in another table.
      </DevTutorialText>

      <DevTutorialText>
        The following example shows how to perform CRUD operations for a{' '}
        <b>Project</b> using Sequelize ORM:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const { Project, User, ProjectUser, Task, Status, Type, File } = require("../models/models");
const ApiError = require("../errors/ApiError");
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');

class ProjectService {

   async getAllProjects(token){
       const user = jwt.decode(token);
       let projects;
       if(user.role === "ADMIN"){
           projects = await Project.findAll();
       }else{
           const userInProjects = await ProjectUser.findAll({where: {userId: user.id}});
           projects = [];
           for(let i = 0; i < userInProjects.length; i++){
               const project = await Project.findOne({where: userInProjects[i].dataValues.projectId});
               projects.push(project);
           }
       }
       const formedProjects = [];
       for(let i = 0; i < projects.length; i++){
           const formedProject = await formProject(projects[i].id);
           formedProjects.push(formedProject);
       }
       return formedProjects;
   }

   async createProject(title, description){
       const candidate = await Project.findOne({where: {title: title.toString()}});
       if(candidate){
           throw ApiError.internal(\`Project with title '\${title}' already exist\`);
       }
       const project = await Project.create({title, description});
       const formedProject = await formProject(project.id);
       return formedProject;
   }

   async editProject(projectId, title, description){
       let project = await Project.findOne({where: {id: projectId}});
       if(!project){
           throw ApiError.badRequest(\`Project with id '\${projectId}' not found\`);
       }
       if(title){
           project = await Project.findOne({where: {title: title.toString(), id: {[Op.ne]: [projectId]}}});
           if(project){
               throw ApiError.internal(\`Project with title '\${title}' already exist\`);
           }
       }
       await Project.update({title, description}, {where: {id: projectId}});
       const formedProject = await formProject(projectId);
       return formedProject;
   }

   async deleteProject(projectId){
       const project = await Project.findOne({where: {id: projectId}});
       if(!project){
           throw ApiError.badRequest(\`Project with id '\${projectId}' not found\`);
       }
       const deletedProjectId = await Project.destroy({where: {id: projectId}});
       return !!deletedProjectId;
   }
}

module.exports = new ProjectService();
`}
      />

      <DevTutorialTitle>
        Functions for Transforming Entity View
      </DevTutorialTitle>

      <DevTutorialText>
        Most often, for the client app, it is necessary to{' '}
        <b>transform the view of an Entity</b> before returning it in the
        response. The objects returned by ORM might contain unnecessary data,
        such as <b>createdAt</b> and <b>updatedAt</b> fields, which the client
        app may not need. On the other hand, the client app may require
        additional data, such as the sum of fields, which we calculate in the
        code and do not store in the database. But most often, this is a
        combination of several database queries and merging them for the
        response.
      </DevTutorialText>

      <DevTutorialText>
        Here is an example of two functions that transform the project entity
        before returning it to the client:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`async function formProject(id){
   const project = await Project.findOne({attributes: {exclude: ['createdAt', 'updatedAt']}, where: {id}});
   let formedProject = {...project.dataValues};
   const tasksCount = await Task.count({where: {projectId: id}});
   const usersInProject = await ProjectUser.findAll({where: {projectId: id}});
   const userIds = usersInProject.map(user => user.dataValues.userId);
   const users = await User.findAll({attributes: {exclude: ['password', 'createdAt', 'updatedAt']}, where: {id: [...userIds]}});
   return {
       ...formedProject,
       tasksCount,
       users,
   }
}

async function formFullProject(id){
   const project = await Project.findOne({attributes: {exclude: ['createdAt', 'updatedAt']}, where: {id}});
   let formedProject = {...project.dataValues};
   const tasksCount = await Task.count({where: {projectId: id}});
   const usersInProject = await ProjectUser.findAll({where: {projectId: id}});
   const userIds = usersInProject.map(user => user.dataValues.userId);
   const users = await User.findAll({attributes: {exclude: ['password', 'createdAt', 'updatedAt']}, where: {id: [...userIds]}});
   const tasksInProject = await Task.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}, where: {projectId: id}});

   let tasks = [];
   for(let task of tasksInProject){
       const status = await Status.findOne({attributes: {exclude: ['createdAt', 'updatedAt']}, where: {id: task.statusId}});
       const files = await File.findAll({attributes: {exclude: ['createdAt', 'updatedAt', 'path', 'commentId', 'taskId']}, where: {taskId: task.id}});
       const type = await Type.findOne({attributes: {exclude: ['createdAt', 'updatedAt']}, where: {id: task.typeId}});
       const user = await User.findOne({attributes: {exclude: ['createdAt', 'updatedAt', 'password']}, where: {id: task.userId}})
       let formedTask = {...task.dataValues}
       delete formedTask.statusId;
       delete formedTask.typeId;
       delete formedTask.userId;
       delete formedTask.projectId;
       tasks.push({
           ...formedTask,
           status,
           type,
           user,
           files,
       })
   }

   return {
       ...formedProject,
       tasksCount,
       users,
       tasks
   }
}
`}
      />

      <DevTutorialText>
        These functions perform transformations of the project entity data,
        omitting unnecessary fields (such as <b>createdAt</b> and{' '}
        <b>updatedAt</b>) and merging additional data (such as task count,
        associated users, statuses, types, and files) into the response. It
        demonstrates how to carefully manage what data should be presented to
        the client app and what can be computed dynamically.
      </DevTutorialText>

      <DevTutorialTitle>View Layer. Endpoint Design</DevTutorialTitle>

      <DevTutorialText>
        Based on the technical specifications or more often the requirements
        from the client app, we need to design a list of <b>endpoints</b> that
        the client apps will interact with. When designing endpoints, it is
        important to consider both the <b>URL endpoint</b> and the{' '}
        <b>HTTP method</b>.
      </DevTutorialText>

      <DevTutorialText>
        In other words, multiple endpoints with the same URL can exist, but they
        may have different methods. The commonly used methods are <b>GET</b>,{' '}
        <b>POST</b>, <b>PUT</b>, <b>PATCH</b>, and <b>DELETE</b>.
      </DevTutorialText>

      <DevTutorialText>
        Here is an example of how you can structure your routes:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`// routes/index.js

router.use('/projects', projectRouter);
`}
      />

      <DevTutorialCodeBlock
        code={`// routes/projectRouter.js

const router = new Router();

router.get('/');  // Retrieve the list of projects
router.post('/'); // Create a new project
`}
      />

      <DevTutorialText>
        The <b>URL endpoint</b> should be logical. If the endpoint is for
        projects, the URL should include the word &quot;projects&quot;.
      </DevTutorialText>

      <DevTutorialText>
        The methods should also align with expectations:
      </DevTutorialText>

      <ul>
        <li>
          <b>GET</b> - Retrieve a list of projects or a single project;
        </li>
        <li>
          <b>POST</b> - Create a new project;
        </li>
        <li>
          <b>PUT</b> - Update an existing project (completely);
        </li>
        <li>
          <b>PATCH</b> - Partially update an existing project;
        </li>
        <li>
          <b>DELETE</b> - Delete an existing project.
        </li>
      </ul>

      <DevTutorialText>
        Now, why not just use <b>PUT</b> or <b>PATCH</b> exclusively? They seem
        to do the same thing, right? Not quite. The <b>PUT</b> method is used
        for a complete replacement of the resource. If only partial data is
        provided in the request, the rest will be removed or replaced with
        default values. Meanwhile, <b>PATCH</b> is used to update only specific
        fields of the resource, that is, only the ones provided. Many projects
        may not use both methods; often, only <b>PUT</b> is used, but for
        security reasons, it might be treated like <b>PATCH</b>, or several
        validations could be added to ensure all fields to update the resource
        are provided.
      </DevTutorialText>

      <DevTutorialTitle>
        Middleware: Authentication and Authorization
      </DevTutorialTitle>

      <DevTutorialText>
        Almost all endpoints that return data are protected. They include
        authentication, and some additionally include authorization.
        Authentication checks the user&apos;s identity, while authorization
        determines permissions for access to certain resources. When a user
        wants to access data, they must first authenticate to confirm their
        identity, and then authorize to determine whether their access level
        allows them to retrieve this data.
      </DevTutorialText>

      <DevTutorialText>
        For example, in the system, there are two roles: <b>MANAGER</b> and{' '}
        <b>DEVELOPER</b>. The client app requests a list of projects to display
        them to the user and gives the possibility to create a new project.
      </DevTutorialText>

      <DevTutorialText>
        <b>MANAGER</b> - can get all projects and create a new one.
        <b>DEVELOPER</b> - can get all projects but cannot create new ones.
      </DevTutorialText>

      <DevTutorialText>
        In the <b>Authorization header</b>, the client app sends an access
        token. After decoding the access token, the backend will know which user
        is making the request.
      </DevTutorialText>

      <DevTutorialText>
        If the access token is invalid, authentication fails, and the response
        status is <b>401</b>. This means that someone unauthorized is trying to
        access the project list, and we should not allow this.
      </DevTutorialText>

      <DevTutorialText>
        If the access token is valid, the next step is authorization.{' '}
        <b>MANAGER</b> can create projects, but <b>DEVELOPER</b> cannot. If a{' '}
        <b>DEVELOPER</b> tries to do this, we return an error with a <b>403</b>{' '}
        response status.
      </DevTutorialText>

      <DevTutorialText>
        Here is how the authentication and authorization middleware is
        structured:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const ApiError = require("../errors/ApiError");
const jwt = require('jsonwebtoken');

// authMiddleware.js
module.exports = function (req, res, next){
   if(req.method === 'OPTIONS'){
       next();
   }
   try {
       const token = req.headers.authorization.split(' ')[1];
       if(!token){
           return next(ApiError.unauthorized());
       }
       const decoded = jwt.verify(token, process.env.SECRET_KEY);
       req.user = decoded;
       next();
   } catch (e) {
       next(ApiError.unauthorized())
   }
}
`}
      />

      <DevTutorialText>
        The <b>authMiddleware</b> checks the validity of the token and
        authenticates the user.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const ApiError = require("../errors/ApiError");
const jwt = require('jsonwebtoken');

// checkRoleMiddleware.js
module.exports = function(role){
   return function (req, res, next){
       if(req.method === 'OPTIONS'){
           next();
       }
       try {
           const token = req.headers.authorization.split(' ')[1];
           if(!token){
               return next(ApiError.unauthorized());
           }
           const decoded = jwt.verify(token, process.env.SECRET_KEY);
           if(decoded.role !== role){
               return next(ApiError.forbidden(\`the \${decoded.role} role does not have permissions to this resource\`));
           }
           req.user = decoded;
           next();
       } catch (e) {
           next(ApiError.unauthorized())
       }
   };
};
`}
      />

      <DevTutorialText>
        The <b>checkRoleMiddleware</b> checks whether the user has the
        appropriate role to access a specific resource. If the user&apos;s role
        does not match the required role, the middleware returns a{' '}
        <b>403 Forbidden</b> error.
      </DevTutorialText>

      <DevTutorialText>
        To use these middlewares for specific endpoints, you would structure the
        route handling like this:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const router = new Router();

router.get('/', authMiddleware);  // Authentication required for retrieving projects

router.post('/', checkRoleMiddleware('ADMIN'));  // Only users with the 'ADMIN' role can create new projects
`}
      />

      <DevTutorialText>
        In this example, the <b>GET</b> request requires only authentication (to
        retrieve projects), while the <b>POST</b> request requires both
        authentication and authorization for the &apos;ADMIN&apos; role (to
        create a new project).
      </DevTutorialText>

      <DevTutorialTitle>Middleware: Validation</DevTutorialTitle>

      <DevTutorialText>
        To secure your application, it&apos;s essential to validate the
        parameters coming to your endpoints from the client app.
      </DevTutorialText>

      <DevTutorialText>
        For example, to validate the title of a project, we can use{' '}
        <b>express-validator</b> and create a simple validation middleware. We
        will ensure that the &quot;title&quot; field is not empty.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const {check} = require('express-validator');

// createProjectValidators.js
const createProjectValidators = () => {
   return [
       check('title').notEmpty().withMessage('Title is required'),
   ]; 
};

module.exports = { createProjectValidators };
`}
      />

      <DevTutorialText>
        In the code above, the <b>createProjectValidators</b> function returns
        an array of validation checks. The <b>check(&apos;title&apos;)</b>{' '}
        ensures that the &apos;title&apos; parameter is not empty. If the title
        is missing or empty, the middleware will trigger a validation error.
      </DevTutorialText>

      <DevTutorialText>
        For an endpoint that retrieves a specific project, we can create a
        validator to check if the <b>projectId</b> is a number (instead of
        letters, for example).
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const {check} = require('express-validator');

// projectId validation
const validateProjectId = () => {
   return [
       check('projectId').isNumeric().withMessage('Project ID must be a number'),
   ];
};

module.exports = { validateProjectId };
`}
      />

      <DevTutorialText>
        Here, we use the <b>check(&apos;projectId&apos;)</b> to ensure that the{' '}
        <b>projectId</b> parameter is numeric. This will help prevent invalid
        IDs from being passed to the backend.
      </DevTutorialText>

      <DevTutorialText>
        Next, let&apos;s apply these validation middlewares to the relevant
        routes:
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const router = new Router();
const { createProjectValidators } = require("./validators/createProjectValidators");
const { validateProjectId } = require("./validators/validateProjectId");

router.get('/:projectId', validateProjectId(), authMiddleware);

router.post('/', checkRoleMiddleware('ADMIN'), ...createProjectValidators());
`}
      />

      <DevTutorialText>
        In this example: - The <b>GET</b> request to retrieve a project
        validates that the <b>projectId</b> is numeric and checks if the user is
        authenticated. - The <b>POST</b> request for creating a project checks
        that the user is an <b>ADMIN</b> and ensures that the title of the
        project is not empty.
      </DevTutorialText>

      <DevTutorialText>
        To handle the validation errors, you can use the{' '}
        <b>express-validator</b> &apos;validationResult&apos; function to
        collect and return any validation errors that occurred.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const { validationResult } = require('express-validator');

// Example of error handling in the route handler
router.post('/', checkRoleMiddleware('ADMIN'), ...createProjectValidators(), (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
   }
   next();
});
`}
      />

      <DevTutorialText>
        In the <b>POST</b> route, we use the <b>validationResult(req)</b> to
        check for validation errors. If there are any errors, we return a{' '}
        <b>400 Bad Request</b> status with the validation error details.
      </DevTutorialText>

      <DevTutorialText>
        This approach ensures that only valid data reaches your backend, and it
        provides helpful error messages for the client app to act upon.
      </DevTutorialText>

      <DevTutorialTitle>Using Middlewares</DevTutorialTitle>

      <DevTutorialText>
        In the final setup, we will apply middlewares to secure and validate the
        requests to our endpoints. The idea is to ensure that only authenticated
        and authorized users can access certain endpoints, and that the data
        coming to the backend is valid.
      </DevTutorialText>

      <DevTutorialText>
        Here is how we can use the middlewares for retrieving and creating
        projects.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const router = new Router();

// Get projects - requires authentication
router.get('/', authMiddleware, (req, res) => {
    // Logic to retrieve projects
    res.status(200).json({ message: 'List of projects' });
});

// Create project - requires authentication, authorization, and input validation
router.post('/', checkRoleMiddleware('ADMIN'), ...createProjectValidators(), (req, res) => {
    const { title } = req.body;
    // Logic to create a new project
    res.status(201).json({ message: 'Project created successfully', title });
});
`}
      />

      <DevTutorialText>
        In this example: - The <b>GET</b> request for retrieving projects
        requires the user to be authenticated through the <b>authMiddleware</b>.
        This ensures that only logged-in users can retrieve the projects.
      </DevTutorialText>

      <DevTutorialText>
        - The <b>POST</b> request for creating a project requires the user to be
        both authenticated and authorized. The{' '}
        <b>checkRoleMiddleware(&apos;ADMIN&apos;)</b> ensures that only users
        with the <b>ADMIN</b> role can create a project. Additionally, the{' '}
        <b>createProjectValidators</b> ensure that the project&apos;s title is
        provided and is not empty.
      </DevTutorialText>

      <DevTutorialText>
        The middlewares work in a sequence: 1. <b>authMiddleware</b> checks if
        the user is authenticated. 2.{' '}
        <b>checkRoleMiddleware(&apos;ADMIN&apos;)</b> checks if the user has the
        required role (in this case, &apos;ADMIN&apos;). 3.{' '}
        <b>createProjectValidators</b> validates the input data (like ensuring
        the project title is provided). If any of these checks fail, the request
        will be blocked, and an appropriate error message will be sent back to
        the client.
      </DevTutorialText>

      <DevTutorialText>
        By chaining middlewares in this way, we ensure that our routes are
        secure and that only valid requests are processed.
      </DevTutorialText>

      <DevTutorialTitle>
        Controller Layer: Connecting View and Model
      </DevTutorialTitle>

      <DevTutorialText>
        The Controller layer acts as an intermediary between the View
        (endpoints) and the Model (database operations). The Controller contains
        methods that handle requests, call the appropriate services, and send
        the response back to the client app.
      </DevTutorialText>

      <DevTutorialText>
        Here is an example of a <b>ProjectController</b> that interacts with the
        ProjectService (the Model layer).
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const ApiError = require('../errors/ApiError');
const ProjectService = require('../service/ProjectService');
const { validationResult } = require('express-validator');

class ProjectController {
   // Method to get all projects
   async getAllProjects(req, res, next){
       try{
           const token = req.headers.authorization.split(' ')[1];
           const projects = await ProjectService.getAllProjects(token); // Interacts with Model
           return res.json({projects}); // Sends response back to client
       } catch (e) {
           next(e); // Passes errors to error handler
       }
   }

   // Method to create a project
   async createProject(req, res, next){
       try{
           const errors = validationResult(req);
           if(!errors.isEmpty()){
               return next(ApiError.badRequest("Invalid data", errors)); // Handles validation errors
           }
           const {title, description} = req.body;
           const project = await ProjectService.createProject(title, description); // Interacts with Model
           return res.json({project}); // Sends response back to client
       } catch (e) {
           next(e); // Passes errors to error handler
       }
   }
}

// Exporting the instance of ProjectController
module.exports = new ProjectController();
`}
      />

      <DevTutorialText>
        In the <b>ProjectController</b> class: - The <b>getAllProjects</b>{' '}
        method is responsible for handling the GET request to retrieve all
        projects. It interacts with the <b>ProjectService</b> (which handles
        database operations) and returns a list of projects to the client. - The{' '}
        <b>createProject</b> method handles the POST request to create a new
        project. It validates the incoming data and interacts with the{' '}
        <b>ProjectService</b> to create the project in the database, then
        returns the created project to the client.
      </DevTutorialText>

      <DevTutorialText>
        Next, we integrate the controller methods into the routing layer (View
        layer).
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`const router = new Router();

// Endpoint to get all projects
router.get('/',
   authMiddleware, // Middleware to authenticate user
   ProjectController.getAllProjects // Controller method to fetch projects
);

// Endpoint to create a new project
router.post('/',
   checkRoleMiddleware('ADMIN'), // Middleware to check if the user is an ADMIN
   ...createProjectValidators(), // Middleware to validate input
   ProjectController.createProject // Controller method to create project
);

module.exports = router;
`}
      />

      <DevTutorialText>
        In this routing setup: - The <b>GET /projects</b> endpoint uses{' '}
        <b>authMiddleware</b> to authenticate the user and then calls the{' '}
        <b>getAllProjects</b> method of <b>ProjectController</b> to fetch the
        list of projects. - The <b>POST /projects</b> endpoint uses{' '}
        <b>checkRoleMiddleware(&apos;ADMIN&apos;)</b> to ensure that only ADMIN
        users can create projects, uses validation middlewares for input data,
        and calls the <b>createProject</b> method of <b>ProjectController</b> to
        create a new project.
      </DevTutorialText>

      <DevTutorialText>
        The <b>ProjectController</b> class acts as a bridge between the View and
        Model layers, processing requests, performing business logic, and
        returning appropriate responses to the client app.
      </DevTutorialText>

      <DevTutorialTitle>
        Documentation for Client Apps: Using Postman
      </DevTutorialTitle>

      <DevTutorialText>
        For the frontend developers, mobile developers, and QA teams, it is
        essential to provide clear documentation on how to interact with your
        API. This can be done in various ways, but one of the most convenient
        methods is using a <b>Postman collection</b>.
      </DevTutorialText>

      <DevTutorialText>
        The documentation should include the following details for each
        endpoint:
      </DevTutorialText>

      <ul>
        <li>
          <b>1. Endpoint Description:</b> A brief explanation of what the
          endpoint does.
        </li>
        <li>
          <b>2. URL with Query Parameters:</b> Provide the full URL along with
          any query parameters that might be used. For example,{' '}
          <code>/projects?status=active</code>.
        </li>
        <li>
          <b>3. Headers:</b> Describe the headers required by the client app,
          especially the <b>Authorization header</b>.
        </li>
        <li>
          <b>4. Request Body:</b> Provide details on the structure of the
          request body, what data should be sent.
        </li>
        <li>
          <b>5. Example Response:</b> Show the expected response in JSON or
          another format.
        </li>
        <li>
          <b>6. Optional - Validation Rules:</b> If there are any rules on input
          validation, describe them here.
        </li>
        <li>
          <b>7. Optional - Error List:</b> Provide the list of potential errors
          the endpoint might return and their meanings.
        </li>
      </ul>

      <DevTutorialText>
        A good practice is to provide the documentation for each endpoint in a
        well-structured Postman collection. This helps ensure that developers
        and QA teams can test and interact with the API before writing the
        actual code.
      </DevTutorialText>

      <DevTutorialText>
        Here is an example of how you would document a <b>GET /projects</b>{' '}
        endpoint in Postman.
      </DevTutorialText>

      <DevTutorialCodeBlock
        code={`
{
  "info": {
    "name": "Project API",
    "description": "API documentation for the Project management application."
  },
  "item": [
    {
      "name": "Get All Projects",
      "request": {
        "url": "https://api.example.com/projects",
        "method": "GET",
        "header": [
          {
            "key": "Authorization",
            "value": "Bearer &lt;your-token-here&gt;",
            "description": "Authorization header (bearer token required)"
          }
        ]
      },
      "response": [
        {
          "status": "200 OK",
          "body": {
            "projects": [
              {
                "id": "1",
                "title": "Project One",
                "description": "Description of Project One"
              },
              {
                "id": "2",
                "title": "Project Two",
                "description": "Description of Project Two"
              }
            ]
          }
        }
      ]
    }
  ]
}
`}
      />

      <DevTutorialText>
        In the above example: - The <b>GET /projects</b> endpoint retrieves a
        list of projects. - The <b>Authorization header</b> is required, and you
        should pass a bearer token for authentication. - The response returns a
        JSON object with a list of projects, each containing an <b>id</b>,{' '}
        <b>title</b>, and <b>description</b>.
      </DevTutorialText>

      <DevTutorialText>
        You can also include optional details, such as: - Validation rules for
        the request body (for POST, PUT requests). - List of possible error
        codes (e.g., 400 for bad request, 401 for unauthorized access, etc.) and
        their descriptions.
      </DevTutorialText>

      <DevTutorialText>
        Now, let&apos;s talk about why using Postman is beneficial.
      </DevTutorialText>

      <DevTutorialText>
        &quot;Why Use Postman?&quot; <br />- &quot;Convenience&quot;: Postman
        allows you to test and interact with your API easily. Developers and QA
        can verify endpoints without writing any code first.
        <br /> - &quot;Collaboration&quot;: Sharing Postman collections enables
        seamless collaboration across teams. Frontend developers, backend
        developers, and QA can work with the same set of requests and responses.
        <br />- &quot;Ease of Use&quot;: Postman is intuitive, and developers
        can quickly understand how to use the API through the provided
        collection. It reduces the number of questions like &quot;How do I send
        a request to this endpoint?&quot;. <br />- &quot;Documentation&quot;:
        Postman collections can also serve as live documentation for the API,
        keeping it up-to-date and easy to use.
      </DevTutorialText>

      <DevTutorialText>
        Optional: Text-based Documentation Some teams or clients may prefer
        text-based documentation, especially in cases where compliance or
        architecture documentation is required. Before finalizing your
        documentation style, it&apos;s a good idea to check with your team about
        their preferences.
      </DevTutorialText>

      <DevTutorialText>
        By providing clear documentation, you ensure that all stakeholders,
        including frontend developers, QA, and even managers, can quickly
        understand and interact with your API.
      </DevTutorialText>

      <DevTutorialText>
        It will be a valuable resource for everyone involved in the development
        and testing of your app.
      </DevTutorialText>
    </div>
  );
};

export default CommonDevTutorialExpress;
