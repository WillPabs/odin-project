import { addHomepage } from "./homepage";
import { addMenu } from "./menu";
import { addTab } from "./tab";
import { addContact } from './contact';
import './styles/style.css';

const content = document.querySelector('#content');
content.appendChild(addTab());
content.appendChild(addHomepage());

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

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelector('.container').remove();
        let obj = tabs.find(t => t.name === e.target.textContent);
        content.appendChild(obj.func());
    });
});

