const MOVES = {
  A: 1, X: 1, // ROCK
  B: 2, Y: 2, // PAPER
  C: 3, Z: 3, // SCISSORS
};

const BONUS = { WIN: 6, DRAW: 3, LOSE: 0 };

const SCORES = {
  A_Z: BONUS.LOSE + MOVES.Z, B_X: BONUS.LOSE + MOVES.X, C_Y: BONUS.LOSE + MOVES.Y,
  A_X: BONUS.DRAW + MOVES.X, B_Y: BONUS.DRAW + MOVES.Y, C_Z: BONUS.DRAW + MOVES.Z,
  A_Y: BONUS.WIN + MOVES.Y,  B_Z: BONUS.WIN + MOVES.Z,  C_X: BONUS.WIN + MOVES.X,

  Z_A: BONUS.WIN + MOVES.Y,  Z_B: BONUS.WIN + MOVES.Z,  Z_C: BONUS.WIN + MOVES.X,
  Y_A: BONUS.DRAW + MOVES.X, Y_B: BONUS.DRAW + MOVES.Y, Y_C: BONUS.DRAW + MOVES.Z,
  X_A: BONUS.LOSE + MOVES.Z, X_B: BONUS.LOSE + MOVES.X, X_C: BONUS.LOSE + MOVES.Y,
};

module.exports.run = data => {
  console.log(data.reduce((acc, line) => {
    const [a, b] = line.split(' ');
    acc.q1 += SCORES[a + '_' + b];
    acc.q2 += SCORES[b + '_' + a];

    return acc;
  }, {q1: 0, q2: 0}));
};
