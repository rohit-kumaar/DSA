/**
 * 0 n = 0;
 * 1 n = 1;
 * (n - 1) + (n - 2) n > 1;
 */

const fib = (n) => {
  let seq = [0, 1];
  for (let i = 2; i <= n; i++) {
    seq[i] = seq[i - 1] + seq[i - 2];
  }
  return seq;
};

console.log("fib(3)", fib(3));
