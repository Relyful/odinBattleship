import './style.css';
import { Player1, Player2, initializeGame, initializeEventListeners } from "./modules/gameDriver";
import { drawBlindP2Board, drawP1Board } from './modules/DOM';

initializeGame();
initializeEventListeners();
console.log({Player1, Player2});

drawP1Board(Player1);
drawBlindP2Board(Player2);