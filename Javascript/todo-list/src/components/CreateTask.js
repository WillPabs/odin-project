export const CreateTask = () => {
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
    const submit = createField('submit', 'submit');

    form.appendChild(heading);
    form.appendChild(title);
    form.appendChild(description);
    form.appendChild(dueDate);
    form.appendChild(priority);
    form.appendChild(notes);
    form.appendChild(submit);

    container.appendChild(form);
    return container;
};

const createField = (fieldName, inputType) => {
    const field = document.createElement('div');
    field.classList.add('field');

    const label = document.createElement('label');
    label.setAttribute('for', fieldName);
    const firstLetterCapital = fieldName[0].toUpperCase() + fieldName.substring(1);
    label.textContent = `${firstLetterCapital} : `;

    const input = document.createElement('input');
    input.setAttribute('type', inputType);
    input.setAttribute('id', fieldName);
    input.setAttribute('name', fieldName);

    field.appendChild(label);
    field.appendChild(input);
    return field;
};