const arr = [5, 7, -2, 10, 22, -2, 0, 5, 22, 1];
const search = 10;

function linearSearch(arr, search) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === search) {
      return true;
    }
  }
  return false;
}

const result = linearSearch(arr, search);
if (result) {
  console.log("Found");
} else {
  console.log("NOT Found");
}
