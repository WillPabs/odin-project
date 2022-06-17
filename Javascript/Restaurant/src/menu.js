import './styles/style.css';

const createMenuGroup = (text) =>  {
    const menuG = document.createElement('div');
    menuG.classList.add('menu-group');
    menuG.textContent = text;
    return menuG;
}

const createMenuItem = (name, price, description, image) => {
    const item = document.createElement('div');
    item.classList.add('item');
    item.id = name;

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = price;
    
    const itemDesc = document.createElement('div');
    itemDesc.classList.add('item-desc');
    itemDesc.textContent = description;
    
    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');
    itemImage.src = image;
    
    item.appendChild(itemName);
    item.appendChild(itemPrice);
    item.appendChild(itemDesc);
    item.appendChild(itemImage);
    return item;
}

const menuContainer = document.createElement('div');
menuContainer.id = 'menu-container';
menuContainer.classList.add('container');

const headline = document.createElement('div');
headline.textContent = 'MENU';
headline.classList.add('headline');
menuContainer.appendChild(headline);

const mainDish = createMenuGroup('Main Dishes');
const steak = createMenuItem('Tomahawk Steak', '$1000', 'Rare steak from the fields of Japan', undefined);
const salmon = createMenuItem('Fresh Atlantic Salmon', '$49.99', 'Fresh caught wild salmon of the Atlantic', undefined);
const chicken = createMenuItem('Grilled Peruvian Chicken', '$29.99', 'Organic grass fed chicken', undefined);
mainDish.appendChild(steak);
mainDish.appendChild(salmon);
mainDish.appendChild(chicken);

const bevs = createMenuGroup('Beverages');
const sides = createMenuGroup('Sides');
menuContainer.appendChild(mainDish);
menuContainer.appendChild(bevs);
menuContainer.appendChild(sides);

export const addMenu = () => {
    return menuContainer;
}






