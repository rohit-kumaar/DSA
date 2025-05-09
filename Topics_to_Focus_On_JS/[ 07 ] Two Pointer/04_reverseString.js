function reverseString(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr;
}

const arr = ["h", "e", "l", "l", "o"];
const res = reverseString(arr);
console.log(res);
