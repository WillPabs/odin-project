import { Content } from "./Content";
import { Projects } from "./Projects";

export const ProfileHeader = (user) => {
    const profileHeader = document.createElement('div');
    profileHeader.classList.add('profile-header');
    profileHeader.addEventListener('click', () => {
        Content(Projects(user));
    });

    const profilePicDiv = document.createElement('img');
    profilePicDiv.classList.add('profile-pic');
    profilePicDiv.src = user.profilePicture;
    profilePicDiv.style.width = '50px';

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = user.name;

    profileHeader.appendChild(profilePicDiv);
    profileHeader.appendChild(nameDiv);
    return profileHeader;
}
