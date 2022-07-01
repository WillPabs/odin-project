import logoIcon from '../images/logo.png';
import { ProfileHeader } from './ProfileHeader';

export const Header = (user) => {
    const container = document.createElement('header');
    container.classList.add('header');

    const left = document.createElement('div');
    left.classList.add('header-left');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = logoIcon;

    const logoName = document.createElement('div');
    logoName.classList.add('logo-name');
    logoName.textContent = 'FulFill';
    left.appendChild(logo);
    left.appendChild(logoName);
    

    const right = document.createElement('div');
    right.classList.add('header-right');
    right.appendChild(ProfileHeader(user));
    
    container.appendChild(left);
    container.appendChild(right);
    return container;
}