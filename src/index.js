import './style.css';
import { Player1, Player2, initializeGame, initializeEventListeners } from "./modules/gameDriver";
import { drawBlindP2Board, drawP1Board } from './modules/DOM';

initializeGame();
initializeEventListeners();
console.log({Player1, Player2});

Player1.board.placeShip(3, "horizontal", 0,0);
Player1.board.placeShip(3, "vertical", 2,3);

Player2.board.placeShip(3, "horizontal", 0,0);
Player2.board.placeShip(3, "horizontal", 2,0);
console.log(Player2);
Player2.board.receiveAttack(0,0);
Player2.board.receiveAttack(0,1);
Player2.board.receiveAttack(0,2);
Player2.board.receiveAttack(1,1);
Player2.board.receiveAttack(2,0);

drawP1Board(Player1);
drawBlindP2Board(Player2);
// import gameboard from './modules/gameboardFactory';

// const testBoard = new gameboard();
// testBoard.placeShip(3, 0,0,0,2);

// testBoard.recieveAttack(0,1);
// testBoard.gameboardStatus(0,0);

// testBoard.recieveAttack(0,1);
// testBoard.gameboardStatus(0,1);

// testBoard.gameboardStatus(4,1);
