import { Task } from "../task";
import { makeFirstLetterCapital } from "../utils";
import { PRIORITY } from "../priority";

export const CreateTask = (project) => {
    const container = document.createElement('div');
    container.id = 'create-task';

    const form = document.createElement('form');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Create Task';
    
    const title = createField('title', 'text');
    const description = createField('description', 'text');
    const dueDate = createField('due-date', 'date');


    const priority = document.createElement('div');
    priority.classList.add('priority-selections');
    const priorityH = createField('priority-high', 'radio');
    const priorityM = createField('priority-medium', 'radio');
    const priorityL = createField('priority-low', 'radio');
    priority.appendChild(priorityH);
    priority.appendChild(priorityM);
    priority.appendChild(priorityL);

    const notes = createField('notes', 'text');
    const submit = createField('create', 'button');
    
    form.appendChild(heading);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(notes);
    form.appendChild(submit);
    
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const newTask = convertFormToTask(form);
        project.addTask(newTask);
    });
    
    container.appendChild(form);
    return container;
};

const createField = (fieldName, inputType) => {
    const field = document.createElement('div');
    field.classList.add('field');
    
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('id', fieldName);
    input.setAttribute('name', fieldName);
    if (input.type === 'radio') {
        const splitFieldName = fieldName.split('-');

        label.setAttribute('for', splitFieldName[1]);
        label.textContent = `${makeFirstLetterCapital(splitFieldName[1])}`;
            
        input.value = splitFieldName[1];
        input.setAttribute('id', splitFieldName[1]);
        input.setAttribute('name', splitFieldName[0]);
    } else if (input.type === 'button') {
        input.value = makeFirstLetterCapital(fieldName);
    } else {
        label.setAttribute('for', fieldName);
        label.textContent = `${makeFirstLetterCapital(fieldName)} : `;
    }   
    field.appendChild(label);
    field.appendChild(input);
    return field;
};

const convertFormToTask = (form) => {
    const formData = new FormData(form);
    const values = formData.values();
    const taskArray = [];
    for (const value of values) {
        taskArray.push(value);
    }
    console.log(taskArray)
    return Task(...taskArray);
}