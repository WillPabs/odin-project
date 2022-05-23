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

    const getBoard = () => {
        console.log(dummyGameboard);
    };

    const reset = () => {
        gameboard = Array.from(Array(3), () => new Array(3));
        console.log('Reset game board');
    };

    const setPosition = (position, marker) => {
        console.log('Setting position on board');
        if (position >= 0 && position < 3 ) {
            dummyGameboard[0][position] = marker;
        } else {
            let rowNum = Math.floor(position / 3);
            let newPosition = position % 3;
            dummyGameboard[rowNum][newPosition] = marker;
        };
    };

    const displayGameboard = () => {
        console.log('displaying board')
        let board = document.querySelector('#game-container');
        let index = 0;
        dummyGameboard.forEach(row => { // change to use gameboard
            row.forEach(marker => {
                let cell = document.querySelector(`#cell-${index}`);
                cell.innerHTML = marker;
                board.appendChild(cell);
                index++;
            });
        });
    };

    return {
        reset,
        displayGameboard,
        getBoard,
        setPosition
    };
})();




// Player object : factoryFunction pattern
    // selectCell(board, position) : fills the position on the board with player's marker
const Player = (name) => {
    let wins = 0;
    const marker = 'X';
    const getMarker = () => marker;
    const getName = () => name;

    // const selectCell = (position) => {
    //     const selected = document.querySelector(`#cell${position}`)
    //     // check if position on board is filled
    //     if (selected.innerHTML === null)
    //         // return alert position has been filled choose another
    //         alert('Cell has already been marked! Choose another cell.')
    //     // grab the element of the position
    //     selected.addEventListener('click', () => {
    //         selected.innerHTML = getMarker();
    //     })
    //     // set a click event for that position
    //         // fill the element with the player's marker
    // } 

    return {
        getMarker,
        getName
    }
}




// Game Flow Control object : module pattern
    // hasWinner() : checks if a player's markers match horizontally
        // vertically, or diagonally
    // boardComplete() : checks if all spots on the board have been
        // used. Will log no winner, if last spot didn't make a winner
const GameFlowControl = function() {
    Gameboard.displayGameboard();
    const will = Player('will');
    
    
    document.querySelectorAll('.cell').forEach(cell => {
        cell.addEventListener('click', e => {
            let target = e.target;
            if (target.className === 'cell') {
                console.log(target.id)
                let position = target.id.split('-')[1];
                Gameboard.setPosition(position, will.getMarker());
                Gameboard.displayGameboard();
            }
        });
    });
}();

