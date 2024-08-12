import './style.css';
import { Player1, Player2, initializeGame, initializeEventListeners, initializeEventListenersStart} from "./modules/gameDriver";
import { drawCleanBoard } from "./modules/DOM";

initializeGame();
drawCleanBoard(Player1);
initializeEventListenersStart();
// initializeGame();
// console.log({Player1, Player2});

// initializeEventListeners();