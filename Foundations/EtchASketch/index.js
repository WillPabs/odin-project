// create 16x16 grid of square divs

function create16x16Grid() {
    let divAmount = 16*16;
    const container = document.createElement('div');
    container.className = 'container';
    for (let divs = 0; divs < divAmount; divs++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mousemove', e => {
            const { x, y } = div.getBoundingClientRect();
            div.style.setProperty("--x", e.clientX - x);
            div.style.setProperty("--y", e.clientY - y);
        });
        container.appendChild(div);
    }
    return container;
}

let grid = create16x16Grid();
console.log(grid);
document.body.appendChild(grid);