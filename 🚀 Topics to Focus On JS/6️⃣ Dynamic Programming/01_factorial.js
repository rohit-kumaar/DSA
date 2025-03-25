function factorial(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0) return 1;
  memo[n] = n * factorial(n - 1, memo);
  return memo[n];
}

const res = factorial(10);
console.log(res);
