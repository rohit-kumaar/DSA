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
      const result = fx(x);
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
