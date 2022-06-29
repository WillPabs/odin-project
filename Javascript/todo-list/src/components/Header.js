import logoIcon from '../images/logo.png';

export const Header = (profilePic, name) => {
    const container = document.createElement('div');
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

    const profilePicDiv = document.createElement('img');
    profilePicDiv.classList.add('profile-pic');
    profilePicDiv.src = profilePic;
    profilePicDiv.style.width = '50px';

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = name;
    right.appendChild(profilePicDiv);
    right.appendChild(nameDiv);

    container.appendChild(left);
    container.appendChild(right);
    return container;
}