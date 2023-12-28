const iimf = (function () {
  return {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
  };
})();

console.log(iimf.add(2, 3));
console.log(iimf.subtract(5, 2));
