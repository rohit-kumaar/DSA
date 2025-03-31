function merge(arr, s, e) {
  let mid = Math.floor(s + (e - s) / 2);

  const leftArr = arr.slice(s, mid + 1);
  const rightArr = arr.slice(mid + 1, e + 1);

  let i = 0, j = 0, k = s;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k++] = leftArr[i++];
    } else {
      arr[k++] = rightArr[j++];
    }
  }

  while (i < leftArr.length) {
    arr[k++] = leftArr[i++];
  }

  while (j < rightArr.length) {
    arr[k++] = rightArr[j++];
  }
}

function mergeSort(arr, s, e) {
  if (s >= e) return;

  let mid = Math.floor(s + (e - s) / 2);

  // Sort left part
  mergeSort(arr, s, mid);

  // Sort right part
  mergeSort(arr, mid + 1, e);

  merge(arr, s, e);
}

const arr = [42, 3, 19, 8, 56, 1];
let start = 0;
let end = arr.length - 1;
mergeSort(arr, start, end);
console.log(arr);
