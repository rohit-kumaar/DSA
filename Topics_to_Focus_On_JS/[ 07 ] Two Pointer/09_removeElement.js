function removeElement(arr, val) {
  let i = 0;
  let n = arr.length;

  while (i < n) {
    if (arr[i] === val) {
      arr[i] = arr[n - 1];
      n--;
    } else {
      i++;
    }
  }

  return n;
}

const arr = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 3;
const res = removeElement(arr, val);
console.log(res);
