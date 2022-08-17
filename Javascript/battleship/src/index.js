import GameboardComponent from './components/Gameboard';
import Gameboard from './gameboard';
import Player from './player';
import Game from './game';
import './styles/style.css';
import Battlefield from './components/Battlefield';

const gameboard1 = Gameboard(10);
const gameboard2 = Gameboard(10);
gameboard2.generateShips();

const field = document.querySelector('.battlefields');

const boardComponent1 = GameboardComponent(gameboard1);
const boardComponent2 = GameboardComponent(gameboard2);

const field1 = Battlefield(boardComponent1);
const field2 = Battlefield(boardComponent2);
field1.element.classList.add('self');
field2.element.classList.add('rival');

field1.setLabel('Your Grid');
field2.setLabel('Rival Grid');

field.appendChild(field1.element);
field.appendChild(field2.element);

Game(
  { field1, field2 },
  { player1: Player('will'), player2: Player('bot') },
);
