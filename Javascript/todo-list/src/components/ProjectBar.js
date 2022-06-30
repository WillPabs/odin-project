import { switchContent } from './Content';
import { Tasks } from './Tasks';

export const ProjectBar = (...projects) => {
    const projectBar = document.createElement('div');
    projectBar.id = 'projects-bar';

    const heading = document.createElement('div');
    heading.id = 'projects-bar-heading';
    heading.textContent = 'Your Projects';
    projectBar.appendChild(heading);

    const links = createProjectLinks(...projects);
    projectBar.appendChild(links);
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

// TODO
// add link at bottom of bar with text 'View All Projects'
// when link is clicked, it should trigger the content component
// to switch to Projects View Component