function maxSumSubArray(arr, w) {
  const len = arr.length;

  if (w > len) return null;

  let curr = 0;
  for (let i = 0; i < w; i++) {
    curr = curr + arr[i];
  }

  let max = curr;
  for (let i = w; i < len; i++) {
    curr = curr - arr[i - w] + arr[i];

    if (curr > max) {
      max = curr;
    }
  }

  return max;
}

const arr = [3, 19, 2, 7, 5, 6, 12];
const window = 4;
const res = maxSumSubArray(arr, window);
console.log(res);
