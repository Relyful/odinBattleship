import player from './player';
import {
  deleteBoards,
  drawBoards,
  announceWinner,
  drawCleanBoard,
  changeOrientation,
  drawPlayArea,
} from './DOM';

const board = document.querySelector('.board');
const changeOr = document.querySelector('#changeOrientation');
const ships = document.querySelector('.ships');
const resetButt = document.querySelector('#reset');
const confirmButt = document.querySelector('#confirm');
const ran5Butt = document.querySelector('#ran5');

const enemyAttackQueue = [];
let Player1 = undefined;
let Player2 = undefined;

function initializeGame() {
  Player1 = new player();
  Player2 = new player();
}

function initializeEventListenersStart() {
  const shipList = document.querySelectorAll('.ship');

  function dragStartHandler(ev) {
    ev.dataTransfer.setData('text/plain', ev.target.dataset.length);
    ev.dataTransfer.setData('textid', ev.target.id);
  }

  function dropEventHandler(ev) {
    ev.preventDefault();

    const length = parseInt(ev.dataTransfer.getData('text/plain'));
    const x = parseInt(ev.target.dataset.x);
    const y = parseInt(ev.target.dataset.y);
    const orientation = ships.dataset.orientation;
    const shipId = parseInt(ev.dataTransfer.getData('textid'));

    if (!isNaN(x) && !isNaN(y)) {
      const status = Player1.board.placeShip(length, orientation, x, y);
      if (status) {
        document.getElementById(`${shipId}`).remove();
      }
    }
    drawCleanBoard(Player1);
  };

  function startGame() {
    drawPlayArea();
    const playButton = document.querySelector('#play');
    const Player2Board = document.querySelector('.player2');
    initializeEventListeners();
    place5RandomShips(Player2);
    deleteBoards();
    drawBoards(Player1, Player2);
    playButton.innerText = 'Randomize Ships';
    announceWinner();
    Player2Board.addEventListener('click', handleCellClick);
  };

  shipList.forEach((element) => {
    element.addEventListener('dragstart', dragStartHandler);
  });

  board.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  board.addEventListener('drop', dropEventHandler);

  changeOr.addEventListener('click', changeOrientation);
  resetButt.addEventListener('click', () => {
    location.reload();
  });
  confirmButt.addEventListener('click', () => {
    //draw play area
    startGame();
  });

  ran5Butt.addEventListener('click', () => {
    initializeGame();
    place5RandomShips(Player1);
    drawCleanBoard(Player1);
    startGame();
  });    
  };

function initializeEventListeners() {
  const playButton = document.querySelector('#play');
  const Player2Board = document.querySelector('.player2');
  const resetGame = document.querySelector('#resetGame');

  playButton.addEventListener('click', () => {
    initializeGame();

    place5RandomShips(Player1);
    place5RandomShips(Player2);

    deleteBoards();
    drawBoards(Player1, Player2);
    playButton.innerText = 'Randomize Ships';
    announceWinner();
    Player2Board.addEventListener('click', handleCellClick);
  });

  Player2Board.addEventListener('click', handleCellClick);

  Player2Board.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  Player2Board.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  Player2Board.addEventListener('drop', (event) => {
    event.preventDefault();
  });

  resetGame.addEventListener('click', () => {
    location.reload();
  });
}

const handleCellClick = (e) => {
  const Player2Board = document.querySelector('.player2');
  const result = cellAttack(e, Player2);
  if (result === 2) {
    return result;
  } else {
    if (Player2.board.allSunk()) {
      announceWinner('Player');
      Player2Board.removeEventListener('click', handleCellClick);
      return result;
    }
    computerAttack();

    if (Player1.board.allSunk()) {
      announceWinner('PC');
      Player2Board.removeEventListener('click', handleCellClick);
      return result;
    }
  }
  return;
};

function missCheck(player, x, y) {
  const missed = player.board.missed;
  let result = false;
  missed.forEach((element) => {
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
  hit.forEach((element) => {
    if (element[0] === x && element[1] === y) {
      result = true;
      return;
    }
  });
  return result;
}

function shipCheck(player, x, y) {
  if (player.board.shipCheck(x, y)) {
    return true;
  } else {
    return false;
  }
}

function cellAttack(event, player) {
  if (
    event.target.dataset.y === undefined ||
    event.target.dataset.x === undefined
  ) {
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
  let randomCoordX;
  let randomCoordY;
  if (enemyAttackQueue.length > 0) {
    const coords = enemyAttackQueue.shift();
    [randomCoordX, randomCoordY] = coords;
  } else {
    randomCoordX = Math.floor(Math.random() * 10);
    randomCoordY = Math.floor(Math.random() * 10);
  }

  let result = Player1.board.receiveAttack(randomCoordX, randomCoordY);
  while (result === 2) {
    if (enemyAttackQueue.length > 0) {
      const target = enemyAttackQueue.shift();
      [randomCoordX, randomCoordY] = target;
    } else {
      randomCoordX = Math.floor(Math.random() * 10);
      randomCoordY = Math.floor(Math.random() * 10);
    }
    result = Player1.board.receiveAttack(randomCoordX, randomCoordY);
  }

  if (result === true) {
    const nextCoords = [
      [randomCoordX + 1, randomCoordY],
      [randomCoordX - 1, randomCoordY],
      [randomCoordX, randomCoordY + 1],
      [randomCoordX, randomCoordY - 1],
    ];
    nextCoords.forEach((element) => enemyAttackQueue.push(element));
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
    orientation = 'vertical';
  } else {
    orientation = 'horizontal';
  }

  if (orientation === 'vertical') {
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

export {
  Player1,
  Player2,
  initializeGame,
  initializeEventListeners,
  missCheck,
  hitCheck,
  shipCheck,
  randomCoordShip,
  initializeEventListenersStart,
};
