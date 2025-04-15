function searchMatrix(matrix, target) {
  const row = matrix.length;
  const col = matrix[0].length;

  let rowIdx = 0;
  let colIdx = col - 1;

  while (rowIdx < row && colIdx >= 0) {
    const element = matrix[rowIdx][colIdx];

    if (element === target) return 1;

    if (element < target) {
      rowIdx++;
    } else {
      colIdx--;
    }
  }

  return 0;
}

const matrix = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];
const target = 5;
const res = searchMatrix(matrix, target);
console.log(res);
