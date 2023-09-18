import Player from '../modules/player';

test('AI gets coordinates and orientation', () => {
  const player = Player();
  const AICoord = player.getRandomCoordinate();
  const AIOrientation = player.getRandomOrientation();

  expect(AICoord[0]).toBeGreaterThanOrEqual(0);
  expect(AICoord[1]).toBeLessThanOrEqual(9);
  expect(AIOrientation[0]).toBeGreaterThanOrEqual(0);
  expect(AIOrientation[1]).toBeLessThanOrEqual(1);
});
