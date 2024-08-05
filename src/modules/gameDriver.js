import player from "./player";
import { drawP1Board, drawBlindP2Board, deleteBoards, drawBoards } from "./DOM";

const playButton = document.querySelector("#play");
const Player1Board = document.querySelector(".player1");
// const Player2Board = document.querySelector(".player2");

let Player1 = undefined;
let Player2 = undefined;

function initializeGame() {
  Player1 = new player;
  Player2 = new player;
}

function initializeEventListeners() {
  playButton.addEventListener("click", () => {
    initializeGame();
    deleteBoards();
    drawBlindP2Board(Player2);
    drawP1Board(Player1);
    console.log("Game Initialized");
  });

  Player1Board.addEventListener("click", (e) => {
    console.log([e.target.dataset.x, e.target.dataset.y]);
  });
}

function missCheck(player, x, y) {
  const missed = player.board.missed;
  let result = false;
  missed.forEach(element => {
    if (element[0] === x && element[1] === y) {
      result = true;
      return;
    }
  });
  return result;
}

function hitCheck(player, x, y) {
  const hit = player.board.hit;
  let result = false;
  hit.forEach(element => {
    if (element[0] === x && element[1] === y) {
      result = true;
      return;
    }
  });
  return result;
};

function shipCheck(player, x, y) {
  if (player.board.shipCheck(x, y)) {
    return true;
  }
  else {
    return false;
  }
}

export { Player1, Player2, initializeGame, initializeEventListeners, missCheck, hitCheck, shipCheck };