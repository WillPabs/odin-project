import './styles/style.css';

const bgImg = document.createElement('img');
bgImg.src = 'https://images.unsplash.com/photo-1518188770546-efd25d4ca263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80';

const headline = document.createElement('div');
headline.textContent = 'WELCOME TO MY RESTAURANT';

const copy = document.createElement('div');
copy.textContent = 'We are a 5 Michelin star restuarant. Enjoy our finest cuisine in all of North America.';

const addHomepage = () => {
    const content = document.querySelector('#content');
    content.appendChild(bgImg);
    content.appendChild(headline);
    content.appendChild(copy);
}

export { addHomepage };