const Gameboard = function() {
    let gameboard = Array.from(Array(3), () => new Array(3).fill('_'));
    let dummyGameboard = [
        ['X','O','O'],
        ['O','X','O'],
        ['X','O','O'],
    ];

    const winningCombos = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ];


    const renderGameboard = () => {
        let board = document.querySelector("#game-container");
        
        dummyGameboard.flat().forEach((cell, i) => {
            let c = document.querySelector(`#cell-${i}`);
            c.textContent = cell;
            board.appendChild(c);
        });
    };

    return {
        renderGameboard
    }
}();

Gameboard.renderGameboard();
const playerFactory = (name, marker) => {
    this.name = name;
    this.marker = marker;


}