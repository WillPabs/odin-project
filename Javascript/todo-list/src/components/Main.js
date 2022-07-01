import { ProjectBar } from './ProjectBar';
import { Content } from './Content';
import { Projects } from './Projects';

export const Main = (user) => {
    const main = document.createElement('main');
    main.classList.add('main');
    const navbar = ProjectBar(user);
    const mainContent = Content(Projects(user));
    main.appendChild(navbar);
    main.appendChild(mainContent);
    return main;
}