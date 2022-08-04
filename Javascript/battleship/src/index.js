import GameboardComponent from './components/Gameboard';
import CreatePlayer from './components/CreatePlayer';
import Gameboard from './gameboard';
import Player from './player';
import './styles/style.css';

const body = document.querySelector('body');

const playerInput = CreatePlayer();

body.appendChild(playerInput);

const gameboard1 = Gameboard(8);
const gameboard2 = Gameboard(8);

const boardComponent1 = GameboardComponent(gameboard1);
const boardComponent2 = GameboardComponent(gameboard2);
body.appendChild(boardComponent1);
body.appendChild(document.createElement('br'));
body.appendChild(boardComponent2);
