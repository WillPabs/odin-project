import Drag from './drag';
import AttackList from './components/AttackList';
import PlayAgain from './components/PlayAgain';
import { reset } from './utils';

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

  // 1st turn will always be self
  let currentPlayer = setTurn();
  const selfBoard = document.querySelector('.self .gameboard');
  const rivalBoard = document.querySelector('.rival .gameboard');

  // playing game with a bot
  /* 
    user clicks cell and attacks that board. The turn is passed to the bot where
  */

  // playing game with another user
  const makeMove = (e) => {
    const content = e.target.children[0];
    const { x } = content.dataset;
    const { y } = content.dataset;
    const boardElement = e.target.parentNode.parentNode.parentNode.parentNode;
    const board = boardElement.parentNode.classList.contains('self') ? field1.board.gameboard : field2.board.gameboard;
    const otherBoardElement = board === field1.board.gameboard ? rivalBoard : selfBoard;
    const boardCells = boardElement.querySelectorAll('.cell');
    const otherBoardCells = otherBoardElement.querySelectorAll('.cell');
    if (!e.target.classList.contains('cell-miss') && !e.target.classList.contains('cell-hit')) {
      board.size[x][y] === undefined ? e.target.classList.add('cell-miss') : e.target.classList.add('cell-hit');
      currentPlayer.attack(x, y, board);
      if (board.allShipsSunk()) {
        removeMove(boardCells);
        removeMove(otherBoardCells);
        setTimeout(() => {
          console.log('Game Over');
          document.querySelector('.battlefields').classList.add('wait');
          const header = document.querySelector('header h2');
          header.after(PlayAgain(currentPlayer.name));
        }, 500);
      }
      if (e.target.classList.contains('cell-miss')) {
        removeMove(boardCells);
        addMove(otherBoardCells);
        boardElement.classList.add('wait');
        otherBoardElement.classList.remove('wait');
        currentPlayer = setTurn();
        const otherBoard = boardElement.parentNode.classList.contains('self') ? field2.board.gameboard : field1.board.gameboard;
        let botAttackCoords = currentPlayer.botAttack(otherBoard);
        let botX = botAttackCoords.x;
        let botY = botAttackCoords.y;
        let targetE = document.querySelector(`.cell-content[data-x='${botX}'][data-y='${botY}']`).parentNode;
        setTimeout(() => {
          otherBoard.size[botX][botY] === undefined ? targetE.classList.add('cell-miss') : targetE.classList.add('cell-hit');
        }, 1000);
        setInterval(() => {
          botAttackCoords = currentPlayer.botAttack(otherBoard);
          botX = botAttackCoords.x;
          botY = botAttackCoords.y;
          targetE = document.querySelector(`.cell-content[data-x='${botX}'][data-y='${botY}']`).parentNode;
          otherBoard.size[botX][botY] === undefined ? targetE.classList.add('cell-miss') : targetE.classList.add('cell-hit');
          if (targetE.classList.contains('cell-miss')) {
            addMove(boardCells);
            removeMove(otherBoardCells);
            boardElement.classList.remove('wait');
            otherBoardElement.classList.add('wait');
            currentPlayer = setTurn();
            clearInterval();
          }
        }, 1000);
      }
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
    document.querySelector('.self .shipyard').style.display = 'none';
    const rival = document.querySelector('.rival');
    const self = document.querySelector('.self .gameboard');
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
      playButton.style.display = 'none';
    }
  });

  const checkAllShipsPlaced = () => {
    const ships = document.querySelectorAll('.self .shipyard div');
    for (const ship of ships) {
      if (ship.children.length !== 0) return false;
    }
    return true;
  };

  const resetButton = document.querySelector('#leave-game');
  resetButton.addEventListener('click', () => {
    reset(field1, field2);
  });
};

export default Game;
