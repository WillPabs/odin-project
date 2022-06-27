export const Task = (title, description, dueDate, priority, notes) => {
    
    const toggle = () => {
        console.log('toggled');
    }
    
    return {
        title,
        description,
        dueDate,
        priority,
        notes
    };
};

export const TaskNode = (title, description, dueDate, priority, notes) => {
    const taskNode = document.createElement('div');
    taskNode.classList.add('task');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('task-title');
    titleDiv.textContent = title;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('task-description');
    descriptionDiv.textContent = description;

    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('task-due-date')
    dueDateDiv.textContent = dueDate;

    const priorityDiv = document.createElement('div');
    priorityDiv.classList.add('task-priority');
    priorityDiv.textContent = priority;

    const notesDiv = document.createElement('div');
    notesDiv.classList.add('task-notes');
    notesDiv.textContent = notes;

    taskNode.appendChild(titleDiv);
    taskNode.appendChild(descriptionDiv);
    taskNode.appendChild(dueDateDiv);
    taskNode.appendChild(priorityDiv);
    taskNode.appendChild(notesDiv);
    return taskNode;
};