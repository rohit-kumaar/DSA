const calculator = (function () {
  return {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
  };
})();

console.log(calculator.add(2, 3));
console.log(calculator.subtract(5, 2));
