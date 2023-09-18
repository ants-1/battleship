import GameBoard from '../modules/gameBoard';
import Ship from '../modules/ship';

test('Load board', () => {
  const { board, BOARD_SIZE } = GameBoard();

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      expect(board[row][col]).toEqual({ isShip: false, hasSunk: false });
    }
  }
});

test('Place ship horizontally on board', () => {
  const { board, placeShip } = GameBoard();
  const ship = Ship(2);

  placeShip(0, 0, 'horizontal', ship);

  expect(board[0][0].isShip).toBeTruthy();
  expect(board[0][1].isShip).toBeTruthy();
  expect(board[0][2].isShip).toBeFalsy();
});

test('Place ship vertically on board', () => {
  const { board, placeShip } = GameBoard();
  const ship = Ship(3);

  placeShip(0, 0, 'vertical', ship);

  expect(board[0][0].isShip).toBeTruthy();
  expect(board[1][0].isShip).toBeTruthy();
  expect(board[2][0].isShip).toBeTruthy();
  expect(board[3][0].isShip).toBeFalsy();
});

test('Register hit on ship', () => {
  const { board, receiveAttack, placeShip } = GameBoard();
  const ship = Ship(2);

  placeShip(0, 0, 'horizontal', ship);
  receiveAttack(0, 0, ship);

  expect(board[0][0].hasSunk).toBe(true);
  expect(ship.getHitCount()).toBe(1);
});

test('Ship sinks after 2 hits', () => {
  const ship = Ship(2);
  const { receiveAttack, placeShip } = GameBoard();

  placeShip(0, 0, 'vertical', ship);
  receiveAttack(0, 0, ship);
  receiveAttack(1, 0, ship);

  expect(ship.isSunk).toBeTruthy();
});

test('Check if all ships have sunk', () => {
  const ship1 = Ship(1);
  const ship2 = Ship(1);
  const playerShips = [ship1, ship2];
  const { receiveAttack, placeShip, checkAllShipsSunk } = GameBoard();

  placeShip(0, 0, 'vertical', ship1);
  placeShip(2, 0, 'vertical', ship2);
  receiveAttack(0, 0, ship1);
  receiveAttack(2, 0, ship2);
  expect(checkAllShipsSunk(playerShips)).toBeTruthy();
});
