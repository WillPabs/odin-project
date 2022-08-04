import GameboardComponent from './components/Gameboard';
import CreatePlayer from './components/CreatePlayer';
import Gameboard from './gameboard';
import Player from './player';

const body = document.querySelector('body');

const gameboard = Gameboard(8);

const boardComponent = GameboardComponent(gameboard);
body.appendChild(boardComponent);
