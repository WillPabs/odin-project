const Operator = (() => {
    const symbols = [
        {
            'name' : 'add',
            'symbol' : '+'
        },
        {
            'name' : 'subtract',
            'symbol' : '-'
        },
        {
            'name' : 'multiply',
            'symbol' : '*'
        },
        {
            'name' : 'divide',
            'symbol' : '/'
        }
    ];

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

    return {
        symbols,
        add,
        subtract,
        multiply,
        divide,
        operate
    }
})();

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

    // number buttons
    for (let i = 1; i < 10; i++) {
        let button = document.createElement('button');
        button.className = 'button';
        button.id = `button-${i}`;
        button.innerText = i;
        buttonsContainer.appendChild(button);
    };

    // operator buttons
    Operator.symbols.forEach(symbol => {
        let button = document.createElement('button');
        button.className = 'button';
        button.id = symbol.name;
        button.innerText = symbol.symbol;
        buttonsContainer.appendChild(button);
    });

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
document.body.appendChild(calculator);

