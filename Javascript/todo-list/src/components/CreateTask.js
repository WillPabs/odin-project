import { Task } from "../task";
import { makeFirstLetterCapital } from "../utils";

export const CreateTask = (project) => {
    const container = document.createElement('div');
    container.id = 'create-task';

    const form = document.createElement('form');
    
    const heading = document.createElement('h2');
    heading.textContent = 'Create Task';
    
    const title = createField('title', 'text');
    const description = createField('description', 'text');
    const dueDate = createField('due-date', 'date');
    const priority = createField('priority', 'text');
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
    label.setAttribute('for', fieldName);
    label.textContent = `${makeFirstLetterCapital(fieldName)} : `;

    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    if (input.type === 'button') input.value = makeFirstLetterCapital(fieldName);
    input.setAttribute('id', fieldName);
    input.setAttribute('name', fieldName);

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
    return Task(...taskArray);
}