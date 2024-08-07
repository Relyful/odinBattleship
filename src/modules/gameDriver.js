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
    const result = cellAttack(e, Player2);
    if (result === 2) {
      return result;
    } else {
      let pcResult = computerAttack();
      while (pcResult === 2) {
        pcResult = computerAttack();
      }
    }
    return;
  });

    Player2Board.addEventListener('dragstart', (event) => {event.preventDefault();});
    Player2Board.addEventListener('dragover', (event) => {event.preventDefault();});
    Player2Board.addEventListener('drop', (event) => {event.preventDefault();});
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
  if (event.target.dataset.y === undefined || event.target.dataset.x === undefined) {
    return 2;
  } else {
  const coordX = parseInt(event.target.dataset.x);
  const coordY = parseInt(event.target.dataset.y);
  

  const result = player.board.receiveAttack(coordX, coordY);
  drawBoards(Player1, Player2);
  return result;
  }
}

function computerAttack() {
  let randomCoordX = Math.floor(Math.random() * 10);
  let randomCoordY = Math.floor(Math.random() * 10);

  let result = Player1.board.receiveAttack(randomCoordX, randomCoordY);
  while (result === 2) {
    console.log("missed");
    
    randomCoordX = Math.floor(Math.random() * 10);
    randomCoordY = Math.floor(Math.random() * 10);
    result = Player1.board.receiveAttack(randomCoordX, randomCoordY);
  }
  drawBoards(Player1, Player2);
  return result;
}

export { Player1, Player2, initializeGame, initializeEventListeners, missCheck, hitCheck, shipCheck };