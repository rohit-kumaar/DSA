function sortArr(arr) {
  const len = arr.length;
  const idx = len - 1;
  const result = new Array(len);
  let start = 0;
  let end = idx;
  let resultIdx = idx;

  while (end >= start) {
    let leftArr = arr[start];
    let rightArr = arr[end];
    console.log(leftArr, rightArr);

    if (leftArr > rightArr) {
      result[resultIdx] = leftArr;
      resultIdx--;
      start++;
    } else {
      result[resultIdx] = rightArr;
      resultIdx--;
      end--;
    }
  }

  return result;
}

const arr = [4, 1, 0, 3, 10];
const sortArrResult = sortArr(arr);
console.log(sortArrResult);
