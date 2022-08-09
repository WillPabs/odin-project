const Game = (boards, players) => {
  const { player1, player2 } = players;
  const { field1, field2 } = boards;

  // const attackList1 = AttackList(field1);
  // const attackList2 = AttackList(field2);

  // const board1El = document.querySelectorAll('.self tbody .cell');
  // document.querySelector('.self').appendChild(attackList1.element);
  // const board2El = document.querySelectorAll('.rival tbody .cell');
  // document.querySelector('.rival').appendChild(attackList2.element);

  const playButton = document.querySelector('#play');
  playButton.addEventListener('click', () => {
    console.log('Game Start');
    playing();
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
  const makeMove = (e) => {
    const content = e.target.children[0];
    const { x } = content.dataset;
    const { y } = content.dataset;
    const boardElement = e.target.parentNode.parentNode.parentNode.parentNode;
    const board = boardElement.classList.contains('self') ? field1.board.gameboard : field2.board.gameboard;
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

  const playing = () => {
    document.querySelectorAll('.cell').forEach((cell) => {
      cell.addEventListener('click', makeMove);
    });
  };
};

export default Game;
