const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
};

console.log("factorial(1)", factorial(1));
console.log("factorial(2)", factorial(2));
console.log("factorial(3)", factorial(3));
console.log("factorial(4)", factorial(4));
console.log("factorial(5)", factorial(5));
