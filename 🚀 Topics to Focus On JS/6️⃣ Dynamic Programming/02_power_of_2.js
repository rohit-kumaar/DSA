function powerOfTwo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 1;
  memo[n] = 2 * powerOfTwo(n - 1, memo);
  return memo[n];
}

const res = powerOfTwo(10);
console.log(res);
