function sumOfArray(arr, i = 0) {
  if (i >= arr.length) return 0;
  return arr[i] + sumOfArray(arr, i + 1);
}

const arr = [1, 2, 3, 4, 5];
console.log(sumOfArray(arr));
