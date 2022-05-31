const Game = (user) => {
    const selections = ['rock', 'paper', 'scissors'];
    const roundsToWin = 5;

    const getScore = () => {
        return {
            player : user.getWins(),
            computer : Computer.getWins()
        };
    };

    const resetScore = () => {
        user.resetWins();
        Computer.resetWins();
    }

    const announceWinner = () => {
        if (getScore().player === roundsToWin) return "Player wins!";
        if (getScore().computer === roundsToWin) return "Computer wins!";
    }
    
    const playRound = (playerSelection) => {
        const computerSelection = Computer.computerPlay();
        switch (playerSelection) {
            case selections[0]:
                if (computerSelection === selections[0]) return `It's a tie! Both players chose ${computerSelection}.`;
                if (computerSelection === selections[1]) { Computer.win(); return `You Lose! ${computerSelection} beats ${playerSelection}`;};
                if (computerSelection === selections[2]) { user.win(); return `You win! ${playerSelection} beats ${computerSelection}`;};
                break;
            case selections[1]:
                if (computerSelection === selections[0]) { user.win(); return `You win! ${playerSelection} beats ${computerSelection}`;};
                if (computerSelection === selections[1]) return `It's a tie! Both players chose ${computerSelection}.`;
                if (computerSelection === selections[2]) { Computer.win(); return `You Lose! ${computerSelection} beats ${playerSelection}`;};
                break;
            case selections[2]:
                if (computerSelection === selections[0]) { Computer.win(); return `You Lose! ${computerSelection} beats ${playerSelection}`;};
                if (computerSelection === selections[1]) { user.win(); return `You win! ${playerSelection} beats ${computerSelection}`;};
                if (computerSelection === selections[2]) return `It's a tie! Both players chose ${computerSelection}.`;
                break;
        };
    };

    return {
        playRound,
        getScore,
        announceWinner,
        resetScore
    };
};

const User = () => {
    let wins = 0;

    const makeSelection = (selection) => {
        return selection.toLowerCase();
    };

    const win = () => {
        wins++;
    };

    const getWins = () => {
        return wins;
    };

    const resetWins = () => {
        wins = 0;
    };

    return {
        makeSelection,
        win,
        getWins,
        resetWins
    };
};

const Computer = function() {
    let wins = 0;
    const selections = ['Rock', 'Paper', 'Scissors'];

    const computerPlay = () => {
        let choice = Math.floor(Math.random() * (selections.length));
        return selections[choice].toLowerCase();
    };

    const win = () => {
        wins++;
    };

    const getWins = () => {
        return wins;
    };

    const resetWins = () => {
        wins = 0;
    };

    return {
        computerPlay,
        win,
        getWins,
        resetWins
    };
}();


let user = User();
let game = Game(user);

let buttons = document.querySelectorAll('.selection');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let selection = user.makeSelection(button.id);
        let result = document.querySelector('#result');
        result.innerText = game.playRound(selection);
        let score = document.querySelector('#scoreboard');
        let playerScore = game.getScore().player;
        let computerScore = game.getScore().computer;
        score.innerText = `Player Wins: ${playerScore} ||| Computer Wins: ${computerScore}`;
        let winner = document.querySelector('#winner');
        if (game.announceWinner() !== undefined) {
            winner.innerText = game.announceWinner();
            game.resetScore();
        }        
    });
});