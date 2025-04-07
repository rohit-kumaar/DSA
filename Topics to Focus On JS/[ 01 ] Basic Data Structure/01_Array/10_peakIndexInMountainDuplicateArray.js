function peakIndex(arr) {
  let startIdx = 0;
  let endIdx = arr.length - 1;

  while (startIdx < endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);

    if (arr[midIdx] < arr[midIdx + 1]) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx;
    }
  }

  return startIdx;
}

const arr = [1, 3, 7, 6, 6, 6, 6, 6, 6, 6, 5, 4, 3, 2, 1];
const res = peakIndex(arr);
console.log("Peak Index", res);
console.log("Peak Value", arr[res]);
