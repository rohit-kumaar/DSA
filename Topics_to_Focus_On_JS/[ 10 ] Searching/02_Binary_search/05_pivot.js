function pivot(arr) {
  let startIdx = 0;
  let endIdx = arr.length;

  while (startIdx < endIdx) {
    let midIdx = Math.floor((startIdx + endIdx) / 2);

    if (arr[midIdx] >= arr[0]) {
      startIdx = midIdx + 1;
    } else {
      endIdx = midIdx;
    }
  }

  return arr[startIdx];
}

const arr = [6, 7, 8, 9, 1, 2, 3, 4, 5];
const res = pivot(arr);
console.log(res);
