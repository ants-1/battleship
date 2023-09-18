import Ship from '../modules/ship';

test('Create new ship with a length of 2', () => {
  expect(Ship(2).length).toBe(2);
});

test('Ship with a length of 3 doesn\'t sink after 2 hit', () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});

test('Sink ship after 4 hits', () => {
  const ship = Ship(4);
  ship.hit();
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});
