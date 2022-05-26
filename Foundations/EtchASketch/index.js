// create n^2 grid of square divs
function createNSquareGrid(divAmount) {
    if (divAmount > 100) {
        divAmount = 100;
    }
    const container = document.createElement('div');
    container.className = 'container';
    container.style.gridTemplateRows = `repeat(${divAmount}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${divAmount}, 1fr)`;
    for (let divs = 0; divs < divAmount**2; divs++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.innerText = divs;
        div.addEventListener('mousemove', e => {
            const { x, y } = div.getBoundingClientRect();
            div.style.setProperty("--x", e.clientX - x);
            div.style.setProperty("--y", e.clientY - y);
        });
        container.appendChild(div);
    }
    return container;
}


let button = document.createElement('button');
button.innerText = 'Click Me';
document.body.appendChild(button);
button.addEventListener('click', () => {
    let squares = prompt('Enter desired amount of squares for each side of the grid.');
    let grid = createNSquareGrid(squares);
    let container = document.querySelector('.container');
    console.log(container);
    if (container !== null) {
        container.parentNode.replaceChild(grid, container);
    } else {
        document.body.appendChild(grid);
    }
});
