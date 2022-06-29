export const Projects = (user) => {
    const container = document.createElement('div');
    container.classList.add('content-container');

    const projectsHeader = document.createElement('div');
    projectsHeader.classList.add('projects-header');

    const heading = document.createElement('div');
    heading.classList.add('projects-heading');
    heading.textContent = `${user.name[0].toUpperCase() + user.name.substring(1)}'s Projects`;

    const createProject = document.createElement('a');
    createProject.classList.add('create-project-link');
    createProject.href = '#';
    createProject.textContent = 'Add Project';

    const showFinished = document.createElement('a');
    showFinished.classList.add('show-finished-link');
    showFinished.href = '#';
    showFinished.textContent = 'Show Finished';

    projectsHeader.appendChild(heading);
    projectsHeader.appendChild(createProject);
    projectsHeader.appendChild(showFinished);

    const list = createProjectsList(user.projects);
    const projects = document.createElement('div');
    projects.classList.add('projects-container');
    projects.appendChild(list);
    
    container.appendChild(projectsHeader);
    container.appendChild(projects);
    return container;
};


const createProjectsList = (projects) => {
    const container = document.createElement('div');
    container.classList.add('projects-list-container');

    projects.forEach(project => {
        const projectContainer = document.createElement('div');
        container.classList.add('project');

        const heading = document.createElement('div');
        heading.classList.add('project-heading');
        heading.textContent = project.title;

        const tasksContainer = document.createElement('div');
        const size = 4;
        const tasks = project.getTaskList().slice(0, size);
        tasks.forEach(task => {
            const taskContainer = document.createElement('div');
            const title = document.createElement('div');
            title.textContent = task.title;
            taskContainer.appendChild(title);
            tasksContainer.appendChild(taskContainer);
        });

        projectContainer.appendChild(heading);
        projectContainer.appendChild(tasksContainer);
        container.appendChild(projectContainer);
    });
    return container;
};