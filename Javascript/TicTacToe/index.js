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

    const setPosition = (position, marker) => {
        gameboard.flat()[position] = marker;
    }

    return {
        renderGameboard,
        setPosition
    }
}();

const playerFactory = (name, marker) => {

    const selectCell = (element, gameboard) => {
        let selection = element.target; 
        if (selection.textContent === 'X' || selection.textContent === 'O') {
            alert('Cell has already been marked! Choose another cell.');
        } else {
            if (selected.className === 'cell') {
                let position = selected.id.split('-')[1];
                gameboard.setPosition(position, marker);
            };
        };
    };

    return {
        name,
        marker,
        selectCell
    };
};

const will = new playerFactory('will', 'X');
const bot = new playerFactory('bot', 'O');

const GameFlowControl = (player1, player2) => {
    let turnTracker = [];

    const setTurn = () => {
        let currentMarker;

        if (turnTracker.length === 0) {
            turnTracker.push(player1);
            currentMarker = player1.marker;
            return currentMarker;
        };

        if (turnTracker.pop() === player1) {
            // player2's turn
            currentMarker = player2.marker;
            return currentMarker;
        } else {
            // player1's turn
            currentMarker = player1.marker;
            return currentMarker;
        };
    };

    return {
        setTurn
    };
    
};