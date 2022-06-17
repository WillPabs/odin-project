import './styles/tab.css';
import { addHomepage } from "./homepage";
import { addMenu } from "./menu";
import { addContact } from './contact';

const createTab = (text) => {
    const container = document.createElement('div');
    container.classList.add('tab-container');
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.textContent = text;
    container.appendChild(tab);
    return container;
}

const tabs = [
    {
        'name': 'Home',
        'func': addHomepage
    }, 
    { 
        'name': 'Menu',
        'func': addMenu
    },
    { 
        'name': 'Contact',
        'func': addContact
    }
];

const home = createTab('Home');
const menu = createTab('Menu');
const contact = createTab('Contact');

const container = document.createElement('div');
container.classList.add('tabs');

container.appendChild(home);
container.appendChild(menu);
container.appendChild(contact);

const addTab = () => {
    return container;
}

export { 
    tabs, 
    addTab 
};