function slidingWindow(arr, w) {
  const len = arr.length;

  if (w > len) return null;

  let curr = 0;
  for (let i = 0; i < w; i++) {
    curr = curr + arr[i];
  }

  let max = curr;
  for (let i = 1; i <= len - w; i++) {
    curr = curr - arr[i - 1] + arr[i + w - 1];

    if (curr > max) {
      max = curr;
    }
  }

  return max;
}

const arr = [3, 19, 2, 7, 5, 6, 12];
const window = 4;
const res = slidingWindow(arr, window);
console.log(res);
