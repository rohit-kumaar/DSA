function twoSum(arr, target) {
  /* ----------------------------------------- */
  /* START : Two Pointer only for sorted array */
  /* ----------------------------------------- */
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  /* ----------------------------------------- */
  /* END   : Two Pointer only for sorted array */
  /* ----------------------------------------- */

  /* -------------------------- */
  /* START : For unsorted array */
  /* -------------------------- */
  //   const map = new Map();
  //   for (let i = 0; i < arr.length; i++) {
  //     let remainingSum = target - arr[i];

  //     if (map.has(remainingSum)) {
  //       return [map.get(remainingSum), i];
  //     }

  //     map.set(arr[i], i);
  //   }
  /* -------------------------- */
  /* END   : For unsorted array */
  /* -------------------------- */
}

const numbers = [2, 7, 11, 15];
const target = 9;
const res = twoSum(numbers, target);
console.log(res);
