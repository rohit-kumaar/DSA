const nums = [1, 4, 2, 4, 1, 4, 7, 2, 3, 6, 3, 1, 3, 5, 6, 10];

const obj = {};

for (const num of nums) {
  obj[num] = (obj[num] ?? 0) + 1;
}

console.log(obj);
