function findMaxAverage(arr, w) {
  const len = arr.length;
  if (w > len) return null;

  let curr = 0;
  for (let i = 0; i < w; i++) {
    curr += arr[i];
  }

  let max = curr;
  for (let i = w; i < len; i++) {
    curr += arr[i] - arr[i - w];
    max = Math.max(max, curr);
  }

  return max / w;
}

const arr = [1, 12, -5, -6, 50, 3];
const w = 4;
const res = findMaxAverage(arr, w);
console.log(res);
