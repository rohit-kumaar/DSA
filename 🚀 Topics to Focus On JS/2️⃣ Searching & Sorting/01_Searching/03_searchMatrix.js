function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  const m = matrix.length;
  const n = matrix[0].length;
  console.log(`${m} X ${n}`);
  let start = 0;
  let end = m * n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let i = Math.floor(mid / n);
    let j = mid % n;

    let midNum = matrix[i][j];

    if (target === midNum) return { row: i, column: j };
    target > midNum ? (start = mid + 1) : (end = mid - 1);
  }
}

const matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
const target = 3;
const res = searchMatrix(matrix, target);
console.log(res);
