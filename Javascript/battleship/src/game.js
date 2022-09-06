import AttackList from './components/AttackList';
import { reset } from './utils';
import PlayAgain from './components/PlayAgain';

const Game = (boards, players) => {
  const { player1, player2 } = players;
  const { field1, field2 } = boards;

  const turnTracker = [];
  const setTurn = () => {
    if (turnTracker.length === 0) {
      turnTracker.push(player1);
      return { player: player1, field: field2 };
    }

    // player2's turn
    if (turnTracker[turnTracker.length - 1] === player1) {
      turnTracker.push(player2);
      return { player: player2, field: field1 };
    }

    // player1's turn
    if (turnTracker[turnTracker.length - 1] === player2) {
      turnTracker.push(player1);
      return { player: player1, field: field2 };
    }
  };

  const isGameOver = (board, player) => {
    if (board.allShipsSunk()) {
      setTimeout(() => {
        console.log('Game Over');
        document.querySelector('.battlefields').classList.add('wait');
        const header = document.querySelector('header h2');
        header.after(PlayAgain(player.name));
      }, 200);
    }
  };

  const isMissedAttack = (target) => {
    if (target.classList.contains('cell-miss')) {
      return true;
    }
    return false;
  };

  let { player, field } = setTurn();
  const playerMove = (e) => {
    const missedAtkCount = field.board.gameboard.missedAttacks.length;
    field.board.receiveAttack(player, e.target);
    isGameOver(field.board.gameboard, player);
    if (missedAtkCount !== field.board.gameboard.missedAttacks.length) {
      ({ player, field } = setTurn());
    }
  };

  const botMove = () => {
    const missedAtkCount = field.board.gameboard.missedAttacks.length;
    field.board.receiveAttack(player);
    isGameOver(field.board.gameboard, player);
    if (missedAtkCount !== field.board.gameboard.missedAttacks.length) {
      ({ player, field } = setTurn());
    } else {
      botMove();
    }
  };

  const fullTurn = (e) => {
    field2.board.element.classList.remove('wait');
    playerMove(e);
    field2.board.element.classList.add('wait');
    field1.board.element.classList.remove('wait');
    // setTimeout(() => {
    if (player.name === 'bot') {
      document.querySelectorAll('.rival .cell').forEach((cell) => {
        cell.removeEventListener('click', fullTurn);
      });
      botMove();
      document.querySelectorAll('.rival .cell').forEach((cell) => {
        cell.addEventListener('click', fullTurn);
      });
    }

    isGameOver(field1.board.gameboard, player2);
    field1.board.element.classList.add('wait');
    field2.board.element.classList.remove('wait');
    // }, 100);
  };

  // game starts
  document.querySelector('.self .shipyard').style.display = 'none';
  const rival = document.querySelector('.rival');
  const self = document.querySelector('.self .gameboard');
  rival.classList.remove('wait');
  self.classList.add('wait');
  field1.board.placeAllShips();
  const attackList1 = AttackList(field1.board.gameboard);
  const attackList2 = AttackList(field2.board.gameboard);
  field1.setAttackList(attackList1);
  field2.setAttackList(attackList2);
  document.querySelectorAll('.ship-box').forEach((ship) => {
    ship.parentNode.removeChild(ship);
  });
  document.querySelectorAll('.rival .cell').forEach((cell) => {
    cell.addEventListener('click', fullTurn);
  });

  // const selfBoard = document.querySelector('.self .gameboard');
  // const rivalBoard = document.querySelector('.rival .gameboard');

  // ({ currentPlayer, currentField } = setTurn());
  // }

  // const makeMove = (e) => {
  //   const content = e.target.children[0];
  //   const { x } = content.dataset;
  //   const { y } = content.dataset;
  //   const boardElement = e.target.parentNode.parentNode.parentNode.parentNode;
  //   const board = boardElement.parentNode.classList.contains('self') ? field1.board.gameboard : field2.board.gameboard;
  //   const otherBoardElement = board === field1.board.gameboard ? rivalBoard : selfBoard;
  //   const boardCells = boardElement.querySelectorAll('.cell');
  //   const otherBoardCells = otherBoardElement.querySelectorAll('.cell');
  //   if (!e.target.classList.contains('cell-miss') && !e.target.classList.contains('cell-hit')) {
  //     board.size[x][y] === undefined ? e.target.classList.add('cell-miss') : e.target.classList.add('cell-hit');
  //     currentPlayer.attack(x, y, board);
  //     if (board.allShipsSunk()) {
  //       // removeMove(boardCells);
  //       removeMove(otherBoardCells);
  //       setTimeout(() => {
  //         console.log('Game Over');
  //         document.querySelector('.battlefields').classList.add('wait');
  //         const header = document.querySelector('header h2');
  //         header.after(PlayAgain(currentPlayer.name));
  //       }, 500);
  //     }
  //     if (e.target.classList.contains('cell-miss')) {
  //       // removeMove(boardCells);
  //       addMove(otherBoardCells);
  //       boardElement.classList.add('wait');
  //       otherBoardElement.classList.remove('wait');
  //       currentPlayer = setTurn();
  //       const otherBoard = boardElement.parentNode.classList.contains('self') ? field2.board.gameboard : field1.board.gameboard;
  //       const botAttack = setInterval(() => {
  //         const botAttackCoords = currentPlayer.botAttack(otherBoard);
  //         const botX = botAttackCoords.x;
  //         const botY = botAttackCoords.y;
  //         const targetE = document.querySelector(`.cell-content[data-x='${botX}'][data-y='${botY}']`).parentNode;
  //         otherBoard.size[botX][botY] === undefined ? targetE.classList.add('cell-miss') : targetE.classList.add('cell-hit');
  //         console.log(`x: ${botX} y: ${botY} ${currentPlayer.name}`);
  //         if (targetE.classList.contains('cell-miss')) {
  //           // addMove(boardCells);
  //           removeMove(otherBoardCells);
  //           boardElement.classList.remove('wait');
  //           otherBoardElement.classList.add('wait');
  //           currentPlayer = setTurn();
  //           console.log(`After turn ${currentPlayer.name}`);
  //           clearInterval(botAttack);
  //         }
  //       }, 1000);
  //     }
  //   }
  // };

  const resetButton = document.querySelector('#leave-game');
  resetButton.addEventListener('click', () => {
    reset(field1, field2);
  });
};

export default Game;
