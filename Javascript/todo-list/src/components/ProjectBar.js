export const ProjectBar = (...projects) => {
    const projectBar = document.createElement('div');
    projectBar.id = 'projects-bar';

    const heading = document.createElement('div');
    heading.id = 'projects-bar-heading';
    heading.textContent = 'Your Projects';
    projectBar.appendChild(heading);

    createProjectLinks(projects, projectBar);
    return projectBar;
};

const createProjectLinks = (projects, container) => {
    projects.forEach(project => {
        const link = document.createElement('a');
        link.classList.add('project-link');
        link.href = '#';
        link.textContent = project.getTitle();

        container.appendChild(link);
    });
    return container;
};