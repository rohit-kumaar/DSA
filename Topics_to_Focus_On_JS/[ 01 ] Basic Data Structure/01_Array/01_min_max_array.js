function getMin(arr) {
  if (arr.length === 0) return null;

  let minNum = Infinity;
  for (let i = 0; i < arr.length; i++) {
    minNum = Math.min(minNum, arr[i]);
  }

  return minNum;
}

function getMax(arr) {
  if (arr.length === 0) return null;

  let maxNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    maxNum = Math.max(maxNum, arr[i]);
  }

  return maxNum;
}

// const arr = [];
const arr = [34, 7, 23, 32, 5, 62];

console.log("Minimum value is:", getMin(arr));
console.log("Maximum value is:", getMax(arr));
