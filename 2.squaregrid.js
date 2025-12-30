/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
  let count = 0;

  for (let i = 0; i <= grid.length - 3; i++) {
    for (let j = 0; j <= grid[0].length - 3; j++) {
      if (isMagic(grid, i, j)) {
        count++;
      }
    }
  }
  return count;
};

function isMagic(grid, r, c) {
  const seen = new Set();

  for (let i = r; i < r + 3; i++) {
    for (let j = c; j < c + 3; j++) {
      const val = grid[i][j];
      if (val < 1 || val > 9 || seen.has(val)) return false;
      seen.add(val);
    }
  }

  const sum = grid[r][c] + grid[r][c + 1] + grid[r][c + 2];

  for (let i = r; i < r + 3; i++) {
    if (
      grid[i][c] + grid[i][c + 1] + grid[i][c + 2] !== sum
    ) return false;
  }

  for (let j = c; j < c + 3; j++) {
    if (
      grid[r][j] + grid[r + 1][j] + grid[r + 2][j] !== sum
    ) return false;
  }

  if (
    grid[r][c] + grid[r + 1][c + 1] + grid[r + 2][c + 2] !== sum ||
    grid[r][c + 2] + grid[r + 1][c + 1] + grid[r + 2][c] !== sum
  ) return false;

  return true;
}
