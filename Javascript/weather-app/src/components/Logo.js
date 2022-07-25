const Logo = () => {
  const container = document.createElement('div');
  container.classList.add('logo-container');

  const icon = document.createElement('img');
  icon.classList.add('logo-icon');
  icon.src = '#';

  const name = document.createElement('div');
  name.classList.add('logo-name');
  name.textContent = 'Weather App';

  container.appendChild(icon);
  container.appendChild(name);
  return container;
};

export default Logo;
