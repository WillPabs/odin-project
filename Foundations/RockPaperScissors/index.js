const Game = () => {
    const selections = ['rock', 'paper', 'scissors'];

    const playRound = (playerSelection, computerSelection) => {
        switch (playerSelection) {
            case selections[0]:
                if (computerSelection === selections[0]) return `It's a tie! Both players chose ${computerSelection}.`;
                if (computerSelection === selections[1]) return `You Lose! ${computerSelection} beats ${playerSelection}`;
                if (computerSelection === selections[2]) return `You win! ${playerSelection} beats ${computerSelection}`;
                break;
            case selections[1]:
                if (computerSelection === selections[0]) return `You win! ${playerSelection} beats ${computerSelection}`;
                if (computerSelection === selections[1]) return `It's a tie! Both players chose ${computerSelection}.`;
                if (computerSelection === selections[2]) return `You Lose! ${computerSelection} beats ${playerSelection}`;
                break;
            case selections[2]:
                if (computerSelection === selections[0]) return `You Lose! ${computerSelection} beats ${playerSelection}`;
                if (computerSelection === selections[1]) return `You win! ${playerSelection} beats ${computerSelection}`;
                if (computerSelection === selections[2]) return `It's a tie! Both players chose ${computerSelection}.`;
                break;
        };
    };

    const totalRounds = (numOfRounds) => {
        while (numOfRounds > 0) {
            playRound(playerSelection, computerSelection);
        };
    };

    return {
        playRound,
        totalRounds
    }
};

const User = () => {
    const makeSelection = () => {
        let selection = prompt('Choose Rock, Paper, or Scissors');
        return selection.toLowerCase();
    };

    return {
        makeSelection,
    }
};

const Computer = () => {
    const selections = ['Rock', 'Paper', 'Scissors'];
    const computerPlay = () => {
        let choice = Math.floor(Math.random() * (selections.length));
        return selections[choice].toLowerCase();
    } 

    return {
        computerPlay,
    }
};

let user = User();
let computer = Computer();
let game = Game();

let userSelection = user.makeSelection();
let computerSelection = computer.computerPlay();

console.log(userSelection);
console.log(computerSelection);

console.log(game.playRound(userSelection, computerSelection));
