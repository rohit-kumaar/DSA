const iife = (function () {
  return {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
  };
})();

console.log(iife.add(2, 3));
console.log(iife.subtract(5, 2));
