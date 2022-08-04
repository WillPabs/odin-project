const Game = (players, boards) => {
  const { player1, player2 } = players;
  const { board1, board2 } = boards;

  board1.addEventListener('click', (e) => {
    console.log(e);
  });
};

export default Game;
