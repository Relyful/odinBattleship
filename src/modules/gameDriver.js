import player from "./player";
import { drawP1Board, drawBlindP2Board, deleteBoards, drawBoards, announceWinner } from "./DOM";

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

    place5RandomShips(Player1);
    place5RandomShips(Player2);

    deleteBoards();
    drawBoards(Player1, Player2);
    playButton.innerText = 'Reset';
    announceWinner();
    console.log([Player1, Player2]);    
    console.log("Game Initialized");
  });  

  const handleCellClick = (e) => {
    const result = cellAttack(e, Player2);
    if (result === 2) {
      return result;
    } else {
      if (Player2.board.allSunk()) {
        console.log('Player1Won!!');      
        announceWinner('Player');
        Player2Board.removeEventListener("click", handleCellClick);
        playButton.innerText = 'Play';
        return result;
      }
      let pcResult = computerAttack();
      while (pcResult === 2) {
        pcResult = computerAttack();
      }
      if (Player1.board.allSunk()) {
        console.log('Player2Won!!');
        announceWinner('PC');
        Player2Board.removeEventListener("click", handleCellClick);
        playButton.innerText = 'Play';
        return result;
      }
    }
    return;
  }

  Player2Board.addEventListener("click", handleCellClick);

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

function randomCoordShip(size) {
  let randomCoordX;
  let randomCoordY;
  const ranNum = Math.floor(Math.random() * 2);
  let orientation;
  if (ranNum < 1) {
    orientation = "vertical";
  } else {
    orientation = "horizontal"
  }

  if (orientation === "vertical") {
    randomCoordX = Math.floor(Math.random() * (10 - size));
    randomCoordY = Math.floor(Math.random() * 10);
  } else {
    randomCoordY = Math.floor(Math.random() * (10 - size));
    randomCoordX = Math.floor(Math.random() * 10);
  }
  return [size, orientation, randomCoordX, randomCoordY];
}

function place5RandomShips(player) {

  function helper(size) {
    let result = false;
    while (!result) {
      result = player.board.placeShip(...randomCoordShip(size));
    }
  }

  helper(5);
  helper(4);
  helper(3);
  helper(3);
  helper(2);
}

export { Player1, Player2, initializeGame, initializeEventListeners, missCheck, hitCheck, shipCheck, randomCoordShip };