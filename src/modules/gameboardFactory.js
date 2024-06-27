import shipFactory from "./shipFactory";

export default class gameboard {
  #gameboard = Array(10).fill(Array(10).fill(0));
  #patrolBoat = new shipFactory(2);
  #submarine = new shipFactory(3);
  #destroyer = new shipFactory(3);
  #battleship = new shipFactory(4);
  #carrier = new shipFactory(5);

  constructor() {

  }

  placeShip(shipSize, startCoord1, startCoord2, endCoord1, endCoord2) {
    const newShip = new shipFactory(shipSize);
    if (startCoord1 === endCoord1 && startCoord2 === endCoord2) {
      this.#gameboard[startCoord1][startCoord2] = newShip;
      return true;
    } else if (startCoord1 === endCoord1 && startCoord2 !== endCoord2) {
      const size = endCoord2 - startCoord2;
      for (let i = 0; i <= size; i++) {
        this.#gameboard[startCoord1][startCoord2 + i] = newShip;        
      }
    } else if (startCoord1 !== endCoord1 && startCoord2 === startCoord1) {
      const size = endCoord1 - startCoord1;
      for (let i = 0; i <= size; i++) {
        this.#gameboard[startCoord1 + i][startCoord2 + i] = newShip;        
      }
    }

    this.#gameboard[startCoord1][startCoord2] = newShip;
    this.#gameboard[endCoord1][endCoord2] = newShip;
  }

  recieveAttack(coord1, coord2) {

  }
}
