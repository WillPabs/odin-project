export const TaskNode = (task) => {
    const taskNode = document.createElement('div');
    taskNode.classList.add('task');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('task-title');
    titleDiv.textContent = task.title;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('task-description');
    const label = document.createElement('label');
    label.classList.add('description-label');
    label.textContent = 'Description : ';
    const descriptionText = document.createElement('div');
    descriptionText.classList.add('description-text');
    descriptionText.textContent = task.description; 
    descriptionDiv.appendChild(label);
    descriptionDiv.appendChild(descriptionText);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('task-due-date')
    dueDateDiv.textContent = task.dueDate;

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('task-priority');
    priorityDiv.textContent = task.priority;

    const notesDiv = document.createElement('div');
    notesDiv.classList.add('task-notes');
    notesDiv.textContent = task.notes;

    taskNode.appendChild(titleDiv);
    taskNode.appendChild(descriptionDiv);
    taskNode.appendChild(dueDateDiv);
    taskNode.appendChild(priorityDiv);
    taskNode.appendChild(notesDiv);
    return taskNode;
};