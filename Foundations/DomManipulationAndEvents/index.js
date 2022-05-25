const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const red = document.createElement('p');
red.textContent = 'Hey I’m red!';

container.appendChild(red);

const blue = document.createElement('h3');
blue.textContent = "I'm a blue h3!";

container.appendChild(blue);

const otherDiv = document.createElement('div');
otherDiv.style.border = 'black';
otherDiv.style.background = 'pink';

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";

const meToo = document.createElement('p');
meToo.textContent = "ME TOO!";

otherDiv.appendChild(h1);
otherDiv.appendChild(meToo);

container.appendChild(otherDiv);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    console.log(e);
});