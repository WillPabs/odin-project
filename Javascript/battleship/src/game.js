const Game = (boards, players) => {
  const { player1, player2 } = players;
  const { board1, board2 } = boards;

  const board1El = document.querySelectorAll('.self tbody .cell');
  const board2El = document.querySelector('.rival tbody .cell');

  const playButton = document.querySelector('#play');
  playButton.addEventListener('click', () => {

  });

  board1El.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      const content = e.target.children[0];
      const { x } = content.dataset;
      const { y } = content.dataset;
      player2.attack(x, y, board1);
      console.log(board1.missedAttacks);
    });
  });

  board2El.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      const content = e.target.children[0];
      const { x } = content.dataset;
      const { y } = content.dataset;
      player1.attack(x, y, board2);
      console.log(board2.missedAttacks);
    });
  });
};

export default Game;
