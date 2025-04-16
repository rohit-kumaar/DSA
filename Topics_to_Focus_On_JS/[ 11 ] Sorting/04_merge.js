function merge(arr, start, mid, end, sortedArray) {
  let i = start;
  let j = mid + 1;
  let k = start;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      sortedArray[k] = arr[i];
      k++;
      i++;
    } else {
      sortedArray[k] = arr[j];
      k++;
      j++;
    }
  }

  while (i <= mid) {
    sortedArray[k] = arr[i];
    k++;
    i++;
  }

  while (j <= end) {
    sortedArray[k] = arr[j];
    k++;
    j++;
  }

  for (let i = start; i <= end; i++) {
    arr[i] = sortedArray[i];
  }
}

function mergeSort(arr, start, end, sortedArray) {
  if (start >= end) return;
  let mid = Math.floor((start + end) / 2);
  mergeSort(arr, start, mid, sortedArray); // sort left side
  mergeSort(arr, mid + 1, end, sortedArray); // sort right side
  merge(arr, start, mid, end, sortedArray); // merge both the sorted array
}

const arr = [42, 3, 19, 8, 56, 1];
const start = 0;
const end = arr.length - 1;
const sortedArray = new Array(arr.length);
mergeSort(arr, start, end, sortedArray);
console.log(arr);
