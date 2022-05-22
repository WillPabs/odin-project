// Gameboard object : module pattern
    // gameboard is an array
    // reset() : sets all spots in gameboard back to empty
    // displayGameboard() : renders the gameboard to the frontend
    // updateGameboard(position, player) : updates the gameboard with the
        // selected position with the player's marker
const Gameboard = (function() {
    let gameboard;
    console.log("Starting game");
    let dummyGameboard = [
        ['X','O','O'],
        ['O','X','O'],
        ['X','O','O'],
    ];

    const reset = () => {
        gameboard = Array.from(Array(3), () => new Array(3));
        console.log('Reset game board');
    };

    const displayGameboard = () => {
        console.log('displaying board')
        let board = document.createElement('table');
        dummyGameboard.forEach(row => { // change to use gameboard
            let rowEl = document.createElement('div');
            row.forEach(marker => {
                let cell = document.createElement('span');
                cell.innerHTML = marker;
                rowEl.appendChild(cell);
            });
            board.appendChild(rowEl);
        });
        document.querySelector('#game-container').appendChild(board);
    };

    return {
        reset,
        displayGameboard
    };
})();

Gameboard.displayGameboard();


// Player object : factoryFunction pattern
const Player = (name) => {
    let wins = 0;
    const getName = () => name;

    return {
        getName
    }
}

const will = Player('will')
console.log(will.getName());


// Game Flow Control object : module pattern
    // hasWinner() : checks if a player's markers match horizontally
        // vertically, or diagonally
    // boardComplete() : checks if all spots on the board have been
        // used. Will log no winner, if last spot didn't make a winner
const GameFlowControl = () => {

}