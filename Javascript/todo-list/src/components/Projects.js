import { showCreate } from '../utils';
import { CreateProject } from './CreateProject';
import { Tasks } from './Tasks';
import { switchContent } from './Content';

export const Projects = (user) => {
    const container = document.createElement('div');
    container.classList.add('content-container');

    const projectsHeader = createProjectsHeader(user);

    const projects = createProjectsList(user.projects);
    
    container.appendChild(projectsHeader);
    container.appendChild(projects);
    return container;
};

const createProjectsHeader = (user) => {
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('projects-header');

    const heading = document.createElement('div');
    heading.classList.add('projects-heading');
    heading.textContent = `${user.name[0].toUpperCase() + user.name.substring(1)}'s Projects`;

    const projectOptions = document.createElement('div');
    projectOptions.classList.add('project-options-container');

    const createProject = document.createElement('a');
    createProject.classList.add('create-project-link');
    createProject.classList.add('project-option');
    createProject.href = '#';
    createProject.addEventListener('click', () => {
        showCreate(projectHeader, document.querySelector('#create-project'), CreateProject.bind(null, user));
    });
    createProject.textContent = 'Add Project';

    const showFinished = document.createElement('a');
    showFinished.classList.add('show-finished-link');
    createProject.classList.add('project-option');
    showFinished.href = '#';
    showFinished.textContent = 'Show Finished';

    projectOptions.appendChild(createProject);
    projectOptions.appendChild(showFinished);

    projectHeader.appendChild(heading);
    projectHeader.appendChild(projectOptions);
    return projectHeader;
};


const createProjectsList = (projects) => {
    const container = document.createElement('div');
    container.classList.add('projects-list-container');

    projects.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
        
        const heading = document.createElement('div');
        heading.classList.add('project-heading');
        heading.textContent = project.title;
        heading.addEventListener('click', () => {
            switchContent(Tasks(project));
        });
        
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('project-tasks');
        const size = 4;
        const tasks = project.getTaskList().slice(0, size);
        tasks.forEach(task => {
            tasksContainer.appendChild(createProjectTask(task));
        });

        projectContainer.appendChild(heading);
        projectContainer.appendChild(tasksContainer);
        container.appendChild(projectContainer);
    });
    return container;
};

const createProjectTask = (task) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    const taskFinishToggle = document.createElement('input');
    taskFinishToggle.classList.add('task-finished');
    taskFinishToggle.type = 'checkbox';
    taskFinishToggle.checked = task.finished;

    // TODO
    // fix bug that toggles checkbox for all projects
    taskFinishToggle.addEventListener('click', () => {
        task.finished = taskFinishToggle.checked;
    })

    const taskTitle = document.createElement('div');
    taskTitle.textContent = task.title;

    taskContainer.appendChild(taskFinishToggle);
    taskContainer.appendChild(taskTitle);
    return taskContainer;
}