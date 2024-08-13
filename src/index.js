import './style.css';
import { Player1, initializeGame, initializeEventListenersStart} from "./modules/gameDriver";
import { drawCleanBoard } from "./modules/DOM";

initializeGame();
drawCleanBoard(Player1);
initializeEventListenersStart();