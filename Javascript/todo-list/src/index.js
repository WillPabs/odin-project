import { Task, TaskNode } from './task';
import { Project } from './project';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ProjectBar } from './components/ProjectBar';
import { CreateTask } from './components/CreateTask';
import { CreateProject } from './components/CreateProject';
import { Tasks } from './components/Tasks';
import pfp1 from './images/DeadGod_5011.png';

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

const projectBar = ProjectBar(project);
document.body.appendChild(projectBar);

const tasksView = Tasks(project);
document.body.appendChild(tasksView);

const footer = Footer();
document.body.appendChild(footer);
