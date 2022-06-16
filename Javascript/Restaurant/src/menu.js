import './styles/style.css';

const menuContainer = document.createElement('div');
menuContainer.id = 'menu-container';
menuContainer.classList.add('container');

const headline = document.createElement('div');
headline.textContent = 'MENU';
headline.classList.add('headline');
menuContainer.appendChild(headline);

const menuGroup = (text) =>  {
    const menuG = document.createElement('div');
    menuG.classList.add('menu-group');
    menuG.textContent = text;
    return menuG;
}

const mainDish = menuGroup('Main Dishes');
const bevs = menuGroup('Beverages');
const sides = menuGroup('Sides');
menuContainer.appendChild(mainDish);
menuContainer.appendChild(bevs);
menuContainer.appendChild(sides);

export const addMenu = () => {
    return menuContainer;
}






