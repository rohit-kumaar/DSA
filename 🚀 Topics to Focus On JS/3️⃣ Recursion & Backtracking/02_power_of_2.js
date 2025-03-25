function powerOfTwo(n) {
  if (n === 0) return 1;
  return 2 * powerOfTwo(n - 1);
}

const res = powerOfTwo(10);
console.log(res);
