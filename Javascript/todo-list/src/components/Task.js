import { PRIORITY } from "../priority";

export const TaskNode = (task) => {
    const taskNode = document.createElement('div');
    const taskHeader = document.createElement('div');
    const titleDiv = document.createElement('div');
    const priorityDiv = document.createElement('div');
    const priorityColor = document.createElement('img');
    const level = PRIORITY.find(p => p.type.toLowerCase() === task.priority);
    const priorityType = document.createElement('div');
    const dueDateDiv = document.createElement('div');
    const descriptionDiv = document.createElement('div');
    const label = document.createElement('label');
    const descriptionText = document.createElement('div');
    const notesDiv = document.createElement('div');

    taskNode.classList.add('task');
    taskHeader.classList.add('task-header');
    titleDiv.classList.add('task-title');
    priorityDiv.classList.add('task-priority');
    priorityColor.classList.add('priority-color');
    priorityType.classList.add('priority-text');
    dueDateDiv.classList.add('task-due-date')
    descriptionDiv.classList.add('task-description');
    label.classList.add('description-label');
    descriptionText.classList.add('description-text');
    notesDiv.classList.add('task-notes');

    titleDiv.textContent = task.title;
    priorityColor.src = level.img;
    priorityType.textContent = task.priority.toUpperCase();
    dueDateDiv.textContent = task.dueDate;
    label.textContent = 'Description : ';
    descriptionText.textContent = task.description; 
    notesDiv.textContent = task.notes;

    taskNode.addEventListener('click', e => {
        const targeted = e.target;
        const className = targeted.classList.value;
        if (editableClasses.find(name => name[0] === className)) {
            editNode(targeted, editableClasses, task);
        }
    });
    
    
    priorityDiv.appendChild(priorityColor);
    priorityDiv.appendChild(priorityType);
    taskHeader.appendChild(titleDiv);
    taskHeader.appendChild(priorityDiv);
    taskHeader.appendChild(dueDateDiv);
    descriptionDiv.appendChild(label);
    descriptionDiv.appendChild(descriptionText);
    taskNode.appendChild(taskHeader);
    taskNode.appendChild(descriptionDiv);
    taskNode.appendChild(notesDiv);

    return taskNode;
};

const editNode = (targeted, editableClasses, obj) => {
    targeted.style.display = 'none';
    let text = targeted.innerHTML;
    const className = targeted.classList.value;

    const input = document.createElement('input');
    input.type = 'text';
    input.value = text;
    console.log(targeted.parentNode)
    targeted.parentNode.insertBefore(input, targeted);
    input.focus();
    input.onblur = () => {
        // removes input element
        targeted.parentNode.removeChild(input);

        // assign value of input to inner html of targeted element
        targeted.innerHTML = input.value == '' ? "&nbsp;" : input.value;

        // match className with targeted element's className
        const found = editableClasses.find(name => name[0] === className);

        // call set method on obj with input value as an arg
        obj[found[1]](input.value);

        // display targeted element
        targeted.style.display = '';
    }
}

const editableClasses = [
    ['task-title','setTitle'],
    ['priority-text', 'setPriority'],
    ['task-due-date', 'setDueDate'],
    ['description-text', 'setDescription'],
    ['task-notes', 'setNotes']
]