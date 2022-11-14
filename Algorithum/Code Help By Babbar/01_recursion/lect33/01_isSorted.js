const array = [3, 5, 6, 2, 8];
const size = array.length;

function isSorted(arr, size) {
  if (size === 0 || size === 1) return `Sorted`;

  if (arr[size - 1] > arr[size]) return `NOT Sorted`;

  return isSorted(arr, size - 1);
}

console.log("isSorted", isSorted(array, size));
