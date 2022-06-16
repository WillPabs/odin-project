import { addHomepage } from "./homepage";
import { addMenu } from "./menu";
import { addTab } from "./tab";
import './styles/style.css';

console.log('Welcome to restaurant');
const content = document.querySelector('#content');

content.appendChild(addTab());
content.appendChild(addHomepage());

console.log(addTab());
// addHomepage();
// addMenu();