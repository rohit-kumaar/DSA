function pivot(arr) {
  let startIdx = 0;
  let endIdx = arr.length;
  let midIdx = Math.floor((startIdx + endIdx) / 2);

  while (startIdx < endIdx) {
    if (arr[midIdx] >= arr[0]) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx;
    }
    midIdx = Math.floor((startIdx + endIdx) / 2);
  }

  return arr[startIdx];
}

const arr = [6, 7, 8, 9, 1, 2, 3, 4, 5];
const res = pivot(arr);
console.log(res);
