import './styles/style.css';

const menuContainer = document.createElement('div');
menuContainer.id = 'menu-container';
menuContainer.classList.add('container');

// const bgImg = document.createElement('img');
// bgImg.src = 'https://images.unsplash.com/photo-1518188770546-efd25d4ca263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';
// bgImg.style.height = '100%';
// bgImg.style.width = '100%';
// bgImg.style.objectFit = 'fill';

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
    const content = document.querySelector('#content');
    // content.remove();
    // content.appendChild(bgImg);
    content.appendChild(menuContainer);
}






