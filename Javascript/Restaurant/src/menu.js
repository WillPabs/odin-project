import './styles/style.css';
import steakImg from './images/menu/steak.avif';
import salmonImg from './images/menu/salmon.avif';
import chickenImg from './images/menu/chicken.avif';
import seltzerImg from './images/menu/seltzer.avif';
import beerImg from './images/menu/beer.avif';
import tequilaImg from './images/menu/tequila.avif';
import friesImg from './images/menu/fries.avif';
import saladImg from './images/menu/salad.avif';
import menuImg from './images/menu.png';

const createMenuGroup = (text) =>  {
    const outer = document.createElement('div');
    outer.classList.add('outer');
    const menuG = document.createElement('div');
    menuG.classList.add('menu-group');
    menuG.classList.add('inner');
    menuG.textContent = text;
    outer.appendChild(menuG);
    return outer;
}

const createMenuItem = (name, price, description, image) => {
    const outer = document.createElement('div');
    outer.classList.add('outer');

    const item = document.createElement('div');
    item.classList.add('item');
    item.classList.add('inner');
    item.id = name;

    const itemName = document.createElement('div');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    const itemDesc = document.createElement('div');
    itemDesc.classList.add('item-desc');
    itemDesc.textContent = description;

    const itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = price;
    
    const itemImage = document.createElement('img');
    itemImage.classList.add('item-image');
    itemImage.src = image;
    
    item.appendChild(itemName);
    item.appendChild(itemDesc);
    item.appendChild(itemPrice);
    item.appendChild(itemImage);
    outer.appendChild(item);
    return outer;
}

const menuContainer = document.createElement('div');
menuContainer.id = 'menu-container';
menuContainer.classList.add('container');

const headline = document.createElement('div');
const menuImage = document.createElement('img');
menuImage.src = menuImg;
menuImage.classList.add('menu-img');
const innerHeadline = document.createElement('div');
innerHeadline.textContent = 'Menu';
innerHeadline.classList.add('inner');
headline.classList.add('headline');
headline.classList.add('outer');
headline.appendChild(menuImage);
headline.appendChild(innerHeadline);
menuContainer.appendChild(headline);

const drinkImg = 'https://images.unsplash.com/photo-1587888637140-849b25d80ef9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80';

const mainDish = createMenuGroup('Main Dishes');
const steak = createMenuItem('Tomahawk Steak', '$1000', 'Rare steak from the fields of Japan', steakImg);
const salmon = createMenuItem('Fresh Atlantic Salmon', '$49.99', 'Fresh caught wild salmon of the Atlantic', salmonImg);
const chicken = createMenuItem('Grilled Peruvian Chicken', '$29.99', 'Organic grass fed chicken', chickenImg);
menuContainer.appendChild(mainDish);
menuContainer.appendChild(steak);
menuContainer.appendChild(salmon);
menuContainer.appendChild(chicken);

const bevs = createMenuGroup('Beverages');
const seltzer = createMenuItem('Happy Dad', '$9.99', 'Hard Seltzer from Nelk Boys', seltzerImg);
const beer = createMenuItem('Stella Artois', '$7.99', 'Fresh beer', beerImg);
const tequila = createMenuItem('Casamigos', '$39.99', 'Tequila baby!!!', tequilaImg);
menuContainer.appendChild(bevs);
menuContainer.appendChild(seltzer);
menuContainer.appendChild(beer);
menuContainer.appendChild(tequila);

const sides = createMenuGroup('Sides');
const fries = createMenuItem('French Fries', '$4.99', 'Fresh cut potatoes', friesImg);
const salad = createMenuItem('Kale Salad', '$6.99', 'Fresh vegetable salad', saladImg);
menuContainer.appendChild(sides);
menuContainer.appendChild(fries);
menuContainer.appendChild(salad);

export const addMenu = () => {
    return menuContainer;
}






