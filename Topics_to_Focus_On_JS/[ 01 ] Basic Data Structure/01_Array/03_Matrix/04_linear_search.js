function isPresent(matrix, row, col, target) {
  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      if (matrix[m][n] === target) {
        return 1;
      }
    }
  }

  return 0;
}

function linearSearch(arr, row, col) {
  const matrix = Array.from({ length: row }, () => new Array(col).fill(0));
  let idx = 0;

  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      matrix[m][n] = arr[idx++];
    }
  }

  const target = 4;

  return isPresent(matrix, row, col, target) ? "Element Found" : "Not Found";
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const row = 3;
const col = 3;
const res = linearSearch(arr, row, col);
console.log(res);
