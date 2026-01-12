const arr = [1, 2, 3, 2, 4, 1, 5, 1, 4];

const countObj = {};

for (const count of arr) {
  countObj[count] = (countObj[count] || 0) + 1;
}

console.log(countObj);
