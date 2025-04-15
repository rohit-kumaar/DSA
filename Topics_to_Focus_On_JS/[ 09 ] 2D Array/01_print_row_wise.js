function printInRow(arr, row, col) {
  const matrix = Array.from({ length: row }, () => new Array(col).fill(0));
  let idx = 0;

  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      matrix[m][n] = arr[idx++];
    }
  }

  return matrix;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const row = 3;
const col = 3;
const res = printInRow(arr, row, col);
console.log(res);
