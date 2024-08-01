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
      cell.style.backgroundColor = 'red';
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
}

export { drawBlindP2Board }