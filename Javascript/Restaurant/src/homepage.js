import restIcon from './images/restaurant.png';
import hoursIcon from './images/hours.png';
import locationIcon from './images/location.png';

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
outer.classList.add('headline');


const headline = document.createElement('div');
headline.textContent = 'Pabs Eats';
headline.classList.add('inner');
outer.appendChild(headline);

const sum = 'We are a 5 Michelin star restuarant. Enjoy our finest cuisine in all of The Milky Way.';
const summary = createInfo('Pabs', sum);
const rest = document.createElement('img');
rest.src = restIcon;
rest.classList.add('decorations');
rest.classList.add('bottom-center');
summary.appendChild(rest);

const times = `Sunday: 8am - 8pm
Monday: 6am - 6pm
Tuesday: 6am - 6pm
Wednesday: 6am - 6pm
Thursday: 6am - 10pm
Friday: 6am - 10pm
Saturday: 8am - 10pm`;
const hours = createInfo('Hours', times);
const hIcon = document.createElement('img');
hIcon.src = hoursIcon;
hIcon.classList.add('decorations');
hIcon.classList.add('top-right');
hours.appendChild(hIcon);

const address = '123 Water Street, New York, NY';
const location = createInfo('Location', address);
const loc = document.createElement('img');
loc.src = locationIcon;
loc.classList.add('decorations');
loc.classList.add('top-right');
location.appendChild(loc);

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