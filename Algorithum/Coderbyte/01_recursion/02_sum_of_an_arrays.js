// const input = new Array(9000).fill(1);

// const withoutRecursion = (array) => {
//   if (array.length === 0) return 0;
//   let rest = array.slice(1);
//   return array[0] + withoutRecursion(rest);
// };

// console.time();
// console.log("withoutRecursion([1, 5, 7, -2])", withoutRecursion([1, 5, 7, -2]));
// console.log(sum(input));
// console.timeEnd();

const sum = (array) => {
  return _sum(array, 0);
};

const _sum = (array, index) => {
  if (index === array.length) return 0;
  return array[index] + _sum(array, index + 1);
};

// console.time();
console.log("sum([1, 5, 7, -2])", sum([1, 5, 7, -2]));
// console.log(sum(input));
// console.timeEnd();
