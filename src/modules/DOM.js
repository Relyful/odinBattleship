import { missCheck, hitCheck, shipCheck } from "./gameDriver";

const P1Board = document.querySelector(".player1");
const P2Board = document.querySelector(".player2");

function drawBlindP2Board(player) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < 100; i++) {        
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.x = x;
    cell.dataset.y = y;
    if (missCheck(player, x, y)) {
      cell.style.backgroundColor = 'blue';
    };
    if (hitCheck(player, x, y)) {
      cell.innerText  = "X";
    };
    P2Board.appendChild(cell);
    if (y < 9) {
      y += 1;
    } else {
      x += 1;
      y = 0;
    }
  }
};

function drawP1Board(player) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.x = x;
    cell.dataset.y = y;
    if (missCheck(player, x, y)) {
      cell.innerText = "X";
      cell.style.color = "blue";
    }
    if (hitCheck(player, x, y)) {
      cell.innerText = "X";
      cell.style.color = "red";
    }
    if (shipCheck(player, x, y)) {
      cell.style.backgroundColor = "grey";
    }
    P1Board.appendChild(cell);
    if (y < 9) {
      y += 1;
    } else {
      x += 1;
      y = 0;
    }
  }
}

function deleteBoards() {
  P1Board.replaceChildren();
  P2Board.replaceChildren();
}

export { drawBlindP2Board, drawP1Board, deleteBoards }