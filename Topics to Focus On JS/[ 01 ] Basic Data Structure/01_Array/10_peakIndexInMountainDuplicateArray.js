function peakIndex(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (end > start) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid + 1] > arr[mid]) {
      start = mid + 1;
    } else if (arr[mid + 1] < arr[mid]) {
      end = mid;
    } else {
      end--;
    }
  }

  return start;
}

const arr = [1, 3, 7, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1];
const res = peakIndex(arr);
console.log("Peak Index", res);
console.log("Peak Value", arr[res]);
