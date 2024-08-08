import './style.css';
import { Player1, Player2, initializeGame, initializeEventListeners, randomCoordShip } from "./modules/gameDriver";
import { drawBlindP2Board, drawP1Board } from './modules/DOM';

initializeGame();
console.log({Player1, Player2});

initializeEventListeners();