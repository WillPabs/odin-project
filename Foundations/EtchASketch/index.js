// create 16x16 grid of square divs

function create16x16Grid() {
    let divAmount = 16*16;
    const container = document.createElement('div');
    container.className = 'container';
    for (let divs = 0; divs < divAmount; divs++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.textContent = divs;
        container.appendChild(div);
    }
    return container;
}

let grid = create16x16Grid();
console.log(grid);
document.body.appendChild(grid);