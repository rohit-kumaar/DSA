/* JavaScript
A decorator is a function that wraps another function or modify its behavior.
*/

const routers = [];

function findAll() {
  console.log("Get all Users");
}

function Get(path = "") {
  return function (handlerFunction) {
    routers.push({
      method: "GET",
      path: path,
      handler: handlerFunction,
    });
  };
}

const users = Get("/users")(findAll);
console.log(routers);

/* Angular
Decorators provide a way to add metadata or modify the behavior of classes, methods, properties, getters/setters, or fields using a declarative @ syntax. They are inspired by languages like Python and are mainly used for meta-programming.
*/

function heavy(x) {
  console.log(x + " : heavy");
  return x + " : heavy";
}

function memoize(fs) {
  const map = new Map(); // hashmap

  return function (x) {
    if (map.has(x)) {
      return map.get(x);
    }

    const result = fs(x);
    map.set(x, result);
    return result;
  };
}

const memorized = memoize(heavy);

console.log(memorized(40));
console.log(memorized(39));
console.log(memorized(41));
console.log(memorized(42));
