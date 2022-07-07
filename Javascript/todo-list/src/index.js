import { Task } from './task';
import { Project } from './project';
import { User } from './user';
import { displayUserContent } from './display';
import pfp1 from './images/DeadGod_5011.png';
import './styles/styles.css';

const task = Task('Read', 'Finish Chapter 1', '6/28/22', 'high');
const task1 = Task('Dentist Appointment', '4:30pm sharp at 14 Meadows Lane', '6/28/22', 'medium');
const task2 = Task('Do dishes', 'Put everything in dishwasher except glasses', '6/28/22', 'low');
const task3 = Task('Do this', 'Put everything in dishwasher except glasses', '6/28/22', 'low');
const task4 = Task('Do that', 'Put everything in dishwasher except glasses', '6/28/22', 'low');

const project = Project('Project1');
project.addTask(task);
project.addTask(task1);
project.addTask(task2);
project.addTask(task3);

const project1 = Project('Project2');
project1.addTask(task);
project1.addTask(task1);
project1.addTask(task2);
project1.addTask(task4);

const user1 = User('William Pabitero');
user1.addProfilePicture(pfp1);
user1.addProject(project);
user1.addProject(project1);

displayUserContent(user1);
