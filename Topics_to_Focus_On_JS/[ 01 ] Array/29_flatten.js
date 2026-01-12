/* --------------- */
/* START : 01      */
/* --------------- */
const number = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
const result = [];

function flatter(arr) {
  for (const num of arr) {
    if (Array.isArray(num)) {
      flatter(num);
    } else {
      result.push(num);
    }
  }
}

flatter(number);
console.log(result);
/* --------------- */
/* END   : 01      */
/* --------------- */

/* --------------- */
/* START : 02      */
/* --------------- */
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];

function subArrayFlatten(arr, n) {
  const result = [];

  for (const item of arr) {
    if (Array.isArray(item) && n > 0) {
      result.push(...subArrayFlatten(item, n - 1));
    } else {
      result.push(item);
    }
  }

  return result;
}

const ans = subArrayFlatten(arr, 2);
console.log(ans);
/* --------------- */
/* END   : 02      */
/* --------------- */
