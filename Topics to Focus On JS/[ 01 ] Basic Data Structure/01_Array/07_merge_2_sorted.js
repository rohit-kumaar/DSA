const arr1 = [1, 2, 3];
const m = 3;
const arr2 = [2, 5, 6, 0, 0, 0];
const n = 3;

function merge(arr1, m, arr2, n, i = m - 1, j = n - 1, k = m + n - 1) {
  while (i >= 0 && j >= 0) {
    arr1[k--] = arr1[i] > arr2[j] ? arr1[i--] : arr2[j--];
  }

  while (j >= 0) {
    arr1[k--] = arr2[j--];
  }
}

merge(arr1, m, arr2, n);
console.log(arr1);
