import './style.css';
import { Player1, Player2, initializeGame } from "./modules/gameDriver";

initializeGame();
console.log({Player1, Player2});

// import gameboard from './modules/gameboardFactory';

// const testBoard = new gameboard();
// testBoard.placeShip(3, 0,0,0,2);

// testBoard.recieveAttack(0,1);
// testBoard.gameboardStatus(0,0);

// testBoard.recieveAttack(0,1);
// testBoard.gameboardStatus(0,1);

// testBoard.gameboardStatus(4,1);
