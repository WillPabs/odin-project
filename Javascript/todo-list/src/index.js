import { Task, TaskNode } from './task';
import { Project } from './project';

const task = Task('Read', 'Finish Chapter 1', '6/28/22', 'high');
const taskNode = TaskNode(task);
document.body.appendChild(taskNode);

const project = Project('Project1');
project.addTask(task);
console.log(project);
