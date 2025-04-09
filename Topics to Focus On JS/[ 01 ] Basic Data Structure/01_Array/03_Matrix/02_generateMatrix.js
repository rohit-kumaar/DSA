function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;
  let count = 1;

  while (left <= right && top <= bottom) {
    // left to right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = count++;
    }
    top++;

    // top to bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = count++;
    }
    right--;

    // right to left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = count++;
    }
    bottom--;

    // bottom to top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = count++;
    }
    left++;
  }

  return matrix;
}

const n = 3;
const res = generateMatrix(n);
console.log(res);
