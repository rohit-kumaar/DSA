function threeSum(arr) {
  const size = arr.length;
  let result = [];

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      for (let k = i + 2; k < size; k++) {
        if (arr[i] + arr[j] + arr[k] === 0) {
          result.push([arr[i], arr[j], arr[k]]);
        }
      }
    }
  }

  return result;
}

let arr = [-1, 0, 1, 2, -1, -4];

const result = threeSum(arr);
console.log(result);
