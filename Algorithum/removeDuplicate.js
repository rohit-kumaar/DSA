let arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
let result = [];

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    let exists = false;
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result.push(arr[i]);
    }
  }
  return result;
}
removeDuplicate(arr);
console.log(result);
