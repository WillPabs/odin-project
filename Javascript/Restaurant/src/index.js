import { bgImg, headline, copy } from "./homepage";

console.log('Welcome to restaurant');
window.addEventListener('load', () => {
    const content = document.querySelector('#content');
    content.appendChild(bgImg);
    content.appendChild(headline);
    content.appendChild(copy);
});