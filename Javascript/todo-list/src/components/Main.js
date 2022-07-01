import { ProjectBar } from './ProjectBar';
import { Content } from './Content';

export const Main = (projects, content) => {
    const main = document.querySelector('main');
    const navbar = ProjectBar(projects);
    const mainContent = Content(content);
    main.appendChild(navbar);
    main.appendChild(mainContent);
    return main;
}