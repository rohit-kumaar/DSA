const factNum = 500;

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(factNum));

// 5! = 5 * (5 - 1)!
// n! = n * (n - 1)!
// f(n) = n * f(n -1)
