// warps
const a = {
  nextMap: "playerHouseF2",
  nextPos: [5, 5],
};
const b = {
  nextMap: "palletTownMain",
  nextPos: [6, 6],
};

// // taile array
const grid = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 0, 0, 0, a, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1, 1, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, b, b, 1, 1, 1, 1, 1],
];

const playerHouseF1 = {
  height: "128px",
  width: "128px",
  grid: grid,
  src: "/images/maps/palletTown/playerHouseF1.jpg",
};

export default playerHouseF1;
