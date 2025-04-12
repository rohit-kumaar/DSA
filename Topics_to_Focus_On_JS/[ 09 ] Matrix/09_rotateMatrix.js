function rotateMatrix(matrix) {
  const len = matrix.length;

  matrix.reverse();

  for (let m = 0; m < len; m++) {
    for (let n = m + 1; n < len; n++) {
      [matrix[m][n], matrix[n][m]] = [matrix[n][m], matrix[m][n]];
    }
  }

  return matrix;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const res = rotateMatrix(matrix);
console.log(res);
