function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
}

const arr = [7, 5, 4, 1, 2];
const result = bubbleSort(arr);
console.log(result);
