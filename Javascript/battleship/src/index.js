import GameboardComponent from './components/Gameboard';
import CreatePlayer from './components/CreatePlayer';
import Gameboard from './gameboard';
import Player from './player';
import './styles/style.css';
import Game from './game';

const body = document.querySelector('body');

const playerInput = CreatePlayer();

body.appendChild(playerInput);

const gameboard1 = Gameboard(8);
const gameboard2 = Gameboard(8);

const boardComponent1 = GameboardComponent(gameboard1);
boardComponent1.classList.add('self');
const boardComponent2 = GameboardComponent(gameboard2);
boardComponent2.classList.add('rival');
body.appendChild(boardComponent1);
body.appendChild(document.createElement('br'));
body.appendChild(boardComponent2);

Game(
  { board1: gameboard1, board2: gameboard2 },
  { player1: Player('will'), player2: Player('bot') },
);
