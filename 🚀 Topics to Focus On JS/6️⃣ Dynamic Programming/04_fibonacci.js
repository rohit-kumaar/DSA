// ✅ No Memory DP
function fib(n) {
  if (n <= 1) return n;

  let prev = 0, current = 1, next;

  for (let i = 2; i <= n; i++) {
    next = prev + current;
    [prev, current] = [current, next]
  }

  return next;
}

const res = fib(10);
console.log(res);

// ✅ Optimized Fibonacci with Tabulation:
// function fib(n) {
//   if (n <= 1) return n;

//   const dp = new Array(n + 1);
//   dp[0] = 0;
//   dp[1] = 1;

//   for (let i = 2; i <= n; i++) {
//     dp[i] = dp[i - 1] + dp[i - 2];
//   }

//   return dp[n];
// }

// const res = fib(10);
// console.log(res);

// ✅ Recursion + memoization Top Down Approach
// function fib(n, memo = {}) {
//   if (n in memo) return memo[n];
//   if (n <= n) return n;
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// }

// const res = fib(10);
// console.log(res);
