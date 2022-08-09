import GameboardComponent from './components/Gameboard';
import CreatePlayer from './components/CreatePlayer';
import Gameboard from './gameboard';
import Player from './player';
import Game from './game';
import AttackList from './components/AttackList';
import './styles/style.css';
import Battlefield from './components/Battlefield';

const body = document.querySelector('body');

const playerInput = CreatePlayer();

const playButton = document.querySelector('#button');

body.appendChild(playerInput);

const gameboard1 = Gameboard(10);
const gameboard2 = Gameboard(10);
gameboard1.generateShips();
gameboard2.generateShips();

const attackList1 = AttackList(gameboard1);
const attackList2 = AttackList(gameboard2);

const field = document.querySelector('.battlefields');

const boardComponent1 = GameboardComponent(gameboard1);
boardComponent1.element.classList.add('self');
const boardComponent2 = GameboardComponent(gameboard2);
boardComponent2.element.classList.add('rival');

const field1 = Battlefield(boardComponent1, attackList1);
const field2 = Battlefield(boardComponent2, attackList2);

field.appendChild(field1.element);
field.appendChild(field2.element);

Game(
  { field1, field2 },
  { player1: Player('will'), player2: Player('bot') },
);
