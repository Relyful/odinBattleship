import player from "./player";

const playButton = document.querySelector("#play");
const Player1Board = document.querySelector(".player1");
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
    console.log("Game Initialized");
  });

  Player1Board.addEventListener("click", (e) => {
    console.log([e.target.dataset.x, e.target.dataset.y]);
  });
}

export { Player1, Player2, initializeGame, initializeEventListeners };