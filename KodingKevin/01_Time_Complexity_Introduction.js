const sumUpTo = (n) => {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total = total + i;
  }

  return total;
};

console.time();
console.log(sumUpTo(5));
console.timeEnd();

const sumUpToV2 = (n) => {
  return (n * (n + 1)) / 2;
};

console.time();
console.log(sumUpToV2(5));
console.timeEnd();
