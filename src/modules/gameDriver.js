import player from "./player";

const playButton = document.querySelector("#play");

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
  })
}

export { Player1, Player2, initializeGame, initializeEventListeners };