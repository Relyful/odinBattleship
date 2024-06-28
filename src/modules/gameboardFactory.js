import shipFactory from "./shipFactory";

export default class gameboard {
  #gameboard = Array.from({ length: 10 }, () => Array(10).fill(0));
  #missed = [];
  #hit = [];
  #allShips = [];

  gameboardStatus(x,y) {
    console.log(this.#gameboard[x][y]);
  };

  placeShip(shipSize, startCoord1, startCoord2, endCoord1, endCoord2) {
    const newShip = new shipFactory(shipSize);
    this.#allShips.push(newShip);
    if (startCoord1 === endCoord1 && startCoord2 === endCoord2) {
      this.#gameboard[startCoord1][startCoord2] = newShip;
      return true;
    } else if (startCoord1 === endCoord1 && startCoord2 !== endCoord2) {
      const size = endCoord2 - startCoord2;
      for (let i = 0; i <= size; i++) {
        this.#gameboard[startCoord1][startCoord2 + i] = newShip;        
      }
    } else if (startCoord1 !== endCoord1 && startCoord2 === endCoord2) {
      const size = endCoord1 - startCoord1;
      for (let i = 0; i <= size; i++) {
        this.#gameboard[startCoord1 + i][startCoord2 ] = newShip;        
      }
    }
  };

  recieveAttack(coord1, coord2) {
    if (this.#gameboard[coord1][coord2] !== 0) {
      const ship = this.#gameboard[coord1][coord2];
      this.#hit.push([coord1, coord2]);
      ship.hit();
      return true;
    } else {
      this.#missed.push([coord1, coord2]);
      return false
    }
  };

  allSunk() {
    let status = true;
    this.#allShips.forEach((element) => {
      if (!element.sunk) {
        status = false
        return;
      }
    });
    return status;
  }
}
