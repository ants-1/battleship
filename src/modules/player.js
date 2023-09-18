const Player = () => {
  const getRandomCoordinate = () => [
    Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
  ];

  const getRandomOrientation = () => [
    Math.floor(Math.random() * 2), Math.floor(Math.random() * 2),
  ];

  return {
    getRandomCoordinate,
    getRandomOrientation,
  };
};

export default Player;
