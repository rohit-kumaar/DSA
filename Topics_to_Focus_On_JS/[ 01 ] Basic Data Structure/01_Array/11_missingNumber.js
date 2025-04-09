function missingNumber(arr) {
  const len = arr.length;
  expectedSum = (len * (len + 1)) / 2;

  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum = actualSum + arr[i];
  }
  return expectedSum - actualSum;
}

const arr = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const res = missingNumber(arr);
console.log(res);
