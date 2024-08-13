export default class shipFactory {
  #hit = 0;
  #sunk = false;

  constructor(length) {
    this.length = length;
  }

  get sunk() {
    return this.#sunk;
  }

  hit() {
    this.#hit += 1;
    this.#isSunk();
  }

  #isSunk() {
    if (this.#hit >= this.length) {
      this.#sunk = true;
    }
  }
}
