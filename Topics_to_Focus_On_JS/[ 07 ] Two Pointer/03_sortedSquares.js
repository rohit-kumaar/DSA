function sortedSquares(arr) {
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while (left <= right) {
    if (Math.abs(arr[left]) > Math.abs(arr[right])) {
      result.push(arr[left] ** 2);
      left++;
    } else {
      result.push(arr[right] ** 2);
      right--;
    }
  }
  return result.reverse();
}

const arr = [-4, -1, 0, 3, 10];
const res = sortedSquares(arr);
console.log(res);
