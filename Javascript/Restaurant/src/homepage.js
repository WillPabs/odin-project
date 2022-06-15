const bgImg = document.createElement('img');
bgImg.src = 'https://images.squarespace-cdn.com/content/v1/5835d948414fb5a615f7641e/1481519058032-2V7L61ZFLEDNYTL2CYU7/Food+Photo+Background.jpg?format=2500w';

const headline = document.createElement('div');
headline.textContent = 'WELCOME TO MY RESTAURANT';

const copy = document.createElement('div');
copy.textContent = 'We are a 5 Michelin star restuarant. Enjoy our finest cuisine in all of North America.';

export { bgImg, headline, copy };