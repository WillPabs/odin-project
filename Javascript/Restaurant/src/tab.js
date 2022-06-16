const createTab = (text) => {
    const container = document.createElement('div');
    const tab = document.createElement('button');
    tab.classList.add('tab');
    tab.textContent = text;
    container.appendChild(tab);
    return container;
}

const home = createTab('Home');
const menu = createTab('Menu');
const contact = createTab('Contact');

const container = document.createElement('div');
container.classList.add('tabs');

container.appendChild(home);
container.appendChild(menu);
container.appendChild(contact);

export const addTab = () => {
    const content = document.querySelector('#content');
    content.appendChild(container);
}