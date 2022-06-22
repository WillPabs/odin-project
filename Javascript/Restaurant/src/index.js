import { tabs, addTab } from "./tab";
import { addHomepage } from "./homepage";
import { addFooter } from "./footer";
import './styles/style.css';

const body = document.body;

const nav = document.querySelector('nav');
nav.appendChild(addTab());

const footer = document.querySelector('footer');
footer.appendChild(addFooter());

const content = document.querySelector('#content');
content.appendChild(addHomepage());

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        if (document.querySelector('.container') === null) {
            let obj = tabs.find(t => t.name === e.target.textContent);
            content.appendChild(obj.func());
        } else {
            document.querySelector('.container').remove();
            let obj = tabs.find(t => t.name === e.target.textContent);
            content.appendChild(obj.func());
        };
    });
});

