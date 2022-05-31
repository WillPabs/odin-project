const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    return a / b;
};

const operate = (operator, num1, num2) => {
    return operator(num1, num2);
};

function calculatorElement() {
    let container = document.createElement('div');
    container.className = 'container';

    let display = document.createElement('div');
    display.className = 'display';
    display.id = 'display';
    display.style.border = 'solid 1px';
    display.innerText = '4 + 10 = 14';

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList = 'buttonsContainer';

    for (let i = 1; i < 10; i++) {
        let button = document.createElement('button');
        button.className = 'button';
        button.id = `button-${i}`;
        button.innerText = i;
        buttonsContainer.appendChild(button);
    };

    let equalsElement = document.createElement('button');
    equalsElement.className = 'equalsSign';
    equalsElement.id = 'equals';
    equalsElement.innerText = '=';

    let clear = document.createElement('button');
    clear.className = clear;
    clear.id = 'clear';
    clear.innerText = 'CLEAR';

    container.appendChild(display);
    container.appendChild(buttonsContainer);
    container.appendChild(equalsElement);
    container.appendChild(clear);

    return container;
}



const calculator = calculatorElement();
console.log(calculator);
document.body.appendChild(calculator);

