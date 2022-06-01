const Operator = (() => {
    const add = (a, b) => {
        return Number(a) + Number(b);
    };
    
    const subtract = (a, b) => {
        return Number(a) - Number(b);
    };
    
    const multiply = (a, b) => {
        return Number(a) * Number(b);
    };
    
    const divide = (a, b) => {
        return Number(a) / Number(b);
    };

    const symbols = [
        {
            'name' : 'add',
            'symbol' : '+',
            'function' : add
        },
        {
            'name' : 'subtract',
            'symbol' : '-',
            'function' : subtract
        },
        {
            'name' : 'multiply',
            'symbol' : '*',
            'function' : multiply
        },
        {
            'name' : 'divide',
            'symbol' : '/',
            'function' : divide
        }
    ];

    // This function will get the inputted values from calculator.
    // It will then loop through each value.
    // Each iteration of the loop will append the number to a variable.
    // If the value of the current iteration is an operator, the previous
    // number values will become one number and appended to an array for
    // further calculation. The operator will be pushed into the array for
    // that number. The loop will continue to the next value and append the 
    // number to a brand new variable, until another operator is met.
    const operate = () => {
        let values = Display.getValuesOrder();
        let num = '';
        let operatorEncountered = false;
        let equationArray = [];

        for (let i = 0; i < values.length; i++) {
            let value = values[i];
            let operator = symbols.find( ({symbol}) => symbol === value);
            if (operator) {
                equationArray.push(Number(num));
                num = '';
                equationArray.push(operator);
                operatorEncountered = true;
            } else {
                num = num.concat(value);
            }
            if (i === values.length - 1) equationArray.push(Number(num));
        }

        let result;
        let a;
        let b;
        for (let i = 0; i < equationArray.length; i++) {
            if (typeof equationArray[i] !== 'number') {
                let operation = equationArray[i].function;
                b = equationArray[i + 1];
                if (result === undefined) {
                    result = operation(a,b);
                } else {
                    result = operation(result,b);
                }
                i = i + 1;
            };
            a = equationArray[i];
        };
        Display.display(result);  
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

// when user presses '=' key, the operate function will be run

const Display = (() => {
    let displayWindow = '';
    let displayValuesOrder = [];
    let displayEl;
    
    window.addEventListener('load', () => {
        displayEl = document.querySelector('#display');
    });
    
    const addToDisplay = (button) => {
        displayWindow = displayWindow.concat(button.textContent);
        displayValuesOrder.push(button.textContent);
    }

    const display = (button) => {
        if (typeof button === 'number') {
            displayEl.textContent = button;
        } else {
            addToDisplay(button);
            displayEl.textContent = displayWindow;
        }
    }

    const getValuesOrder = () => {
        return displayValuesOrder;
    }

    const clear = () => {
        displayWindow = '';
        displayValuesOrder = [];
        displayEl.textContent = displayWindow;
    }

    return {
        display,
        getValuesOrder,
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
    for (let i = 0; i < 10; i++) {
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
    equalsElement.onclick = Operator.operate;

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