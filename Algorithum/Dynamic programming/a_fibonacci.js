/**
 * "If the number is in the memo, return it, otherwise, calculate it and add it to the memo."
 *
 * The memo is an object that stores the numbers that have already been calculated.
 *
 * The first time fib(5) is called, it will return fib(4) + fib(3).
 *
 * The second time fib(5) is called, it will return the value stored in memo[5] instead of calculating
 * it again
 * @param n - the number we want to find the fibonacci number for
 * @param [memo] - an object that stores the results of the recursive calls
 * @returns 8
 */
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
let result = fib(6);
console.log(result);
