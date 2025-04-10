function printInRow(arr) {
  const row = 3;
  const col = 3;
  const t = Math.floor(Math.sqrt(arr.length));
  const matrix = Array.from({ length: t }, () => new Array(t).fill(0));
  let count = 0;

  for (let m = 0; m < row; m++) {
    for (let n = 0; n < col; n++) {
      matrix[m][n] = arr[count];
      count++;
    }
  }

  return matrix;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const res = printInRow(arr);
console.log(res);
