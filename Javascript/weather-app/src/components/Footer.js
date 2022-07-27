import { format } from 'date-fns';

const Footer = () => {
  const container = document.createElement('footer');

  const links = document.createElement('div');
  links.classList.add('footer-links');

  const copyright = document.createElement('div');
  copyright.textContent = `© Copyright Pabitero ${format(new Date(), 'yyyy')}`;

  const poweredBy = document.createElement('div');
  poweredBy.textContent = 'Powered by OpenWeatherMap API';

  links.appendChild(copyright);
  links.appendChild(poweredBy);

  container.appendChild(links);
  return container;
};

export default Footer;
