import { Project } from '../project';

export const CreateProject = (user) => {
    const container = document.createElement('div');
    container.id = 'create-project';

    const form = document.createElement('form');
    const heading = document.createElement('h2');
    heading.textContent = 'Create Project';

    const title = createField('title', 'text');

    const button = document.createElement('button');
    button.textContent = 'Create';
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = document.querySelector('#title').value;
        const newProject = Project(projectName);
        user.addProject(newProject);
    });

    form.appendChild(heading);
    form.appendChild(title);
    form.appendChild(button);

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