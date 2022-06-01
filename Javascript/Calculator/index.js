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

    const isCalculatorButton = (e) => {
        if (Number(e) || e === '0' || e === '.' || e === '=' || Operator.findMatchingSymbol(e)) {
            return true
        }
        return false;
    }

    const findMatchingSymbol = (value) => {
        return result = symbols.find( ({symbol}) => symbol === value);
    };

    // This function will get the inputted values from calculator.
    // It will then loop through each value.
    // Each iteration of the loop will append the number to a variable.
    // If the value of the current iteration is an operator, the previous
    // number values will become one number and appended to an array for
    // further calculation. The operator will be pushed into the array for
    // that number. The loop will continue to the next value and append the 
    // number to a brand new variable, until another operator is met.
    const parseExpression = () => {
        let values = Display.getValuesOrder();
        let num = '';
        let equationArray = [];

        for (let i = 0; i < values.length; i++) {
            let value = values[i];
            let operator = findMatchingSymbol(value);
            if (operator) {
                if (num.length > 0) {
                    equationArray.push(Number(num));
                    num = '';
                }
                equationArray.push(operator);
                console.log(operator);
            } else {
                num = num.concat(value);
                console.log(num);
            }
            if (i === values.length - 1) equationArray.push(Number(num));
        }
        return equationArray;
    }
    
    const operate = () => {
        let equationArray = parseExpression();

        let result, a, b;
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
        result = Number(result.toFixed(4));
        Display.display(result);  
    };

    return {
        symbols,
        isCalculatorButton,
        findMatchingSymbol,
        operate
    }
})();

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

    const display = (output) => {
        if (typeof output === 'number') {
            displayWindow = output.toString();
            displayEl.textContent = output;
        } else {
            addToDisplay(output);
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

    // decimal button
    let decimal = document.createElement('button');
    decimal.className = 'button';
    decimal.id = 'decimal';
    decimal.textContent = '.';
    buttonsContainer.appendChild(decimal);

    // equals button
    let equalsElement = document.createElement('button');
    equalsElement.className = 'equalsSign';
    equalsElement.id = 'equals';
    equalsElement.textContent = '=';
    // equalsElement.onclick = Operator.operate;
    // equalsElement.onkeydown = Operator.operate;
    ['click', 'keydown'].forEach( event => {
        equalsElement.addEventListener(event, Operator.operate);
    });
    buttonsContainer.appendChild(equalsElement);

    // clear button
    let clear = document.createElement('button');
    clear.className = 'clear';
    clear.id = 'clear';
    clear.textContent = 'CLEAR';
    clear.onclick = Display.clear;
    buttonsContainer.appendChild(clear);

    container.appendChild(display);
    container.appendChild(buttonsContainer);

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

document.addEventListener('keydown', (e) => {
    if (e.key === '=' || e.key === 'Enter') Operator.operate();
    if (Operator.isCalculatorButton(e.key)) {
        buttons = Array.from(buttons);
        let match = buttons.find(button => button.textContent === e.key);
        Display.display(match);
    }
})