import gameboard from "../src/modules/gameboardFactory";

test('gameBoard allSunk reports true when all ships sank.', () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, "horizontal", 0,0);
  testBoard.receiveAttack(0,0);
  expect(testBoard.allSunk()).toBeTruthy();
});

test("gameBoard allSunk reports false when not all ships sank.", () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, "horizontal", 0, 0);
  testBoard.placeShip(3, "horizontal", 3, 0);
  testBoard.receiveAttack(0,0);
  expect(testBoard.allSunk()).toBeFalsy();
});

test("receiveAttack() reports false when ship NOT hit", () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, "horizontal", 0,0);
  expect(testBoard.receiveAttack(0,3)).toBeFalsy();
});

test("receiveAttack() reports true when ship hit", () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, "horizontal", 0, 0);
  expect(testBoard.receiveAttack(0,0)).toBeTruthy();
});

test("receiveAttack() reports 2 when duplicate attack detected.", () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, "horizontal", 0, 0);
  testBoard.receiveAttack(0,0);
  expect(testBoard.receiveAttack(0,0)).toEqual(2);
})

test("shipCheck() returns true if given coordinates contain ship", () => {
  const testBoard = new gameboard();
  testBoard.placeShip(2, "horizontal", 0, 0);
  expect(testBoard.shipCheck(0, 1)).toBeTruthy();
})