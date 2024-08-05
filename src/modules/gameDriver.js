import player from "./player";
import { drawP1Board, drawBlindP2Board, deleteBoards, drawBoards } from "./DOM";

const playButton = document.querySelector("#play");
// const Player1Board = document.querySelector(".player1");
const Player2Board = document.querySelector(".player2");

let Player1 = undefined;
let Player2 = undefined;

function initializeGame() {
  Player1 = new player;
  Player2 = new player;
}

function initializeEventListeners() {
  playButton.addEventListener("click", () => {
    initializeGame();
    //WIP: Remove after creating process to add ships to custom coords
    Player1.board.placeShip(3, "horizontal", 0,0);
    Player1.board.placeShip(3, "vertical", 2,3);
    Player2.board.placeShip(3, "horizontal", 0,0);
    Player2.board.placeShip(3, "vertical", 2,0);
    deleteBoards();
    drawBoards(Player1, Player2);
    console.log("Game Initialized");
  });

  Player2Board.addEventListener("click", (e) => {
    cellAttack(e, Player2);
    computerAttack();
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

function cellAttack(event, player) {
  const coordX = parseInt(event.target.dataset.x);
  const coordY = parseInt(event.target.dataset.y);
  console.log(event);

  console.log(player.board.receiveAttack(coordX, coordY));
  console.log(Player2);
  drawBoards(Player1, Player2);
  return;
}

function computerAttack() {
  const randomCoordX = Math.floor(Math.random() * 10);
  const randomCoordY = Math.floor(Math.random() * 10);
  console.log([randomCoordX, randomCoordY]);

  Player1.board.receiveAttack(randomCoordX, randomCoordY);
  drawBoards(Player1, Player2);
}

export { Player1, Player2, initializeGame, initializeEventListeners, missCheck, hitCheck, shipCheck };