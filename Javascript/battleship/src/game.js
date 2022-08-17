import Drag from './drag';
import AttackList from './components/AttackList';

const Game = (boards, players) => {
  const { player1, player2 } = players;
  const { field1, field2 } = boards;

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
  const selfBoard = document.querySelector('.self .gameboard');
  const rivalBoard = document.querySelector('.rival .gameboard');
  const makeMove = (e) => {
    const content = e.target.children[0];
    const { x } = content.dataset;
    const { y } = content.dataset;
    const boardElement = e.target.parentNode.parentNode.parentNode.parentNode;
    const board = boardElement.parentNode.classList.contains('self') ? field1.board.gameboard : field2.board.gameboard;
    const otherBoardElement = board === field1.board.gameboard ? rivalBoard : selfBoard;
    if (!e.target.classList.contains('cell-miss') && !e.target.classList.contains('cell-hit')) {
      removeMove(boardElement.querySelectorAll('.cell'));
      otherBoardElement.classList.remove('wait');
      board.size[x][y] === undefined ? e.target.classList.add('cell-miss') : e.target.classList.add('cell-hit');
      currentPlayer.attack(x, y, board);
      addMove(otherBoardElement.querySelectorAll('.cell'));
      boardElement.classList.add('wait');
      if (board.allShipsSunk()) {
        setTimeout(() => {
          alert(`${currentPlayer.name} has won`);
        }, 500);
      }
      currentPlayer = setTurn();
    }
  };

  const removeMove = (board) => {
    board.forEach((cell) => {
      cell.removeEventListener('click', makeMove);
    });
  };

  const addMove = (board) => {
    board.forEach((cell) => {
      cell.addEventListener('click', makeMove);
    });
  };

  // make it specific to each board
  const playing = () => {
    const rival = document.querySelector('.rival');
    const self = document.querySelector('.self');
    rival.classList.remove('wait');
    self.classList.add('wait');
    const attackList1 = AttackList(field1.board.gameboard);
    const attackList2 = AttackList(field2.board.gameboard);
    field1.setAttackList(attackList1);
    field2.setAttackList(attackList2);
    document.querySelectorAll('.ship-box').forEach((ship) => {
      ship.parentNode.removeChild(ship);
    });
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.addEventListener('click', makeMove);
    });
  };

  const setUp = (board) => {
    console.log('setting up');
    document.querySelector('.rival').classList.add('wait');
    const drag = Drag(board);
    document.querySelectorAll('.ship-box').forEach((ship) => ship.addEventListener('dragstart', drag.start));
    document.querySelectorAll('.self .cell').forEach((cell) => cell.addEventListener('dragover', drag.dragover));
    document.querySelectorAll('.self .cell').forEach((cell) => cell.addEventListener('drop', drag.drop));
  };

  setUp(field1.board);

  const playButton = document.querySelector('#play');
  playButton.addEventListener('click', () => {
    if (!checkAllShipsPlaced()) {
      alert('Please place all remaining ships on the board');
    } else {
      console.log('Game Start');
      playing();
    }
  });

  const checkAllShipsPlaced = () => {
    const ships = document.querySelectorAll('.self .shipyard div');
    for (const ship of ships) {
      if (ship.children.length !== 0) return false;
    }
    return true;
  };
};

export default Game;
