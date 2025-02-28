"use strict";

const task = {
  name: "demo",
  heavy(x) {
    console.log(`${x} : heavy ${this.name}`);
    return `${x} : heavy ${this.name}`;
  },
};

function memoize(fs) {
  const map = new Map();

  return function (x) {
    if (map.has(x)) {
      return map.get(x);
    } else {
      /* --------------------------------- */
      /* START : Introducing call method   */
      /* --------------------------------- */
      const result = fs(x);
      // const result = fs.call(this, x);

      /* --------------------------------- */
      /* END   : Introducing call method   */
      /* --------------------------------- */
      map.set(x, result);
      return result;
    }
  };
}

task.heavy(1);
task.memorized = memoize(task.heavy);
console.log(task.memorized(1));
