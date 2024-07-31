const P1Board = document.querySelector(".player1");

function drawBlindPlayBoard(player) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < 100; i++) {        
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.x = x;
    cell.dataset.y = y;
    P1Board.appendChild(cell);
    if (y < 9) {
      y += 1;
    } else {
      x += 1;
      y = 0;
    }
  }
}

export { drawBlindPlayBoard }