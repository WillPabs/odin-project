import { Content, switchContent } from './Content';
import { Tasks } from './Tasks';
import { Projects } from './Projects';

export const ProjectBar = (user) => {
    const projectBar = document.createElement('div');
    projectBar.id = 'projects-bar';

    const heading = document.createElement('div');
    heading.id = 'projects-bar-heading';
    heading.textContent = 'Your Projects';
    projectBar.appendChild(heading);

    const projects = user.projects;
    const links = createProjectLinks(projects);
    projectBar.appendChild(links);

    const allProjectsLink = document.createElement('a');
    allProjectsLink.classList.add('all-projects-link');
    allProjectsLink.textContent = 'View Projects';
    allProjectsLink.href = '#';
    allProjectsLink.addEventListener('click', () => {
        Content(Projects(user));
        
        const newProjects = user.projects;
        const replace = document.querySelector('.project-links');
        refreshProjectsBar(newProjects, replace, projectBar);
    });

    projectBar.appendChild(allProjectsLink);
    return projectBar;
};

const createProjectLinks = (projects) => {
    const container = document.createElement('div');
    container.classList.add('project-links');
    projects.forEach(project => {
        const link = document.createElement('a');
        link.classList.add('project-link');
        link.href = '#';
        link.textContent = project.getTitle();
        link.addEventListener('click', () => {
            switchContent(Tasks(project));
        })
        container.appendChild(link);
    });
    return container;
};

const refreshProjectsBar = (newProjects, node, projectBar) => {
    if (newProjects.length !== node.childElementCount) {
        const newLinks = createProjectLinks(newProjects);
        projectBar.replaceChild(newLinks, node);
    };
};