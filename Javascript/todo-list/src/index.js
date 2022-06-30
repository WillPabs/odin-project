import { Task } from './task';
import { Project } from './project';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TaskNode } from './components/Task';
import { ProjectBar } from './components/ProjectBar';
import { CreateTask } from './components/CreateTask';
import { CreateProject } from './components/CreateProject';
import { Tasks } from './components/Tasks';
import { Projects } from './components/Projects';
import { User } from './user';
import { Content } from './components/Content';
import pfp1 from './images/DeadGod_5011.png';
import './styles/styles.css';


const task = Task('Read', 'Finish Chapter 1', '6/28/22', 'high');
const task1 = Task('Dentist Appointment', '4:30pm sharp at 14 Meadows Lane', '6/28/22', 'medium');
const task2 = Task('Do dishes', 'Put everything in dishwasher except glasses', '6/28/22', 'low');

const project = Project('Project1');
project.addTask(task);
project.addTask(task1);
project.addTask(task2);

const project1 = Project('Project2');
project1.addTask(task);
project1.addTask(task1);
project1.addTask(task2);

const user1 = User('William Pabitero');
user1.addProfilePicture(pfp1);
user1.addProject(project);
user1.addProject(project1);

const header = Header(user1);
document.querySelector('header').appendChild(header);

const main = document.querySelector('main');

const projectBar = ProjectBar(user1.projects);
main.appendChild(projectBar);


const projectsView = Projects(user1);
// main.appendChild(projectsView);

const tasksView = Tasks(project);
// main.appendChild(tasksView);

const content = Content(tasksView);
main.appendChild(content);

const footer = Footer();
document.querySelector('footer').appendChild(footer);

const showCreate = (head, toInsert, callback) => {
    if (!toInsert) {
        const createContainer = callback();
        head.parentNode.insertBefore(createContainer, head.nextSibling);
    } else {
        toggleShow(toInsert);
    }
}

const toggleShow = (toInsert) => {
    const createP = toInsert;
    if (createP.style.display === 'none') {
        createP.style.display = 'inline';
    } else {
        createP.style.display = 'none';
    }
}

const createProjectLink = document.querySelector('.create-project-link');
const createTaskLink = document.querySelector('.create-task-link');

// createProjectLink.addEventListener('click', () => {
//     const head = document.querySelector('.projects-header')
//     const toInsert = document.querySelector('#create-project')
//     showCreate(head, toInsert, CreateProject);
// });


// TODO
// fix bug that no longer displays create task component
// when changing project on project bar and clicking
// create task
createTaskLink.addEventListener('click', () => {
    const head = document.querySelector('.project');
    const toInsert = document.querySelector('#create-task');
    showCreate(head, toInsert, CreateTask);
});