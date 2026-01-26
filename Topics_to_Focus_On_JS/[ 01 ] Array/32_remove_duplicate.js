const arr = [1, 2, 2, 3, 1];

// function removeDuplicate(arr) {
//   return [...new Set(arr)];
// }

function removeDuplicate(arr) {
  const unique = [];

  for (const item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }

  return unique;
}

const res = removeDuplicate(arr);
console.log(res);
