const Ship = (length) => {
  let hits = 0;

  const hit = () => {
    hits += 1;
  };

  const getHitCount = () => hits;

  const isSunk = () => hits === length;

  return {
    length,
    hit,
    getHitCount,
    isSunk,
  };
};

export default Ship;
