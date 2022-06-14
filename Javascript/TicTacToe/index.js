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
        
        gameboard.flat().forEach((cell, i) => {
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

const PlayerFactory = (name, marker) => {

    const selectCell = (element, gameboard) => {
        let selection = element.target; 
        if (selection.textContent === 'X' || selection.textContent === 'O') {
            alert('Cell has already been marked! Choose another cell.');
        } else {
            if (selection.className === 'cell') {
                let position = selection.id.split('-')[1];
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

const will = PlayerFactory('will', 'X');
const bot = PlayerFactory('bot', 'O');

const GameFlowControl = (player1, player2) => {
    let turnTracker = [];

    const setTurn = () => {
        if (turnTracker.length === 0) {
            turnTracker.push(player1);
            return player1;
        };

        if (turnTracker[length - 1] === player1) {
            // player2's turn
            turnTracker.push(player2);
            return player2;
        } else {
            // player1's turn
            turnTracker.push(player1);
            return player1;
        };
    };

    return {
        setTurn
    };
    
};

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
        game = GameFlowControl(will, bot);
        let currentPlayer = game.setTurn();
        console.log(currentPlayer);
        currentPlayer.selectCell(e, Gameboard);
        Gameboard.renderGameboard();
    })
})