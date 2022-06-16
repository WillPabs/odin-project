import './styles/homepage.css';

const headline = document.createElement('div');
headline.textContent = 'WELCOME TO MY RESTAURANT';
headline.classList.add('headline');

const copy = document.createElement('div');
copy.textContent = 'We are a 5 Michelin star restuarant. Enjoy our finest cuisine in all of North America.';
copy.classList.add('copy');

const homeContainer = document.createElement('div');
homeContainer.id = 'home-container';
homeContainer.classList.add('container');
homeContainer.appendChild(headline);
homeContainer.appendChild(copy);

export const addHomepage = () => {
    return homeContainer;
};