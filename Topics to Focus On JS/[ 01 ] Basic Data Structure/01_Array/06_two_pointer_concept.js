const arr = [1, 1, 0, 0, 0, 0, 1, 0];

function sortArr(arr, i = 0, j = arr.length - 1) {
  while (i < j) {
    while (arr[i] === 0 && i < j) i++;

    while (arr[j] === 1 && i < j) j--;

    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return arr;
}

const res = sortArr(arr);
console.log(res);
