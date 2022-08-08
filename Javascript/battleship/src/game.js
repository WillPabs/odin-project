import AttackList from './components/AttackList';
import Coords from './coords';
import Ship from './ship';

const Game = (boards, players) => {
  const { player1, player2 } = players;
  const { board1, board2 } = boards;

  const attackList1 = AttackList(board1);
  const attackList2 = AttackList(board2);

  const board1El = document.querySelectorAll('.self tbody .cell');
  document.querySelector('.self').appendChild(attackList1);
  const board2El = document.querySelectorAll('.rival tbody .cell');
  document.querySelector('.rival').appendChild(attackList2);

  const playButton = document.querySelector('#play');
  playButton.addEventListener('click', () => {
    console.log('Game Start');
    play();
  });

  const turnTracker = [];
  const setTurn = () => {
    if (turnTracker.length === 0) {
      turnTracker.push(player1);
      return player1;
    }

    // player2's turn
    if (turnTracker[turnTracker.length - 1] === player1) {
      turnTracker.push(player2);
      return player2;
    }

    // player1's turn
    if (turnTracker[turnTracker.length - 1] === player2) {
      turnTracker.push(player1);
      return player1;
    }
  };

  let currentPlayer = setTurn();
  const selfBoard = document.querySelector('.self');
  const rivalBoard = document.querySelector('.rival');
  const playing = () => {
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.addEventListener('click', (e) => {
        const content = e.target.children[0];
        const { x } = content.dataset;
        const { y } = content.dataset;
        const boardElement = e.target.parentNode.parentNode.parentNode.parentNode;
        const board = boardElement.classList.contains('self') ? board1 : board2;
        const otherBoardElement = board === board1 ? rivalBoard : selfBoard;
        console.log(otherBoardElement);
        otherBoardElement.classList.remove('wait');
        board.size[x][y] === undefined ? e.target.classList.add('cell-miss') : e.target.classList.add('cell-hit');
        currentPlayer.attack(x, y, board);
        boardElement.classList.add('wait');
        if (board.allShipsSunk()) setTimeout(() => { alert('Game over'); }, 500);
        currentPlayer = setTurn();
      });
    });
  };

  playing();
};

export default Game;
