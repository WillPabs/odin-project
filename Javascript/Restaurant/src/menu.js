import './styles/style.css';

const menuContainer = document.createElement('div');
menuContainer.id = 'menu-container';
menuContainer.classList.add('container');

const bgImg = document.createElement('img');
bgImg.src = 'https://images.unsplash.com/photo-1518188770546-efd25d4ca263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';
bgImg.style.height = '100%';
bgImg.style.width = '100%';
bgImg.style.objectFit = 'fill';

const headline = document.createElement('div');
headline.textContent = 'MENU';
headline.classList.add('headline');
menuContainer.appendChild(headline);

const menuGroup = document.createElement('div');
menuGroup.classList.add('menu-group');
menuGroup.textContent = 'Main Dishes';
menuContainer.appendChild(menuGroup);

menuGroup.textContent = 'Beverages';
menuContainer.appendChild(menuGroup);

menuGroup.textContent = 'Sides';
menuContainer.appendChild(menuGroup);

const addMenu = () => {
    const content = document.querySelector('#content');
    // content.remove();
    content.appendChild(bgImg);
    content.appendChild(menuContainer);
}

export { addMenu };





