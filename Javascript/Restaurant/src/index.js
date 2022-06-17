import { tabs, addTab } from "./tab";
import { addHomepage } from "./homepage";
import './styles/style.css';

const content = document.querySelector('#content');
content.appendChild(addTab());
content.appendChild(addHomepage());

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
        document.querySelector('.container').remove();
        let obj = tabs.find(t => t.name === e.target.textContent);
        content.appendChild(obj.func());
    });
});

