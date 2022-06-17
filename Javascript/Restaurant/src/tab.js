import './styles/tab.css';
import { addMenu } from './menu';
import { addHomepage } from './homepage';
import { addContact } from './contact';

const createTab = (text, callback) => {
    const container = document.createElement('div');
    container.classList.add('tab-container');
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.textContent = text;
    container.appendChild(tab);
    return container;
}

const home = createTab('Home', addHomepage);
const menu = createTab('Menu', addMenu);
const contact = createTab('Contact', addContact);

const container = document.createElement('div');
container.classList.add('tabs');

container.appendChild(home);
container.appendChild(menu);
container.appendChild(contact);

export const addTab = () => {
    return container;
}