import { showCreate } from '../utils';
import { CreateProject } from './CreateProject';
import { Tasks } from './Tasks';
import { switchContent } from './Content';

export const Projects = (user) => {
    const container = document.createElement('div');
    container.classList.add('content-container');

    const projectsHeader = document.createElement('div');
    projectsHeader.classList.add('projects-header');

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
        showCreate(container, document.querySelector('#create-project'), CreateProject);
    });
    createProject.textContent = 'Add Project';

    const showFinished = document.createElement('a');
    showFinished.classList.add('show-finished-link');
    createProject.classList.add('project-option');
    showFinished.href = '#';
    showFinished.textContent = 'Show Finished';

    projectOptions.appendChild(createProject);
    projectOptions.appendChild(showFinished);

    projectsHeader.appendChild(heading);
    projectsHeader.appendChild(projectOptions);

    const projects = createProjectsList(user.projects);
    
    container.appendChild(projectsHeader);
    container.appendChild(projects);
    return container;
};


const createProjectsList = (projects) => {
    const container = document.createElement('div');
    container.classList.add('projects-list-container');

    projects.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project');
        projectContainer.addEventListener('click', () => {
            switchContent(Tasks(project));
        });
        
        const heading = document.createElement('div');
        heading.classList.add('project-heading');
        heading.textContent = project.title;

        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('project-tasks');
        const size = 4;
        const tasks = project.getTaskList().slice(0, size);
        tasks.forEach(task => {
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task');
            taskContainer.textContent = task.title;
            tasksContainer.appendChild(taskContainer);
        });

        projectContainer.appendChild(heading);
        projectContainer.appendChild(tasksContainer);
        container.appendChild(projectContainer);
    });
    return container;
};