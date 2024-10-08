import shipFactory from './shipFactory';

export default class gameboard {
  #gameboard = Array.from({ length: 10 }, () => Array(10).fill(0));
  #missed = [];
  #hit = [];
  #allShips = [];

  gameboardStatus(x, y) {
    console.log(this.#gameboard[x][y]);
  }

  placeShip(shipSize, orientation, startCoord1, startCoord2) {
    const newShip = new shipFactory(shipSize);
    const proposedCells = [];

    //Add all proposed coords for new ship to array to check for conflicts and out of bounds
    for (let i = 0; i < shipSize; i++) {
      if (orientation === 'vertical') {
        proposedCells.push([startCoord1 + i, startCoord2]);
      } else if (orientation === 'horizontal') {
        proposedCells.push([startCoord1, startCoord2 + i]);
      }
    }

    // Check for conflicts and out of bounds
    for (let i = 0; i < proposedCells.length; i++) {
      const element = proposedCells[i];
      if (element[0] < 0 || element[0] > 9) {
        return 0;
      } else if (element[1] < 0 || element[1] > 9) {
        return 0;
      } else if (this.#gameboard[element[0]][element[1]] !== 0) {
        return 0;
      }
    }

    //Place ship to coresponding cells
    this.#allShips.push(newShip);
    proposedCells.forEach((element) => {
      this.#gameboard[element[0]][element[1]] = newShip;
    });
    return 1;
  }

  receiveAttack(coord1, coord2) {
    if (coord1 > 9 || coord1 < 0 || coord2 > 9 || coord2 < 0) {
      return 2;
    } else {
      if (this.#gameboard[coord1][coord2] !== 0) {
        const ship = this.#gameboard[coord1][coord2];
        if (arrayIncludesSubArray(this.#hit, [coord1, coord2])) {
          return 2;
        } else {
          this.#hit.push([coord1, coord2]);
          ship.hit();
          return true;
        }
      } else {
        if (arrayIncludesSubArray(this.#missed, [coord1, coord2])) {
          return 2;
        } else {
          this.#missed.push([coord1, coord2]);
          return false;
        }
      }
    }
  }

  allSunk() {
    let status = true;
    this.#allShips.forEach((element) => {
      if (!element.sunk) {
        status = false;
        return;
      }
    });
    return status;
  }

  shipCheck(x, y) {
    if (this.#gameboard[x][y] !== 0) {
      return true;
    } else {
      return false;
    }
  }

  get missed() {
    return this.#missed;
  }

  get hit() {
    return this.#hit;
  }
}

function arrayIncludesSubArray(arr, subArr) {
  return arr.some(
    (item) =>
      Array.isArray(item) &&
      item.length === subArr.length &&
      item.every((val, index) => val === subArr[index])
  );
}
