import player from "./player";

const header = document.querySelector("header");

let Player1 = undefined;
let Player2 = undefined;

function initializeGame() {
  Player1 = new player;
  Player2 = new player;
}

function initializeEventListeners() {
  header.addEventListener("click", () => {
    console.log("Halooo to som ja Hanzicek ;)");
  })
}

export { Player1, Player2, initializeGame, initializeEventListeners };