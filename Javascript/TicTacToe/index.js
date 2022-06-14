const Gameboard = function() {
    let gameboard = new Array(9).fill('');
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
        
        gameboard.forEach((cell, i) => {
            let c = document.querySelector(`#cell-${i}`);
            c.textContent = cell;
            board.appendChild(c);
        });
    };

    const setPosition = (position, marker) => {
        gameboard[position] = marker;
    }

    const isTie = () => {
        return gameboard.every(cell => cell === 'X' || cell === 'O');
    };

    const hasWinner = () => {
        const marker1 = 'X';
        const marker2 = 'O' ;
        for (let combo = 0; combo < winningCombos.length; combo++) {
            let m1MatchCount = 0;
            let m2MatchCount = 0;
            for (let position = 0; position < winningCombos[combo].length; position++) {
                let gBoardPos = gameboard[winningCombos[combo][position]]; 
                if (gBoardPos === marker1) m1MatchCount++;
                if (gBoardPos === marker2) m2MatchCount++;
            }
            if (m1MatchCount === 3) return true;
            if (m2MatchCount === 3) return true;
        }
        return false;
    }

    const isGameOver = () => {
        if (hasWinner() || isTie()) return true;
        return false;
    }

    const reset = () => {
        gameboard = new Array(9).fill('');
    }

    return {
        renderGameboard,
        setPosition,
        isGameOver,
        reset
    }
}();

const PlayerFactory = (name, marker) => {

    const selectCell = (element, gameboard) => {
        let selection = element.target; 
        let isSelectionSet = false;
        if (selection.textContent === 'X' || selection.textContent === 'O') {
            alert('Cell has already been marked! Choose another cell.');
            return isSelectionSet;
        } else {
            if (selection.className === 'cell') {
                let position = selection.id.split('-')[1];
                gameboard.setPosition(position, marker);
                isSelectionSet = true;
                return isSelectionSet;
            };
        };
    };

    return {
        name,
        marker,
        selectCell
    };
};

const GameFlowControl = (player1, player2) => {
    let turnTracker = [];

    const setTurn = () => {
        if (turnTracker.length === 0) {
            turnTracker.push(player1);
            return player1;
        };

        // player2's turn
        if (turnTracker[turnTracker.length - 1] === player1) {
            turnTracker.push(player2);
            return player2;
        };

        // player1's turn
        if (turnTracker[turnTracker.length - 1] === player2) {
            turnTracker.push(player1);
            return player1;
        };
    };

    const createPlayer = (data) => {
        let name = data.elements[0].value;
        let newPlayer = PlayerFactory(name, 'X');
        return newPlayer;
    }

    return {
        setTurn,
        createPlayer
    };
    
};

let restart = document.querySelector('#restartButton');
restart.addEventListener('click', () => {
    Gameboard.reset();
    Gameboard.renderGameboard();
});




/* SETUP */
const will = PlayerFactory('will', 'X');
const bot = PlayerFactory('bot', 'O');
let game = GameFlowControl(will, bot);
document.querySelectorAll('form').forEach(form => {
    console.log(form[0].data);
})

document.querySelectorAll('.create-button').forEach(button => {
    button.addEventListener('click', (e) => {
        console.log(e);
    });
});
/* GAME START */
let currentPlayer = game.setTurn(); // assignment of who takes 1st turn
document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', (e) => {
        if (currentPlayer.selectCell(e, Gameboard)) {
            currentPlayer = game.setTurn();
            Gameboard.renderGameboard();
            if(Gameboard.isGameOver()) {
                setTimeout(() => {
                    Gameboard.reset();
                    alert("GAME OVER");
                    Gameboard.renderGameboard();
                }, 1);
            };
        };
    });
});