const arr = [1, 2, 3, 4, 5];

function sumOfArray(arr) {
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    ans = ans + arr[i];
  }

  return ans;
}

console.log(sumOfArray(arr));
