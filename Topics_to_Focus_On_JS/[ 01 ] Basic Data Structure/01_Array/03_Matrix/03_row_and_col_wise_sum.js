function twoDMatrix(arr, row, col) {
  const matrix = Array.from({ length: row }, () => new Array(col).fill(0));
  let idx = 0;

  // print row wise
  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      matrix[m][n] = arr[idx++];
    }
  }

  // row wise sum
  for (let m = 0; m < row; m++) {
    let sum = 0;
    for (let n = 0; n < col; n++) {
      sum = sum + matrix[m][n];
    }
    console.log(sum);
  }

  // column wise sum
  for (let n = 0; n < col; n++) {
    let sum = 0;
    for (let m = 0; m < row; m++) {
      sum = sum + matrix[m][n];
    }
    console.log(sum);
  }

  return matrix;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const row = 3;
const col = 3;
const res = twoDMatrix(arr, row, col);
console.log(res);
