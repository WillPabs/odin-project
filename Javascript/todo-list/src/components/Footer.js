export const Footer = () => {
    const container = document.createElement('div');
    container.classList.add('footer');

    const content = document.createElement('div');
    content.classList.add('footer-content');

    const copyright = document.createElement('div');
    copyright.id = 'footer-copyright';
    copyright.textContent = '© Fulfill'

    const rights = document.createElement('div');
    rights.id = 'footer-rights';
    rights.textContent = 'All Rights Reserved';

    const year = document.createElement('div');
    year.id = 'footer-year';
    year.textContent = '2022';

    content.appendChild(copyright);
    content.appendChild(rights);
    content.appendChild(year);

    container.appendChild(content);
    return container;
};