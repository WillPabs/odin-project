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
  });

  board1El.forEach((cell) => {
    cell.addEventListener('click', (e) => {
      console.log(e.target);
      const content = e.target.children[0];
      const { x } = content.dataset;
      const { y } = content.dataset;
      player2.attack(x, y, board1);

      board1.size[x][y] === undefined ? e.target.className = 'cell-miss' : e.target.className = 'cell-hit';
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
