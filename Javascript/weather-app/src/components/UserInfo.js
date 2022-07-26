import down from '../images/menu-down.png';
import up from '../images/menu-up.png';
import user from '../images/account-circle.png';
import menu from '../images/menu.png';

const menuData = [
  ['Weather', [
    "'Today's Forecast",
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

  //   const menu = Menu(menuData);
  const menuIcon = document.createElement('img');
  menuIcon.classList.add('menu-icon');
  menuIcon.src = menu;

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
    const title = document.createElement('div');
    title.textContent = category;
    category.forEach((item) => {
      const link = document.createElement('link');
      link.classList.add('menu-link');
      link.textContent = item;
      category.appendChild(link);
    });
    menu.appendChild(category);
  });

  return menu;
};

export default UserInfo;
