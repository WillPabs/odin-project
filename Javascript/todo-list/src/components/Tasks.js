import { showCreate } from '../utils';
import { CreateTask } from './CreateTask';
import high from '../images/red_circle.png';
import medium from '../images/yellow_circle.png';
import low from '../images/blue_circle.png';
import { switchContent } from './Content';
import { TaskNode } from './Task';
import { makeFirstLetterCapital } from '../utils';

export const Tasks = (project) => {
    const container = document.createElement('div');
    container.classList.add('project');
    container.id = project.getTitle();

    const projectHeader = createProjectHeader(project);

    const projectTasks = document.createElement('div');
    projectTasks.classList.add('project-tasks');
    
    const highPriorityTasks = project.getTasksByPriority('high');
    const mediumPriorityTasks = project.getTasksByPriority('medium');
    const lowPriorityTasks = project.getTasksByPriority('low');

    const highPriorityTaskList = createTaskList(highPriorityTasks, high);
    const mediumPriorityTaskList = createTaskList(mediumPriorityTasks, medium);
    const lowPriorityTaskList = createTaskList(lowPriorityTasks, low);

    projectTasks.appendChild(highPriorityTaskList);
    projectTasks.appendChild(mediumPriorityTaskList);
    projectTasks.appendChild(lowPriorityTaskList);

    container.appendChild(projectHeader);
    container.appendChild(projectTasks);
    return container;
};

const createProjectHeader = (project) => {
    const projectHeader = document.createElement('div');
    projectHeader.classList.add('project-header');

    const projectTitle = document.createElement('div');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.getTitle();

    const projectOptions = document.createElement('div');
    projectOptions.classList.add('project-options-container');

    const createTask = document.createElement('a');
    createTask.classList.add('create-task-link');
    createTask.href = '#';
    createTask.addEventListener('click', () => {
        showCreate(projectHeader, document.querySelector('#create-task'), CreateTask.bind(null, project));
    });
    createTask.textContent = 'Create Task';

    const showFinshed = document.createElement('a');
    showFinshed.classList.add('show-finished-link');
    showFinshed.href = '#';
    showFinshed.textContent = 'Show Finished';

    projectOptions.appendChild(createTask);
    projectOptions.appendChild(showFinshed);

    projectHeader.appendChild(projectTitle);
    projectHeader.appendChild(projectOptions);
    return projectHeader;
};

const createTaskList = (tasks, level) => {
    const container = document.createElement('div');
    container.classList.add('tasks-list');

    const priority = document.createElement('div');
    priority.classList.add('priority');

    const priorityColor = document.createElement('img');
    priorityColor.classList.add('priority-color');
    priorityColor.src = level;
    
    if (tasks.length > 0) {
        priority.appendChild(priorityColor);
        const priorityType = document.createElement('div');
        priorityType.classList.add('priority-text');
        priorityType.textContent = makeFirstLetterCapital(tasks[0].priority);
        priority.appendChild(priorityType);
    };

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
    li.classList.add('project-task');

    const taskFinishToggle = document.createElement('input');
    taskFinishToggle.classList.add('task-finished');
    taskFinishToggle.type = 'checkbox';
    taskFinishToggle.checked = task.finished;

    taskFinishToggle.addEventListener('click', () => {
        task.finished = taskFinishToggle.checked;
    });

    const title = document.createElement('div');
    title.classList.add('task-title');
    title.textContent = task.title;
    title.addEventListener('click', () => {
        switchContent(TaskNode(task));
    });

    const dueDate = document.createElement('div');
    dueDate.classList.add('task-due-date');
    dueDate.textContent = task.dueDate;

    li.appendChild(taskFinishToggle);
    li.appendChild(title);
    li.appendChild(dueDate);
    return li;
};
