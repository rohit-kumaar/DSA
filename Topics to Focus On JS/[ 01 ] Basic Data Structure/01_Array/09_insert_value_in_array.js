function findInsertPosition(arr, target) {
  const len = arr.length;
  const idx = len - 1;
  let start = 0;
  let end = idx;

  while (end >= start) {
    let mid = Math.floor(start + (end - start) / 2);
    if (arr[mid] === target) return mid;
    target > arr[mid] ? (start = mid + 1) : (end = mid - 1);
  }

  return start;
}

function searchInsert(arr, target) {
  const position = findInsertPosition(arr, target);

  const len = arr.length;
  const newArr = new Array(len + 1);

  for (let i = 0, j = 0; i <= len; i++) {
    newArr[i] = i === position ? target : arr[j++];
  }

  return newArr;
}

const arr = [1, 3, 5, 6];
const target = 2;
const res = searchInsert(arr, target);
console.log(res);
