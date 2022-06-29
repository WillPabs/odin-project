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
import pfp1 from './images/DeadGod_5011.png';
import './styles/styles.css';

const header = Header(pfp1, 'William Pabitero');
document.body.appendChild(header);

const createProject = CreateProject();

const createTask = CreateTask();

const task = Task('Read', 'Finish Chapter 1', '6/28/22', 'high');
const taskNode = TaskNode(task);

const task1 = Task('Dentist Appointment', '4:30pm sharp at 14 Meadows Lane', '6/28/22', 'medium');
const task2 = Task('Do dishes', 'Put everything in dishwasher except glasses', '6/28/22', 'low');

const project = Project('Project1');
project.addTask(task);
project.addTask(task1);
project.addTask(task2);

const user1 = User('will');
user1.addProject(project);

const projectsView = Projects(user1);
document.body.appendChild(projectsView);

setTimeout(() => {
    task.setTitle('Nothing')
    console.log(task)
}, 1000);

const projectBar = ProjectBar(project);
document.body.appendChild(projectBar);

const tasksView = Tasks(project);
document.body.appendChild(tasksView);

const footer = Footer();
document.body.appendChild(footer);

const changeTitle = document.createElement('button');
changeTitle.addEventListener('click', () => {
    // document.querySelector('')
});
