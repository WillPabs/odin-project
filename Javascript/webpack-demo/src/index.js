import myName from './myName';

function component() {
  const element = document.createElement('div');

  // use your function!
  element.textContent = myName('Cody');
  return element;
}

document.body.appendChild(component());

var name = "Bob", time = "today";  
console.log(`Hello ${name}, are you ${time}?`);