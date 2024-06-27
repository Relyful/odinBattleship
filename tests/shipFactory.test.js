import shipFactory from "../src/modules/shipFactory"

test("Creates object with correct keys and values.", () => {
  const testObject = new shipFactory(4);
  expect(testObject).toEqual({length: 4});
});

test("Ship sinks after getting as many hits as is it's length.", () => {
  const testObject = new shipFactory(2);
  testObject.hit();
  testObject.hit();
  expect(testObject.sunk).toBeTruthy();
});