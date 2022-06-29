import logoIcon from '../images/logo.png';

export const Header = (profilePic, name) => {
    const container = document.createElement('div');
    container.classList.add('header');

    const logo = document.createElement('img');
    logo.classList.add('logo');
    logo.src = logoIcon;

    const profilePicDiv = document.createElement('img');
    profilePicDiv.classList.add('profile-pic');
    profilePicDiv.src = profilePic;
    profilePicDiv.style.width = '50px';

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = name;


    container.appendChild(logo);
    container.appendChild(profilePicDiv);
    container.appendChild(nameDiv);

    return container;
}