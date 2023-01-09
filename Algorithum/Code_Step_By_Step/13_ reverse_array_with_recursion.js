const arr = [23, 41, 26, 32, 50, 98];
let temp;

function reverseMethod(arr, start, end) {
  console.log(arr);
  if (start <= end) {
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reverseMethod(arr, start + 1, end - 1);
  }
}
reverseMethod(arr, 0, arr.length - 1);
