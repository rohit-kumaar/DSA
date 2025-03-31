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

  for (let i = start; i <= end; i++) {
    arr[i] = temp[i];
  }
}

function mergeSort(arr, start, end, temp) {
  if (start >= end) return;

  let mid = Math.floor(start + (end - start) / 2);

  // sort left side
  mergeSort(arr, start, mid, temp);

  // sort right side
  mergeSort(arr, mid + 1, end, temp);

  // merge the array
  merge(arr, start, mid, end, temp);
}

function distinctAverages(arr) {
  if (arr.length < 2) return 0;

  const temp = new Array(arr.length);
  let start = 0;
  let end = arr.length - 1;

  mergeSort(arr, start, end, temp);

  const uniqueAverages = new Set();

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    uniqueAverages.add(avg);
    left++;
    right--;
  }

  return uniqueAverages.size;
}

const arr = [4, 1, 4, 0, 3, 5];
// const arr = []
const res = distinctAverages(arr);
console.log(res);
