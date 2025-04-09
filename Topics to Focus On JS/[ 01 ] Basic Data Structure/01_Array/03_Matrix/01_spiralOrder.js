function spiralOrder(arr) {
  const row = arr.length;
  const col = arr[0].length;

  let count = 0;
  const total = row * col;

  // index initialization
  let startingRow = 0;
  let startingCol = 0;
  let endingRow = row - 1;
  let endingCol = col - 1;

  // answer
  const ans = [];

  while (count < total) {
    // print starting row
    for (let i = startingCol; count < total && i <= endingCol; i++) {
      ans.push(arr[startingRow][i]);
      count++;
    }
    startingRow++;

    // print ending column
    for (let i = startingRow; count < total && i <= endingRow; i++) {
      ans.push(arr[i][endingCol]);
      count++;
    }
    endingCol--;

    // print ending row
    for (let i = endingCol; count < total && i >= startingCol; i--) {
      ans.push(arr[endingRow][i]);
      count++;
    }
    endingRow--;

    // print starting column
    for (let i = endingRow; count < total && i >= startingRow; i--) {
      ans.push(arr[i][startingCol]);
      count++;
    }
    startingCol++;
  }

  return ans;
}

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const res = spiralOrder(matrix);
console.log(res);
