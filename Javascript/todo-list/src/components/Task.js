import { PRIORITY } from "../priority";

export const TaskNode = (task) => {
    const taskNode = document.createElement('div');
    taskNode.classList.add('task');

    const taskHeader = document.createElement('div');
    taskHeader.classList.add('task-header');
    
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('task-title');
    titleDiv.textContent = task.title;
    
    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('task-priority');
    const priorityColor = document.createElement('img');
    priorityColor.classList.add('priority-color');
    const level = PRIORITY.find(p => p.type.toLowerCase() === task.priority);
    priorityColor.src = level.img;
    const priorityType = document.createElement('div');
    priorityType.classList.add('priority-text');
    priorityType.textContent = task.priority.toUpperCase();
    priorityDiv.appendChild(priorityColor);
    priorityDiv.appendChild(priorityType);

    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('task-due-date')
    dueDateDiv.textContent = task.dueDate;

    taskHeader.appendChild(titleDiv);
    taskHeader.appendChild(priorityDiv);
    taskHeader.appendChild(dueDateDiv);

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

    const notesDiv = document.createElement('div');
    notesDiv.classList.add('task-notes');
    notesDiv.textContent = task.notes;

    taskNode.appendChild(taskHeader);
    taskNode.appendChild(descriptionDiv);
    taskNode.appendChild(notesDiv);
    return taskNode;
};