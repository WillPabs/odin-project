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

const Display = (() => {
    let displayWindow = '';
    let displayEl;
    
    window.addEventListener('load', () => {
        displayEl = document.querySelector('#display');
    });
    
    const addToDisplay = (button) => {
        displayWindow = displayWindow.concat(button.textContent);
    }

    const display = (button) => {
        addToDisplay(button);
        displayEl.textContent = displayWindow;
    }

    const clear = () => {
        displayWindow = '';
        displayEl.textContent = displayWindow;
    }

    return {
        display,
        clear
    }
})();


function calculatorElement() {
    let container = document.createElement('div');
    container.className = 'container';

    let display = document.createElement('div');
    display.className = 'display';
    display.id = 'display';
    display.style.border = 'solid 1px';
    display.textContent = '4 + 10 = 14';

    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList = 'buttonsContainer';

    // number buttons
    for (let i = 1; i < 10; i++) {
        let button = document.createElement('button');
        button.className = 'button';
        button.id = `button-${i}`;
        button.textContent = i;
        buttonsContainer.appendChild(button);
    };

    // operator buttons
    Operator.symbols.forEach(symbol => {
        let button = document.createElement('button');
        button.className = 'button';
        button.id = symbol.name;
        button.textContent = symbol.symbol;
        buttonsContainer.appendChild(button);
    });

    let equalsElement = document.createElement('button');
    equalsElement.className = 'equalsSign';
    equalsElement.id = 'equals';
    equalsElement.textContent = '=';

    let clear = document.createElement('button');
    clear.className = 'clear';
    clear.id = 'clear';
    clear.textContent = 'CLEAR';
    clear.onclick = Display.clear;

    container.appendChild(display);
    container.appendChild(buttonsContainer);
    container.appendChild(equalsElement);
    container.appendChild(clear);

    return container;
}


const calculator = calculatorElement();
document.body.appendChild(calculator);

let buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        Display.display(button);
    });
})