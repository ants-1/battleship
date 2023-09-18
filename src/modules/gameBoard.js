const GameBoard = () => {
  const BOARD_SIZE = 10;
  const board = [];
  const ships = [];

  const fillBoard = () => {
    for (let row = 0; row < BOARD_SIZE; row++) {
      board[row] = [];
      for (let col = 0; col < BOARD_SIZE; col++) {
        board[row][col] = { isShip: false, hasSunk: false };
      }
    }
  };

  fillBoard();

  const placeShip = (row, col, orientation, ship) => {
    ships.push(ship);
    const shipSize = ship.length;

    if (orientation === 'horizontal') {
      for (let y = col; y < shipSize + col; y++) {
        board[row][y].isShip = true;
      }
    } else if (orientation === 'vertical') {
      for (let x = row; x < shipSize + row; x++) {
        board[x][col].isShip = true;
      }
    }
  };

  const receiveAttack = (row, col, ship) => {
    const cell = board[row][col];

    if (cell.isShip && !cell.hasSunk) {
      ship.hit();
      cell.hasSunk = true;
    }
  };

  const checkAllShipsSunk = (playerShips) => playerShips.every((ship) => ship.isSunk());

  fillBoard();

  return {
    board,
    BOARD_SIZE,
    fillBoard,
    placeShip,
    receiveAttack,
    checkAllShipsSunk,
  };
};

export default GameBoard;
