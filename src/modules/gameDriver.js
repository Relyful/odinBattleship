import player from "./player";

let Player1 = undefined;
let Player2 = undefined;

function initializeGame() {
  Player1 = new player;
  Player2 = new player;
}

export { Player1, Player2, initializeGame };