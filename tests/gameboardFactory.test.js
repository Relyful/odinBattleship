import gameboard from "../src/modules/gameboardFactory";

test('gameBoard allSunk reports true when all ships sank.', () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, 0,0,0,0);
  testBoard.recieveAttack(0,0);
  expect(testBoard.allSunk()).toBeTruthy();
});

test("gameBoard allSunk reports false when not all ships sank.", () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, 0,0,0,0);
  testBoard.placeShip(3, 3,0,3,2);
  testBoard.recieveAttack(0,0);
  expect(testBoard.allSunk()).toBeFalsy();
});

test("receiveAttack() reports false when ship NOT hit", () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, 0,0,0,0);
  expect(testBoard.recieveAttack(0,3)).toBeFalsy();
});

test("receiveAttack() reports true when ship hit", () => {
  const testBoard = new gameboard();
  testBoard.placeShip(1, 0,0,0,0);
  expect(testBoard.recieveAttack(0,0)).toBeTruthy();
});