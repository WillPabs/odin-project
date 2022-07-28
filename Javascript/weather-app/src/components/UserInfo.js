import down from '../images/menu-down.png';
import up from '../images/menu-up.png';
import user from '../images/account-circle.png';
import menu from '../images/menu.png';

const menuData = [
  ['Weather', [
    "Today's Forecast",
    'Hourly Forecast',
    '10 Day Forecast',
  ]],
  ['Radar', [
    'Radar Maps',
    'Classic Weather Maps',
    'Regional Satellite',
  ]],
  ['Account', [
    'Sign Up',
    'Go Premium',
    'Log In',
  ]],
  ['Privacy', [
    'Privacy Settings',
    'Data Rights',
    'Privacy Policy',
  ]],
];

const UserInfo = () => {
  const container = document.createElement('div');
  container.classList.add('user-info-container');

  const metricContainer = document.createElement('div');
  metricContainer.classList.add('metric-container');

  const metric = document.createElement('div');
  metric.classList.add('metric');
  metric.textContent = 'F';

  const metricIcon = document.createElement('img');
  metricIcon.classList.add('metric-icon');
  metricIcon.src = down;
  metricIcon.addEventListener('click', () => {
    metricIcon.src = (metricIcon.src === up ? metricIcon.src = down : metricIcon.src = up);
  });

  const userIcon = document.createElement('img');
  userIcon.classList.add('user-icon');
  userIcon.src = user;

  const menuComponent = Menu(menuData);
  const menuIcon = document.createElement('img');
  menuIcon.classList.add('menu-icon');
  menuIcon.src = menu;
  menuIcon.addEventListener('click', () => {
    if (!document.querySelector('.menu')) {
      const header = document.querySelector('.header');
      header.parentNode.insertBefore(menuComponent, header.nextSibling);
    } else if (menuComponent.style.display === 'none') {
      menuComponent.style.display = 'block';
    } else {
      menuComponent.style.display = 'none';
    }
  });

  metricContainer.appendChild(metric);
  metricContainer.appendChild(metricIcon);

  container.appendChild(metricContainer);
  container.appendChild(userIcon);
  container.appendChild(menuIcon);
  return container;
};

const Menu = (data) => {
  const menu = document.createElement('div');
  menu.classList.add('menu');

  data.forEach((category) => {
    const catContainer = document.createElement('div');
    catContainer.classList.add('menu-category');

    const title = document.createElement('div');
    title.classList.add('category-title');
    title.textContent = category[0];

    const links = document.createElement('div');
    links.classList.add('menu-links');

    category[1].forEach((item) => {
      const link = document.createElement('a');
      link.classList.add('menu-link');
      link.textContent = item;
      link.href = '#';
      links.appendChild(link);
    });

    catContainer.appendChild(title);
    catContainer.appendChild(links);

    menu.appendChild(catContainer);
  });

  return menu;
};

export default UserInfo;
