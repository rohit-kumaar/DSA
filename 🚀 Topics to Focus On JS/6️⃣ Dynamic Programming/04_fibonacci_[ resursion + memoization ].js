// ✅ Recursion + memoization
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n === 0 || n === 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

const res = fib(6);
console.log(res);
