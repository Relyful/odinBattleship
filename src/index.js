import './style.css';
import shipFactory from './modules/shipFactory';
import gameboard from './modules/gameboardFactory';

const testBoard = new gameboard();
testBoard.placeShip(3, 0,0,0,2);

testBoard.recieveAttack(0,1);
testBoard.gameboardStatus(0,0);

testBoard.recieveAttack(0,1);
testBoard.gameboardStatus(0,1);

testBoard.gameboardStatus(4,1);
