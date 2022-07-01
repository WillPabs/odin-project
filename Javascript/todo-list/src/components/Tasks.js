import { showCreate } from '../utils';
import { CreateTask } from './CreateTask';

export const Tasks = (project) => {
    const container = document.createElement('div');
    container.classList.add('project');
    container.id = project.getTitle();

    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.getTitle();

    const createTask = document.createElement('a');
    createTask.classList.add('create-task-link');
    createTask.href = '#';
    createTask.addEventListener('click', () => {
        showCreate(container, document.querySelector('#create-task'), CreateTask);
    })
    createTask.textContent = 'Create Task';

    const showFinshed = document.createElement('a');
    showFinshed.classList.add('show-finished-link');
    showFinshed.href = '#';
    showFinshed.textContent = 'Show Finished';

    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(createTask);
    projectHeader.appendChild(showFinshed);


    const projectTasks = document.createElement('div');
    projectTasks.classList.add('project-tasks');

    const highPriorityTasks = createTaskList(project.getTasksByPriority('high'));
    const mediumPriorityTasks = createTaskList(project.getTasksByPriority('medium'));
    const lowPriorityTasks = createTaskList(project.getTasksByPriority('low'));

    projectTasks.appendChild(highPriorityTasks);
    projectTasks.appendChild(mediumPriorityTasks);
    projectTasks.appendChild(lowPriorityTasks);

    container.appendChild(projectHeader);
    container.appendChild(projectTasks);
    return container;
};

const createTaskList = (tasks) => {
    const container = document.createElement('div');
    container.classList.add('tasks-list');

    const priority = document.createElement('div');
    priority.classList.add('priority');

    const priorityColor = document.createElement('img');
    priorityColor.src = '#';

    const priorityType = document.createElement('div');
    priorityType.textContent = tasks.priorty;

    priority.appendChild(priorityColor);
    priority.appendChild(priorityType);

    const ul = document.createElement('ul');
    ul.classList.add('tasks');

    tasks.forEach(task => {
        const li = createListItem(task);
        ul.appendChild(li);
    });

    container.appendChild(priority);
    container.appendChild(ul);
    return container;
};

const createListItem = (task) => {
    const li = document.createElement('li');
    li.classList.add('task');

    const title = document.createElement('div');
    title.classList.add('task-title');
    title.textContent = task.title;

    const dueDate = document.createElement('div');
    dueDate.classList.add('task-due-date');
    dueDate.textContent = task.dueDate;

    li.appendChild(title);
    li.appendChild(dueDate);
    return li;
};
