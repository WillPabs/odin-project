export const Tasks = (project) => {
    const container = document.createElement('div');
    container.classList.add('project');
    container.id = project.getTitle();

    const projectHeading = document.createElement('div');
    projectHeading.classList.add('project-heading');
    projectHeading.textContent = project.getTitle();

    const createTask = document.createElement('a');
    createTask.classList.add('create-task-link');
    createTask.href = 'Create Task';
    createTask.textContent = 'Create Task';

    const showFinshed = document.createElement('a');
    showFinshed.classList.add('show-finished-link');
    showFinshed.href = 'Show Finished';
    showFinshed.textContent = 'Show Finished';

    const highPriorityTasks = createTaskList(project.getTasksByPriority('high'));
    const mediumPriorityTasks = createTaskList(project.getTasksByPriority('medium'));
    const lowPriorityTasks = createTaskList(project.getTasksByPriority('low'));

    container.appendChild(projectHeading);
    container.appendChild(createTask);
    container.appendChild(showFinshed);
    container.appendChild(highPriorityTasks);
    container.appendChild(mediumPriorityTasks);
    container.appendChild(lowPriorityTasks);
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