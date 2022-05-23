// Gameboard object : module pattern
    // gameboard is an array
    // reset() : sets all spots in gameboard back to empty
    // displayGameboard() : renders the gameboard to the frontend
    // updateGameboard(position, player) : updates the gameboard with the
        // selected position with the player's marker
    // hasWinner() : checks if a player's markers match horizontally
        // vertically, or diagonally
    // boardComplete() : checks if all spots on the board have been
        // used. Will log no winner, if last spot didn't make a winner
const Gameboard = (function() {
    let gameboard = Array.from(Array(3), () => new Array(3).fill('_'));
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
            gameboard[0][position] = marker;
        } else {
            let rowNum = Math.floor(position / 3);
            let newPosition = position % 3;
            gameboard[rowNum][newPosition] = marker;
        };
        Gameboard.displayGameboard();
    };

    const hasWinner = () => {

    };
    
    // TODO 
    // fix function to return true when board is filled
    const isComplete = () => {
        let board = gameboard;
        for (let row = 0; row < board.length; row++) {
            for (let position = 0; position < board[row].length; position++) {
                let cell = board[row][position];
                console.log(cell)
                if (cell !== 'X' || cell !== 'O') return false;
            }
        }
        return true;
    }

    const displayGameboard = () => {
        console.log('displaying board')
        let board = document.querySelector('#game-container');
        let index = 0;
        gameboard.forEach(row => {
            row.forEach(marker => {
                let cell = document.querySelector(`#cell-${index}`);
                cell.onclick = () => {
                    
                }
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
        setPosition,
        isComplete
    };
})();




// Player object : factoryFunction pattern
    // selectCell(board, position) : fills the position on the board with player's marker
const Player = (name, marker) => {
    let wins = 0;
    const getMarker = () => marker;
    const getName = () => name;

    const selectCell = (element) => {
        let selected = element.target;
        console.log(selected)
        if (selected.innerHTML === 'X' || selected.innerHTML === 'O') {
            alert('Cell has already been marked! Choose another cell.');
        } else {
            if (selected.className === 'cell') {
                let position = selected.id.split('-')[1];
                Gameboard.setPosition(position, marker);
            }
        }
    };

    return {
        getMarker,
        getName,
        selectCell
    }
}

// Game Flow Control object : module pattern
const GameFlowControl = function() {
    const choosePlayer = (name, marker) => {
        return Player(name, marker);
    };

    const takeTurn = (player) => {
        document.querySelectorAll('.cell').forEach(cell => {
            cell.addEventListener('click', e => {
                player.selectCell(e);
            });
        });
    }

    // const startGame = (gameboard, player1, player2) => {
    //     let currentPlayer = player1;
    //     if(!gameboard.isComplete()) {
    //         document.querySelectorAll('.cell').forEach(cell => {
    //             cell.addEventListener('click', e => {
    //                 currentPlayer.selectCell(e);
    //             });
    //         });
    //         currentPlayer === player1 ? currentPlayer = player2 : currentPlayer = player1;
    //     }
    // }

    // document.querySelectorAll('.cell').forEach(cell => {
    //     cell.addEventListener('click', e => {
    //         will.selectCell(e);
    //     });
    // });

    return {
        takeTurn
    }
}();


Gameboard.displayGameboard();
console.log(Gameboard.isComplete());
const will = Player('will', 'X');
const npc = Player('NPC', 'O');

// Create way for players to take turns 
let player1Turn = true;
let currentPlayer;
let index = 0;


document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', e => {
        
        if (player1Turn) {
            will.selectCell(e);
            player1Turn = false;
        } else {
            npc.selectCell(e);
            player1Turn = true;
        }
        console.log(Gameboard.isComplete())
    });
});



