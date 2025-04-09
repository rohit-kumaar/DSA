function merge(arr, start, mid, end, temp) {
  let i = start;
  let j = mid + 1;
  let k = start;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp[k] = arr[i];
      k++;
      i++;
    } else {
      temp[k] = arr[j];
      k++;
      j++;
    }
  }

  while (i <= mid) {
    temp[k] = arr[i];
    k++;
    i++;
  }

  while (j <= end) {
    temp[k] = arr[j];
    k++;
    j++;
  }

  // Copy sorted elements back to original array
  for (let i = start; i <= end; i++) {
    arr[i] = temp[i];
  }
}

function mergeSort(arr, start, end, temp) {
  if (start >= end) return; // base case

  let mid = Math.floor(start + (end - start) / 2);

  // sort left side
  mergeSort(arr, start, mid, temp);

  // sort right side
  mergeSort(arr, mid + 1, end, temp);

  // merge the array
  merge(arr, start, mid, end, temp);
}

const arr = [42, 3, 19, 8, 56, 1];
let start = 0;
let end = arr.length - 1;
const temp = new Array(arr.length);
mergeSort(arr, start, end, temp);
console.log(arr);
