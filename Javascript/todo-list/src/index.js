import { Task } from './task';
import { Project } from './project';
import { User } from './user';
import { displayUserContent } from './display';
import pfp1 from './images/DeadGod_5011.png';
import { format } from 'date-fns';
import './styles/styles.css';

const now = format(new Date(), 'MM/dd/yy');
const task = Task('Read', 'Finish Chapter 1', now, 'high');
const task1 = Task('Dentist Appointment', '4:30pm sharp at 14 Meadows Lane', now, 'medium');
const task2 = Task('Do dishes', 'Put everything in dishwasher except glasses', now, 'low');
const task3 = Task('Do this', 'Put everything in dishwasher except glasses', now, 'low');
const task4 = Task('Do that', 'Put everything in dishwasher except glasses', now, 'low');
const task5 = Task('Prep food', 'put food in containers', now, 'medium');
const task6 = Task('Walk dog', 'take dog for walk', now, 'high');
const task7 = Task('Mop floor', 'mop the floor', now, 'low');

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

const project2 = Project('Project3');
project2.addTask(task5);

const project3 = Project('Project4');
project3.addTask(task6);
project3.addTask(task7);

const user1 = User('William Pabitero');
user1.addProfilePicture(pfp1);
user1.addProject(project);
user1.addProject(project1);
user1.addProject(project2);
user1.addProject(project3);

displayUserContent(user1);
