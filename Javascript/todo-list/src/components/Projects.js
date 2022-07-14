import { showCreate } from '../utils';
import { CreateProject } from './CreateProject';
import { Tasks } from './Tasks';
import { switchContent } from './Content';

export const Projects = (user) => {
    const container = document.createElement('div');
    container.classList.add('content-container');

    const projectsHeader = createProjectsHeader(user);

    const projects = createProjectsList(user.getInProgressProjects());
    
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
    projectOptions.classList.add('projects-options-container');

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
    showFinished.addEventListener('click', () => {
        const finishedProjects = user.getFinishedProjects();
        const projectsList = document.querySelector('.projects-list-container');
        projectsList.replaceWith(createProjectsList(finishedProjects));
    });
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

    if (projects.length <= 0) {
        container.textContent = 'No Projects Available';
        return container;
    }

    projects.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-overview');
        
        const header = document.createElement('div');
        header.classList.add('project-overview-header');

        const heading = document.createElement('div');
        heading.classList.add('project-heading');
        heading.textContent = project.title;
        heading.addEventListener('click', () => {
            switchContent(Tasks(project));
        });

        const projectOptionsContainer = document.createElement('div');
        projectOptionsContainer.classList.add('project-options-container');

        const finishButton = document.createElement('button');
        finishButton.classList.add('finish-project-button');
        project.finished === true ? finishButton.textContent = 'Activate' : finishButton.textContent = 'Finish';
        finishButton.addEventListener('click', () => {
            if (project.finished === true) {
                project.restoreProject();
            } else {
                project.finishProject();                
            }
            projectContainer.remove();
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-project-button');
        deleteButton.textContent = 'Delete';

        projectOptionsContainer.appendChild(finishButton);
        projectOptionsContainer.appendChild(deleteButton);

        header.appendChild(heading);
        header.appendChild(projectOptionsContainer);
        
        const tasksContainer = document.createElement('div');
        tasksContainer.classList.add('project-overview-tasks');
        const size = 4;
        const tasks = project.getTaskList().slice(0, size);
        tasks.forEach(task => {
            if (task.finished !== true) {
                tasksContainer.appendChild(createProjectTask(task));
            }
        });

        projectContainer.appendChild(header);
        projectContainer.appendChild(tasksContainer);
        container.appendChild(projectContainer);
    });
    return container;
};

const createProjectTask = (task) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('projects-task');

    const taskFinishToggle = document.createElement('input');
    taskFinishToggle.classList.add('task-finished');
    taskFinishToggle.type = 'checkbox';
    taskFinishToggle.checked = task.finished;

    taskFinishToggle.addEventListener('click', () => {
        task.finished = taskFinishToggle.checked;
    })

    const taskTitle = document.createElement('div');
    taskTitle.textContent = task.title;

    taskContainer.appendChild(taskFinishToggle);
    taskContainer.appendChild(taskTitle);
    return taskContainer;
}