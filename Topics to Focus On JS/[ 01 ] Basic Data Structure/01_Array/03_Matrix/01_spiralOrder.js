function spiralOrder(arr) {
  const row = arr.length;
  const col = arr[0].length;

  let count = 0;
  const total = row * col;

  // index initialization
  let left = 0;
  let top = 0;
  let bottom = row - 1;
  let right = col - 1;

  // answer
  const ans = [];

  while (count < total) {
    // left to right
    for (let i = left; count < total && i <= right; i++) {
      ans.push(arr[top][i]);
      count++;
    }
    top++;

    // top to bottom
    for (let i = top; count < total && i <= bottom; i++) {
      ans.push(arr[i][right]);
      count++;
    }
    right--;

    // right to left
    for (let i = right; count < total && i >= left; i--) {
      ans.push(arr[bottom][i]);
      count++;
    }
    bottom--;

    // bottom to top
    for (let i = bottom; count < total && i >= top; i--) {
      ans.push(arr[i][left]);
      count++;
    }
    left++;
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
