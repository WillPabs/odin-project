import './styles/homepage.css';

const createInfo = (title, info) => {
    const outer = document.createElement('div');
    outer.classList.add('outer');

    const container = document.createElement('div');
    container.classList.add('home-info-container');
    container.classList.add('inner');
    container.id = String(title).toLowerCase();

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('home-title');
    titleDiv.textContent = title;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('home-info');
    infoDiv.textContent = info;

    container.appendChild(titleDiv);
    container.appendChild(infoDiv);
    outer.append(container);
    return outer;
}

const outer = document.createElement('div');
outer.classList.add('outer');
const headline = document.createElement('div');
headline.textContent = 'WELCOME TO MY RESTAURANT';
headline.classList.add('headline');
headline.classList.add('inner');
outer.appendChild(headline);

const sum = 'We are a 5 Michelin star restuarant. Enjoy our finest cuisine in all of The Milky Way.';
const summary = createInfo('Pabs', sum);

const times = `Sunday: 8am - 8pm
Monday: 6am - 6pm
Tuesday: 6am - 6pm
Wednesday: 6am - 6pm
Thursday: 6am - 10pm
Friday: 6am - 10pm
Saturday: 8am - 10pm`;
const hours = createInfo('Hours', times);

const address = '123 Water Street, New York, NY';
const location = createInfo('Location', address);

const homeContainer = document.createElement('div');
homeContainer.id = 'home-container';
homeContainer.classList.add('container');
homeContainer.appendChild(outer);
homeContainer.appendChild(summary);
homeContainer.appendChild(hours);
homeContainer.appendChild(location);

export const addHomepage = () => {
    return homeContainer;
};