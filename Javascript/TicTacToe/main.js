// Gameboard object : module pattern
    // gameboard is an array
    // reset() : sets all spots in gameboard back to empty
    // displayGameboard() : renders the gameboard to the frontend
    // updateGameboard(position, player) : updates the gameboard with the
//         // selected position with the player's marker
//     // hasWinner() : checks if a player's markers match horizontally
//         // vertically, or diagonally
//     // boardComplete() : checks if all spots on the board have been
//         // used. Will log no winner, if last spot didn't make a winner
// const Gameboard = (function() {
//     let gameboard = Array.from(Array(3), () => new Array(3).fill('_'));
//     console.log("Starting game");
//     let dummyGameboard = [
//         ['X','O','O'],
//         ['O','X','O'],
//         ['X','O','O'],
//     ];

//     const winningCombos = [
//         [0,1,2],
//         [0,3,6],
//         [0,4,8],
//         [1,4,7],
//         [2,4,6],
//         [2,5,8],
//         [3,4,5],
//         [6,7,8]
//     ]

//     const getBoard = () => {
//         gameboard;
//     };

//     const reset = () => {
//         gameboard = Array.from(Array(3), () => new Array(3).fill('_'));
//         console.log('Reset game board');
//     };

//     const setPosition = (position, marker) => {
//         console.log('Setting position on board');
//         if (position >= 0 && position < 3 ) {
//             gameboard[0][position] = marker;
//         } else {
//             let rowNum = Math.floor(position / 3);
//             let newPosition = position % 3;
//             gameboard[rowNum][newPosition] = marker;
//         };
//         Gameboard.displayGameboard();
//     };
    
//     const isDraw = () => {
//         let board = gameboard.flat();
//         return board.every(cell => cell === 'X' || cell === 'O');
//     }

//     const hasWinner = (marker) => {
//         let board = gameboard.flat();
//         let isWinner = false;
//         let winningCombo;
//         winningCombos.forEach(combo => {
//             let markerCount = 0;
//             for (let i = 0; i < combo.length; i++) {
//                 let winningPosition = combo[i];
//                 if (board[winningPosition] === marker) markerCount++;
//             }
//             if (markerCount === 3) {
//                 isWinner = true;
//                 winningCombo = combo;
//             }
//         })
//         return isWinner;  
//     };

//     const displayGameboard = () => {
//         console.log('displaying board')
//         let board = document.querySelector('#game-container');
//         let index = 0;
//         gameboard.forEach(row => {
//             row.forEach(marker => {
//                 let cell = document.querySelector(`#cell-${index}`);
//                 cell.onclick = () => {
                    
//                 }
//                 cell.innerHTML = marker;
//                 board.appendChild(cell);
//                 index++;
//             });
//         });
//     };

//     return {
//         reset,
//         displayGameboard,
//         getBoard,
//         setPosition,
//         isDraw,
//         hasWinner
//     };
// })();




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
const GameFlowControl = function(gameboard, players) {
    const createPlayer = () => {
        let name = prompt("Enter Player Name: ");
        let marker = prompt("Choose your marker. 'X' or 'O': ");
        return new Player(name, marker);
    };

    const startGame = () => {
    }

    // const takeTurn = (player) => {
    //     document.querySelectorAll('.cell').forEach(cell => {
    //         cell.addEventListener('click', e => {
    //             player.selectCell(e);
    //         });
    //     });
    // };

    return {
        startGame
    }
};


Gameboard.displayGameboard();
console.log(Gameboard.isDraw());
const will = Player('will', 'X');
const npc = Player('NPC', 'O');

// Create way for players to take turns 
let player1Turn = true;
let currentPlayer;
let index = 0;
const players = [will, npc];



document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', e => {
        let winner = false;
        
            if (player1Turn) {
                will.selectCell(e);
                winner = Gameboard.hasWinner(will.getMarker());
                console.log("Winner? " + winner);
                player1Turn = false;
            } else {
                npc.selectCell(e);
                winner = Gameboard.hasWinner(npc.getMarker());
                console.log("Winner? " + winner);
                player1Turn = true;
            }
            if (Gameboard.isDraw()) {
                alert('Board is full. Resetting board');
                Gameboard.reset();
                Gameboard.displayGameboard()
            }
        
    });
});



