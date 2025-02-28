// A decorator is a function that wraps another function or modify its behavior without changing its original structure.

function heavy(x) {
  console.log(x + " : heavy");
  return x + " : heavy";
}

function memoize(fs) {
  const map = new Map(); // hashmap

  return function (x) {
    if (map.has(x)) {
      return map.get(x);
    } else {
      const result = fs(x);
      map.set(x, result);
      return result;
    }
  };
}

const memorized = memoize(heavy);

console.log(memorized(40));
console.log(memorized(39));
console.log(memorized(41));
console.log(memorized(42));
