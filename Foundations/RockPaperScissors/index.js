const Game = () => {
    const playRound = (playerSelection, computerSelection) => {
        switch (playerSelection) {
            case 'Rock':
                if (computerSelection === 'Paper') return 'Computer Wins!';
                if (computerSelection === 'Scissors') return 'Computer Loses.';
                if (computerSelection === 'Rock') return "It's a tie.";
                break;
            case 'Paper':
                if (computerSelection === 'Paper') return "It's a tie.";
                if (computerSelection === 'Scissors') return 'Computer Wins!';
                if (computerSelection === 'Rock') return 'Computer Loses.';
                break;
            case 'Scissors':
                if (computerSelection === 'Paper') return 'Computer Loses.';
                if (computerSelection === 'Scissors') return "It's a tie.";
                if (computerSelection === 'Rock') return 'Computer Wins!';
                break;
        }
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
        return selection;
    };

    return {
        makeSelection,
    }
};

const Computer = () => {
    const computerPlay = () => {
        const selections = ['Rock', 'Paper', 'Scissors'];
        let choice = Math.floor(Math.random() * (selections.length));
        return selections[choice];
    } 

    return {
        computerPlay,
    }
};

let user = User();
let computer = Computer();
let game = Game();

let userSelection = user.makeSelection('Rock');
let computerSelection = computer.computerPlay();

console.log(userSelection);
console.log(computerSelection);

console.log(game.playRound(userSelection, computerSelection));
