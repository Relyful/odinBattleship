import { missCheck, hitCheck, shipCheck } from './gameDriver';

const vsDiv = document.querySelector('.vs');
const board = document.querySelector('.board');
const ships = document.querySelector('.ships');
const small = document.querySelector('.smallHor');
const big = document.querySelector('.bigHor');
const bigger = document.querySelector('.biggerHor');
const biggest = document.querySelector('.biggestHor');
const P1Board = document.querySelector('.player1');
const P2Board = document.querySelector('.player2');

function drawBlindP2Board(player) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    if (missCheck(player, x, y)) {
      cell.style.backgroundColor = 'blue';
    }
    if (hitCheck(player, x, y)) {
      cell.innerText = 'X';
    }
    P2Board.appendChild(cell);
    if (y < 9) {
      y += 1;
    } else {
      x += 1;
      y = 0;
    }
  }
}

function drawP1Board(player) {
  let x = 0;
  let y = 0;

  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    if (missCheck(player, x, y)) {
      cell.innerText = 'X';
      cell.style.color = 'blue';
    }
    if (hitCheck(player, x, y)) {
      cell.innerText = 'X';
      cell.style.color = 'red';
    }
    if (shipCheck(player, x, y)) {
      cell.style.backgroundColor = 'grey';
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

function drawCleanBoard(player) {
  let x = 0;
  let y = 0;

  board.replaceChildren();
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.x = x;
    cell.dataset.y = y;
    board.appendChild(cell);
    if (shipCheck(player, x, y)) {
      cell.style.backgroundColor = 'grey';
    }
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

function drawBoards(player1, player2) {
  deleteBoards();
  drawP1Board(player1);
  drawBlindP2Board(player2);
}

function announceWinner(player) {
  if (!player) {
    vsDiv.innerText = 'vs';
  } else {
    vsDiv.innerText = `${player} Won!`;
  }
}

function changeOrientation() {
  if (ships.dataset.orientation === 'horizontal') {
    ships.dataset.orientation = 'vertical';
    small.classList.remove('smallHor');
    small.classList.add('smallVer');
  } else {
    ships.dataset.orientation = 'horizontal';
    small.classList.remove('smallVer');
    small.classList.add('smallHor');
  }
}

export {
  drawBlindP2Board,
  drawP1Board,
  deleteBoards,
  drawBoards,
  announceWinner,
  drawCleanBoard,
  changeOrientation,
};
