function wavePrint(arr, row, col) {
  const matrix = Array.from({ length: row }, () => new Array(col).fill(0));
  let count = 0;

  for (let n = 0; n < col; n++) {
    if ((n & 1) === 1) {
      for (let m = row - 1; m >= 0; m--) {
        matrix[m][n] = arr[count++];
      }
    } else {
      for (let m = 0; m < row; m++) {
        matrix[m][n] = arr[count++];
      }
    }
  }

  return matrix;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const row = 3;
const col = 4;
const res = wavePrint(arr, row, col);
console.log(res);
